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

    //获取聊天记录
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

    //好友列表
    public static function getChatFriendsList($uid)
    {
        $connection = Mongo::connectMongo('chatFriendsList');
        $list = $connection->select('receive_id','updated_at','unread_num')
            ->where('uid',(int)$uid)->get()->toArray();
        $friends = [];
        if(!empty($list)){
            foreach ($list as $key=>$val){
                $info = self::getInfo($val['receive_id']);
                $friends[$key]['uid'] = $val['receive_id'];
                $friends[$key]['unread_num'] = $val['unread_num'];
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
    //新开一个聊天窗口
    public static function getNewTalk($newUid,$uid)
    {
        $friend = self::getInfo($newUid);
        $friends = self::getChatFriendsList($uid);
        $new = [];
        if($friend){
            $new[0]['uid'] = $newUid;
            $new[0]['head_image'] = $friend->head_image;
            $new[0]['username'] = $friend->username;
            $new[0]['updated_at'] = time();
        }
        if(!empty($new)){
            $friends = array_merge($new,$friends);
        }
        return self::arrayFilter($friends,'uid');
    }

    private static function arrayFilter($arr,$key)
    {
        if(!empty($arr)){
            $tmp_arr = array();
            foreach ($arr as $k => $v) {
                if (in_array($v[$key], $tmp_arr)) {//搜索$v[$key]是否在$tmp_arr数组中存在，若存在返回true
                    unset($arr[$k]);
                } else {
                    $tmp_arr[] = $v[$key];
                }
            }
            //sort($arr); //sort函数对数组进行排序
        }
        return $arr;
    }
}
