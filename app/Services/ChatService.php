<?php

namespace App\Services;

use App\Extensions\ReturnModel;
use App\Models\Chat;
use Mockery\Exception;
use Illuminate\Support\Facades\DB;

/**
 * 用信息服务提供
 */
class ChatService
{
    /**
     * 获取聊天记录列表
     * @param $uid
     * @return mixed
     */
    public static function getChatList($uid,$receiveUid,$page)
    {
        $returnModel = new ReturnModel();
        try {
            //初期先用mysql
            $data = [];
            $data = Chat::getChatList($uid,$receiveUid,$page);
            if (!empty($data)) {
                $returnModel->setData(array_reverse($data));
            }
        } catch (Exception $e) {
            $returnModel->initFail($e->getMessage());
        }
        return $returnModel->toArray();
    }

    /**
     * 获取聊天好友列表
     */
    public static function getChatFriendList($uid)
    {
        $returnModel = new ReturnModel();
        try {
            //初期先用mysql
            $data = [];
            $data = Chat::getChatFriendsList($uid);
            if (!empty($data)) {
                $returnModel->setData($data);
            }
        } catch (Exception $e) {
            $returnModel->initFail($e->getMessage());
        }
        return $returnModel->toArray();
    }


}
