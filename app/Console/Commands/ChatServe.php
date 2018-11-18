<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;

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
            //var_dump($request->fd, $request->get, $request->server);
            //Yii::$app->redis->set('fds',json_encode($users));
            //Redis::set();
            //var_dump($request);
            echo $request->fd.PHP_EOL;
            $GLOBALS['fd'][] = $request->fd;
            //$ws->push($request->fd,file_get_contents('http://imgsrc.baidu.com/imgad/pic/item/267f9e2f07082838b5168c32b299a9014c08f1f9.jpg'),WEBSOCKET_OPCODE_BINARY);
        });

        //监听WebSocket消息事件
        $ws->on('message', function ($ws, $frame) {
            //var_dump($frame);
            $return_data=mb_convert_encoding($frame->data, "UTF-8","UTF-8");
            $receive = json_decode($return_data,1);//用户登录聊天界面会发送一个登录uid
            if(isset($receive['uid'])){
                $fd = DB::table('wesocket_connect')->where('uid',$receive['uid'])->where('fd',$frame->fd)->get()->toArray();
                if(empty($fd)){
                    DB::table('wesocket_connect')->insert([
                        ['uid'=>$receive['uid'],'fd'=>$frame->fd]
                    ]);
                }
            }
            if(isset($receive['send_uid'])){
                //1.往好友表插入数据
                $talk = DB::table('chat_friends_list')->where('uid', $receive['send_uid'])->where('receive_id', $receive['receive_uid'])->get()->toArray();
                if (empty($talk)) {
                    DB::table('chat_friends_list')->insert([
                        ['uid' => $receive['send_uid'], 'receive_id' => $receive['receive_uid'],'updated_at' =>date('Y-m-d H:i:s')]
                    ]);
                } else {
                    DB::table('chat_friends_list')->where('uid',$receive['send_uid'])->where('receive_id',$receive['receive_uid'])
                        ->update(['updated_at' =>date('Y-m-d H:i:s')]);

                }
                //2.将消息存入消息表
                DB::table('chat')->insert([
                    'send_uid'=>$receive['send_uid'],
                    'receive_uid' =>$receive['receive_uid'],
                    'message'=>$receive['message'],
                    'create_time' =>time()
                    ]);

                $fds_send = DB::table('wesocket_connect')->select('fd')->where('uid',$receive['send_uid'])->get()->toArray();
                $fds_receive = DB::table('wesocket_connect')->select('fd')->where('uid',$receive['receive_uid'])->get()->toArray();
                $fds = [];
                if(!empty($fds_send)){
                    foreach ($fds_send as $val){
                        $fds[] = $val->fd;
                    }
                }
                if(!empty($fds_receive)){
                    foreach ($fds_receive as $val){
                        $fds[] = $val->fd;
                    }
                }
            }

            echo $frame->fd.PHP_EOL;
            echo "Message: {$frame->data}\n";
            if(isset($fds) && !empty($fds)){
                $fds = array_unique($fds);
                foreach ($fds as $val){
                    $ws->push($val,$frame->data);
                }
            }

            //$ws->push($frame->fd, "server: {$frame->data}");
        });

        //监听WebSocket连接关闭事件
        $ws->on('close', function ($ws, $fd) {
            echo "client-{$fd} is closed\n";
            DB::table('wesocket_connect')->where('fd',$fd)->delete();
        });
        $ws->start();

    }
}
