<?php

namespace App\Console\Commands;

use App\Mongo;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ChatServe extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'chat{action?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'chat';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $action = $this->argument('action');
        switch ($action) {
            case 'close':

                break;

            default:
                $this->start();
                break;
        }
    }

    //connect 思路是获取登录的人的登录uid 和 fd 推送时精准推送到fd

    public function start()
    {
        $ws = new \swoole_websocket_server("0.0.0.0", 9502);

        //监听WebSocket连接打开事件
        $ws->on('open', function ($ws, $request) {
            //var_dump($request);
            echo $request->fd.PHP_EOL;
            //$ws->push($request->fd,file_get_contents('http://imgsrc.baidu.com/imgad/pic/item/267f9e2f07082838b5168c32b299a9014c08f1f9.jpg'),WEBSOCKET_OPCODE_BINARY);
        });
        //监听WebSocket消息事件
        $ws->on('message', function ($ws, $frame) {
            //var_dump($frame);
            $return_data=mb_convert_encoding($frame->data, "UTF-8","UTF-8");
            $receive = json_decode($return_data,1);//用户登录聊天界面会发送一个登录uid
            $type = isset($receive['type']) ? $receive['type'] : '';
            $status = isset($receive['status']) ? $receive['status'] : '';
            var_dump($receive);
            if(isset($receive['uid']) && $type == 'init'){
                $fd = Mongo::connectMongo('wesocketConnect')->where('uid',$receive['uid'])->where('fd',$frame->fd)->get()->toArray();
                if(empty($fd)){
                    $res = Mongo::connectMongo('wesocketConnect')->insert([
                        ['uid'=>$receive['uid'],'fd'=>$frame->fd]
                    ]);
                }
            }
            //未读1{"status":"'+ 0 +'","send_uid":'+ data.send_uid +',"receive_uid":'+ user_uid +',"type":"is_read"}
            if($type == 'is_read' && $status == 0){
                $numArr = Mongo::connectMongo('chatFriendsList')->select('unread_num')->where('uid', $receive['receive_uid'])
                    ->where('receive_id', $receive['send_uid'])->get()->toArray();
                $num = isset($numArr[0]['unread_num']) ?  $numArr[0]['unread_num'] : 0;
                Mongo::connectMongo('chatFriendsList')->where('uid', $receive['receive_uid'])->where('receive_id', $receive['send_uid'])
                    ->update(['unread_num' => $num + 1]);
            }
            //已读
            if($type == 'is_read' && $status == 1){
                Mongo::connectMongo('chatFriendsList')->where('uid', $receive['send_uid'])->where('receive_id', $receive['receive_uid'])
                    ->update(['unread_num' => 0]);
            }

            if(isset($receive['send_uid']) && $type == 'msg'){
                //1.将消息存入消息表
                Mongo::connectMongo('chat')->insert([
                    'send_uid'=>$receive['send_uid'],
                    'receive_uid' =>$receive['receive_uid'],
                    'message'=>$receive['message'],
                    'is_del'=> 0,
                    'create_time' =>time()
                ]);
                //2.获取需要推送消息的fd
                echo $receive['send_uid'].PHP_EOL;
                $fds_send = Mongo::connectMongo('wesocketConnect')->select('fd')->where('uid',$receive['send_uid'])->get()->toArray();
                echo $receive['receive_uid'].PHP_EOL;
                $fds_receive = Mongo::connectMongo('wesocketConnect')->select('fd')->where('uid',$receive['receive_uid'])->get()->toArray();
                $fds = [];
                //1.往好友表插入数据 如果没有receive fd 说明未读
                $talk = Mongo::connectMongo('chatFriendsList')->where('uid', $receive['send_uid'])->where('receive_id', $receive['receive_uid'])->get()->toArray();
                if (empty($talk)) {
                    Mongo::connectMongo('chatFriendsList')->insert([
                        ['uid' => $receive['send_uid'], 'receive_id' => $receive['receive_uid'],'unread_num'=>0,'updated_at' =>time()]
                    ]);
                } else {
                    Mongo::connectMongo('chatFriendsList')->where('uid',$receive['send_uid'])->where('receive_id',$receive['receive_uid'])
                        ->update(['updated_at' =>time()]);

                }
                $talk = Mongo::connectMongo('chatFriendsList')->where('uid', $receive['receive_uid'])->where('receive_id', $receive['send_uid'])->get()->toArray();
                if (empty($talk)) {
                    Mongo::connectMongo('chatFriendsList')->insert([
                        ['uid' => $receive['receive_uid'], 'receive_id' => $receive['send_uid'],'unread_num'=>0,'updated_at' =>time()]
                    ]);
                } else {
                    if (empty($fds_receive)) {
                        $numArr = Mongo::connectMongo('chatFriendsList')->select('unread_num')->where('uid', $receive['receive_uid'])
                            ->where('receive_id', $receive['send_uid'])->get()->toArray();
                        $num = isset($numArr[0]['unread_num']) ?  $numArr[0]['unread_num'] : 0;
                        Mongo::connectMongo('chatFriendsList')->where('uid', $receive['receive_uid'])->where('receive_id', $receive['send_uid'])
                            ->update(['updated_at' => time(), 'unread_num' => $num + 1]);
                    } else {
                        Mongo::connectMongo('chatFriendsList')->where('uid', $receive['receive_uid'])->where('receive_id', $receive['send_uid'])
                            ->update(['updated_at' => time()]);
                    }
                }
                if(!empty($fds_send)){
                    foreach ($fds_send as $val){
                        $fds[] = $val['fd'];
                    }
                }
                if(!empty($fds_receive)){
                    foreach ($fds_receive as $val){
                        $fds[] = $val['fd'];
                    }
                }
            }
            echo $frame->fd.PHP_EOL;
            echo "Message: {$frame->data}\n";
            //var_dump($fds);echo $type.PHP_EOL;
            if (isset($fds) && !empty($fds) && $type == 'msg') {
                $fds = array_unique($fds);
                foreach ($fds as $val) {
                    $ws->push($val, $frame->data);
                }
            }

            //$ws->push($frame->fd, "server: {$frame->data}");
        });

        //监听WebSocket连接关闭事件
        $ws->on('close', function ($ws, $fd) {
            echo "client-{$fd} is closed\n";
            $connect = Mongo::connectMongo('wesocketConnect');
            $connect->where('fd',$fd)->delete();
        });
        $ws->start();

    }
}
