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

    public static function getChatFriendsList($uid)
    {
        return DB::select('select a.`receive_id` as uid,a.updated_at,b.head_image,b.username
                from mt_chat_friends_list as a 
                INNER JOIN mt_user as b on a.receive_id = b.id
                where a.uid = ? ORDER BY updated_at DESC 
              ', [$uid]);
    }
}
