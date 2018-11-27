<?php

namespace App\Http\Controllers;


use App\Extensions\Auth;
use App\Extensions\ReturnModel;
use App\Services\ChatService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Extensions\UploadModel;

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
        return view('chat/index',[
            'freinds'=>$freinds['data']
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
}
