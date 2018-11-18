<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Chat extends Model
{
    //
    protected   $table = 'chat';

    //获取聊天记录
    public static function getChatList($uid, $receiveUid, $page = 1, $limit = 10)
    {
        $page = ($page - 1) * $limit;
        return DB::select('select message,send_uid,receive_uid,create_time 
              from mt_chat where (send_uid = ? and receive_uid =?) or (send_uid = ? and receive_uid =?)
              ORDER BY create_time DESC limit ?,10
              ', [$uid, $receiveUid, $receiveUid, $uid, $page]);
    }
}
