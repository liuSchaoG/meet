<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\Mongo;

class Chat extends Model
{
    //
    protected   $table = 'chat';

    //获取聊天记录
    /*public static function getChatList($uid, $receiveUid, $page = 1, $limit = 10)
    {
        $page = ($page - 1) * $limit;
        return DB::select('select message,send_uid,receive_uid,create_time 
              from mt_chat where (send_uid = ? and receive_uid =?) or (send_uid = ? and receive_uid =?)
              ORDER BY create_time DESC limit ?,10
              ', [$uid, $receiveUid, $receiveUid, $uid, $page]);
    }*/

    public static function getChatList($uid, $receiveUid, $page = 1, $limit = 10)
    {
        $page = ($page - 1) * $limit;
        $connection = Mongo::connectMongo('chat');
        return $connection->select('message','send_uid','receive_uid','create_time')
            ->where([['send_uid', '=', $uid], ['receive_uid', '=', $receiveUid]])
            ->orwhere([['send_uid', '=', $receiveUid], ['receive_uid', '=', $uid]])
            ->offset($page)
            ->limit($limit)
            ->orderBy('create_time', 'desc')
            ->get()->toArray();
    }

    public static function getChatFriendsList($uid)
    {
        $connection = Mongo::connectMongo('chatFriendsList');
        $list = $connection->select('receive_id','updated_at')
            ->where('uid',(int)$uid)->get()->toArray();
        $friends = [];
        if(!empty($list)){
            foreach ($list as $key=>$val){
                $info = self::getInfo($val['receive_id']);
                $friends[$key]['uid'] = $val['receive_id'];
                $friends[$key]['head_image'] = $info->head_image;//待优化
                $friends[$key]['username'] = $info->username;//待优化
                $friends[$key]['updated_at'] = $val['updated_at'];
            }
        }
        return $friends;
    }

    public static function getInfo($uid)
    {
        return DB::table('user')->select('username','head_image')->where('id','=',$uid)->first();
    }
}
