<?php

namespace App\Services;

use App\Models\Preference;
use App\Models\UserInfo;
use App\Services\AreaService;
use Illuminate\Support\Facades\DB;
/**
 * 用户信息服务提供
 */
class UserService 
{
	/**
	 * single  user_base info 
	 * @author charlesliu 2018-11-07T14:22:31+0800
	 * @param  [type] $uid [description]
	 * @return [type]      [description]
	 */
    public function getUserBase($uid)
    {
        $field = ['uid','user_name','phone','area_province','area_city','area','income','height','marry_status','education','college'];
        $info = UserInfo::select($field)->firstOrCreate(['uid'=>$uid])->toArray();
        if(!isset($info['user_name'])){
            $info = UserInfo::where(['uid'=>$uid])->first()->toArray();
        }
        $info['phone'] = session('phone');
        return $info;
    }


    /**
     * [getUserDetail description]
     * @author liuchao 2018-11-18T15:43:37+0800
     * @param  string $value [description]
     * @return [type]        [description]
     */
    public function getUserDetail($uid)
    {
        $field = ['uid','origin_province','origin_city','weight','shape','constellation','nation','marry_time','has_child','want_child'];
        $info = UserInfo::select($field)->firstOrCreate(['uid'=>$uid])->toArray();
        return $info;
    }
    /**
     * [getNations description]
     * @author charlesliu 2018-11-19T15:17:05+0800
     * @param  string $value [description]
     * @return [type]        [description]
     */
    public function getNations($value='')
    {
        $info = DB::table('nations')->select(['id','name'])->orderBy('id','desc')->get()->toArray();
        return $info;
    }

    /**
     * [getUserWLife description]
     * @author liuchao 2018-11-18T18:35:32+0800
     * @param  [type] $uid [description]
     * @return [type]      [description]
     */
    public function getUserWLife($uid)
    {
        $field = ['uid','industry','vacation','job','house_status','car_status','smoke_status','drink_status'];
        $info = UserInfo::select($field)->firstOrCreate(['uid'=>$uid])->toArray();
        return $info;
    }

    /**
     * [getUserItalk description]
     * @author liuchao 2018-11-18T18:35:36+0800
     * @param  [type] $uid [description]
     * @return [type]      [description]
     */
    public function getUserItalk($uid)
    {
        $field = ['uid','inner_idea'];
        $info = UserInfo::select($field)->firstOrCreate(['uid'=>$uid])->toArray();
        return $info;
    }

    /**
     * [getUserIhobby description]
     * @author liuchao 2018-11-18T18:35:40+0800
     * @param  [type] $uid [description]
     * @return [type]      [description]
     */
    public function getUserIhobby($uid)
    {
        $field = ['uid','foods','idol','song','book','hobby'];
        $info = UserInfo::select($field)->firstOrCreate(['uid'=>$uid])->toArray();
        return $info;
    }

    /**
     * [getUserPerference description]
     * @author liuchao 2018-11-18T18:35:44+0800
     * @param  [type] $uid [description]
     * @return [type]      [description]
     */
    public function getUserPerference($uid)
    {
        $field = ["uid","max_age","min_age","max_height", "min_height", "max_income","min_income","education","marry_status","shape","area_province","area_city","area","has_child","is_smoke","is_drink","has_photo"];
        $info = Preference::select($field)->firstOrCreate(['uid'=>$uid])->toArray();
        if(!isset($info['max_age'])){
            $info = Preference::select($field)->where(['uid'=>$uid])->first()->toArray();
        }
        return $info;
    }

    /**
     * [getUserIdentify description]
     * @author liuchao 2018-11-18T18:35:48+0800
     * @param  [type] $uid [description]
     * @return [type]      [description]
     */
    public function getUserIdentify($uid)
    {
        $field = ['uid','origin_province','origin_city','weight','shape','constellation','nation','marry_time'];
        $info = UserInfo::select($field)->firstOrCreate(['uid'=>$uid])->toArray();
        return $info;
    }

    /**
     * [getUserAlbum description]
     * @author liuchao 2018-11-18T18:35:52+0800
     * @param  [type] $uid [description]
     * @return [type]      [description]
     */
    public function getUserAlbum($uid)
    {
        $field = ['uid','origin_province','origin_city','weight','shape','constellation','nation','marry_time'];
        $info = UserInfo::select($field)->firstOrCreate(['uid'=>$uid])->toArray();
        return $info;
    }

    /**
     * [getUserSetright description]
     * @author liuchao 2018-11-18T18:35:57+0800
     * @param  [type] $uid [description]
     * @return [type]      [description]
     */
    public function getUserSetright($uid)
    {
        $field = ['uid','origin_province','origin_city','weight','shape','constellation','nation','marry_time'];
        $info = UserInfo::select($field)->firstOrCreate(['uid'=>$uid])->toArray();
        return $info;
    }

    /**
     * [getUserSetpass description]
     * @author liuchao 2018-11-18T18:36:01+0800
     * @param  [type] $uid [description]
     * @return [type]      [description]
     */
    public function getUserSetpass($uid)
    {
        $field = ['uid','origin_province','origin_city','weight','shape','constellation','nation','marry_time'];
        $info = UserInfo::select($field)->firstOrCreate(['uid'=>$uid])->toArray();
        return $info;
    }


    /**
     * [saveUserBase update userBaseInfo ]
     * @author charlesliu 2018-11-08T16:46:38+0800
     * @param  [type] $params [description]
     * @return [type]         [description]
     */
    public function saveUserBase($params)
    {
        unset($params['_token']);
        unset($params['action']);
        return UserInfo::where('uid',$params['uid'])->update($params);
    }

    /**
     * [savePrefernce description]
     * @author liuchao 2018-11-20T22:17:49+0800
     * @param  [type] $params [description]
     * @return [type]         [description]
     */
    public function savePrefernce($params)
    {
        unset($params['_token']);
        unset($params['action']);
        return Preference::where('uid',$params['uid'])->update($params);
    }


    

    protected function dealSelectArea($pid,$id,$deep)
    {
        $areaService = new AreaService;
        $str = '';
        switch ($deep) {
            case '1':
                $ps = $areaService -> provences();
                foreach ($ps as $k => $v) {
                    if($v['id']==$id){
                        $str.='<option value='.$v['id'].' seleced>'.$v['name'].'</option>';
                    }else{
                        $str.='<option value='.$v['id'].'>'.$v['name'].'</option>';
                    }
                }
                break;
            case '2':
                $ps = $areaService -> citys($pid);
                foreach ($ps as $k => $v) {
                    if($v['id']==$id){
                        $str.='<option value='.$v['id'].' seleced>'.$v['name'].'</option>';
                    }else{
                        $str.='<option value='.$v['id'].'>'.$v['name'].'</option>';
                    }
                }
                break;
            case '3':
                $ps = $areaService -> areas($pid);
                foreach ($ps as $k => $v) {
                    if($v['id']==$id){
                        $str.='<option value='.$v['id'].' seleced>'.$v['name'].'</option>';
                    }else{
                        $str.='<option value='.$v['id'].'>'.$v['name'].'</option>';
                    }
                }
                break;
        }
        return $str;
    }

    
    

}
