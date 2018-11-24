<?php

namespace App\Services;

use App\Models\Album;
use Illuminate\Support\Facades\DB;
/**
 * 相册服务提供
 */
class AlbumService 
{

    /**
     * [getUserAlbum description]
     * @author charlesliu 2018-11-20T16:21:59+0800
     * @param  [type] $uid [description]
     * @return [type]      [description]
     */
    public function getUserAlbum($uid)
    {
        $where['uid'] = $uid;
        return Album::where($where)->select(['id','uid','alb_id','type','img','created_at','updated_at'])->get()->toArray();
    }

    /**
     * [getUserPhotos description]
     * @author charlesliu 2018-11-20T16:35:08+0800
     * @param  [type] $uid [description]
     * @return [type]      [description]
     */
    public function getUserPhotos($uid)
    {
        if(isset($uid)){
            $where['area_parent_id'] = $pid;
        }else{
            $where['area_deep'] = 1;
        }
        return Album::where($where)->select('area_id as id', 'area_name as name')->get()->toArray();
    }

    // /**
    //  * 
    //  * @author charlesliu 2018-11-20T16:35:27+0800
    //  * @param  string $value [description]
    //  * @return [type]        [description]
    //  */
    // public function getUserPhotos($value='')
    // {
    //     # code...
    // }

}