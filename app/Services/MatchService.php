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
        $field = ['user_info.uid','user_info.user_name','user_info.area_city','user_info.income','user_info.height','user_info.marry_status','user_info.education','user_info.college', 'area.area_name','user.username','user.head_image','user.created_at','user_info.job','position.name job_name'];
        if($sex==1){
        	$where['user_info.sex'] = 2;
        }else{
        	$where['user_info.sex'] = 1;
        }
        $list_p = UserInfo::where($where) 
        				 -> leftJoin('area', 'user_info.area_city', '=', 'area.area_id')
        				 -> leftJoin('user', 'user_info.uid', '=', 'user.id')
        				 -> leftJoin('position', 'user_info.job', '=', 'position.id')
        				 -> select($field)
            			 -> paginate(15);
        
        return $list_p;//列表含分页
    }


    

}
