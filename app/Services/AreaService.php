<?php

namespace App\Services;

use App\Models\Area;
use Illuminate\Support\Facades\DB;
/**
 * 用户信息服务提供
 */
class AreaService 
{

    /**
     * [childs description]  获取地区父子 集合
     * @author charlesliu 2018-11-19T11:09:43+0800
     * @param  [type] $pid [description]
     * @return [type]      [description]
     */
    public function childs($pid)
    {
        if(isset($pid)){
            $where['area_parent_id'] = $pid;
        }else{
            $where['area_deep'] = 1;
        }
        return Area::where($where)->select('area_id as id', 'area_name as name')->get()->toArray();
    }


    /**
     * [positionChilds description]
     * @author liuchao 2018-11-19T21:58:14+0800
     * @param  string $value [description]
     * @return [type]        [description]
     */
    public function positionChilds($pid)
    {
        if(isset($pid)){
            $where['pid'] = $pid;
        }else{
            $where['pid'] = 0;
        }
        return DB::table('position')->where($where)->select('id', 'name')->get()->toArray();
    }

	/**
	 * getProvences list
	 * @author charlesliu 2018-11-07T14:22:31+0800
	 * @param  [type] $uid [description]
	 * @return [type]      [description]
	 */
    public function provences()
    {   
        return Area::where(['area_deep'=>1])->select('area_id as id', 'area_name as name')->get()->toArray();
    }

    /**
     * [citys list]
     * @author charlesliu 2018-11-08T16:46:38+0800
     * @param  [type] $params [description]
     * @return [type]         [description]
     */
    public function citys($pid)
    {
        return Area::where(['area_parent_id'=>$pid])->select('area_id as id', 'area_name as name')->get()->toArray();
    }

    /**
     * [areas list]
     * @author charlesliu 2018-11-08T16:46:38+0800
     * @param  [type] $params [description]
     * @return [type]         [description]
     */
    public function areas($pid)
    {
        return Area::where(['area_parent_id'=>$pid])->select('area_id as id', 'area_name as name')->get()->toArray();
    }

}
