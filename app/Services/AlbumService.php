<?php

namespace App\Services;

use App\Models\Album;
use App\Models\Picture;
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
    public function getUserAlbum()
    {
        $where['uid'] = session('id');
        return Album::where($where)->select(['id','uid','alb_id','name','img','created_at','updated_at'])->get()->toArray();
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



    public function userCreateAlbum($params)
    {
        unset($params['_token']);
        $params['uid'] = session('id');
        $where['uid'] = session('id');
        $count = Album::where($where)->count();
        $params['alb_id'] = $count + 1;
        return Album::insert($params);
    }


    public function getPictures($alb_id)
    {   
        $con['uid'] = session('id');
        $con['alb_id'] = $alb_id;

        $list = Picture::where($con)->paginate(8);

        return $list;
    }


    



















}
