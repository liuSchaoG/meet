<?php

namespace App\Services;

use App\Models\Area;
use Illuminate\Support\Facades\DB;
/**
 * 扩展信息服务提供
 */
class ExtenService 
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

}
