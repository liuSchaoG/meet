<?php

namespace App\Services;

use App\Models\Area;
/**
 * 用户信息服务提供
 */
class AreaService 
{
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
