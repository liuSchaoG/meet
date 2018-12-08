<?php

namespace App\Services;

use App\User;
use App\Models\Preference;
use App\Models\UserInfo;
use Illuminate\Support\Facades\DB;
/**
 * 匹配信息服务提供
 */
class MatchService 
{

    /**
     * 获取默认匹配的列表
     * @author liuchao 2018-12-05T22:30:56+0800
     * @param  [type] $pid [description]
     * @return [type]      [description]
     */
    public function getDefaultList($param)
    {
        //根据个人选择偏好 生成筛选条件
        //查询userinfo表 
        $sex = session('sex');
        $uid = session('id');
        $field = ['uid','user_name','phone','area_province','area_city','area','income','height','marry_status','education','college'];
        $where['sex'] = $sex;
        $list_p = UserInfo::select($field) ->where($where) ->paginate(15);

        return $list_p;//列表含分页
    }


    

}
