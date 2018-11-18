<?php

namespace App\Http\Controllers;


use App\Extensions\Auth;
use App\Services\ChatService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class ChatController extends Controller
{

    //首页
    public function index()
    {
        return view('chat/index');
    }

    //获取聊天记录
    public function getChatList(Request $request)
    {
        if($request->isMethod('POST')){
            $sendId = $request->input('send_uid');
            $receiveId = $request->input('receive_uid');
            $page = $request->input('page');
            echo json_encode(ChatService::getChatList($sendId,$receiveId,$page));
        }
    }
}
