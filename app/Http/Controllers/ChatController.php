<?php

namespace App\Http\Controllers;


use App\Extensions\Auth;
use App\Extensions\ReturnModel;
use App\Services\ChatService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Extensions\UploadModel;
use App\Mongo;

class ChatController extends Controller
{

    //首页
    public function index(Request $request)
    {
        $uid = \session('id');
        $id = $request->input('id');
        if(!empty($id)){
            $freinds = ChatService::getNewTalk($id,$uid);//获取好友列表
        }else{
            $freinds = ChatService::getChatFriendList($uid);//获取好友列表
        }
        $checkToken = Mongo::connectMongo('chatToken')->select('token')->where('uid',$uid)->get()->toArray();
        return view('chat/index',[
            'freinds'=>$freinds['data'],
            'chatToken'=>isset($checkToken[0]['token']) ? $checkToken[0]['token'] : ''
        ]);
    }

    //获取聊天记录
    public function getChatList(Request $request)
    {
        if($request->isMethod('POST')){
            $sendId = $request->input('send_uid');
            $receiveId = $request->input('receive_uid');
            $page = $request->input('page');
            echo json_encode(ChatService::getChatList((int)$sendId,(int)$receiveId,$page));
        }
    }

    public function getChatFriendList(Request $request)
    {
        if($request->isMethod('POST')){
            $sendId = $request->input('send_uid');
            $receiveId = $request->input('receive_uid');
            //$a = ChatService::getChatFriendList($sendId,$receiveId);
            echo json_encode(ChatService::getChatFriendList($sendId,$receiveId));
        }
    }

    public function upload(Request $request)
    {
        $return = new ReturnModel();
        try{
            $file = $request->file('file');
            $path = 'chat/' . date('Ymd') . '/';
            $result = UploadModel::Upload($file, $path);
            if($result){
                $return->setData($result);
            }else{
                throw new \Exception('图片上传失败');
            }
        }catch (\Exception $e){
            $return->initFail($e->getMessage());
        }
        echo json_encode($return->toArray());
    }

    //置顶
    public function setTop(Request $request)
    {
        $return = new ReturnModel();
        try{
            $uid = $request->input('uid');
            $friend_uid = $request->input('friend_uid');
            $isFan =Mongo::connectMongo('chatFriendsList')->select('is_fan')
                ->where('uid', (int)$uid)->where('receive_id', (int)$friend_uid)->get()->toArray();
            $fan = empty($isFan) || $isFan[0]['is_fan'] == 0 ? 1 : 0;
            $res = Mongo::connectMongo('chatFriendsList')->where('uid', (int)$uid)->where('receive_id', (int)$friend_uid)
                ->update(['updated_at' => time(),'is_fan'=>$fan]);
            $return->setData($fan);
        }catch (\Exception $e){
            $return->initFail($e->getMessage());
        }
        echo json_encode($return->toArray());
    }
}
