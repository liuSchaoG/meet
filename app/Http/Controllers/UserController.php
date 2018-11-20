<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use Illuminate\Http\Request;
//每个控制器建立一个文件夹  每个方法根据需要加一个表单验证
use App\Http\Requests\User\UserBaseRequest;


/**
 * 用户个人信息业务处理模块
 */
class UserController extends  Controller
{
    
    private $userService;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(UserService $userService)
    {
        $this->middleware('checkAuth');
        $this -> userService = $userService;
    }

    /**
     * userbase_info
     * @author charlesliu 2018-11-06T18:12:33+0800
     * @param  string $value [description]
     */
    public function baseInfo(Request $request)
    {
        $uid = $request -> uid;
        $info = $this -> userService -> getUserBase($uid);
        return view('user.baseInfo',$info);
    }

    /**
     * [DetailInfo description]
     * @author liuchao 2018-11-17T22:13:08+0800
     * @param  string $value [description]
     */
    public function detailInfo(Request $request)
    {
        $uid = $request -> uid;
        $info = $this -> userService -> getUserDetail($uid);
        $info['nations'] = $this -> userService -> getNations();
        return view('user.detailInfo',$info);
    }

    /**
     * [WorkLife description]
     * @author liuchao 2018-11-17T22:15:22+0800
     * @param  string $value [description]
     */
    public function workLife(Request $request)
    {
        $uid = $request -> uid;
        $info = $this -> userService -> getUserWLife($uid);
        return view('user.workLife',$info);
    }

    /**
     * [InnerTalk description]
     * @author liuchao 2018-11-17T22:15:26+0800
     * @param  string $value [description]
     */
    public function innerTalk(Request $request)
    {
        $uid = $request -> uid;
        $info = $this -> userService -> getUserItalk($uid);
        return view('user.innerTalk',$info);
    }

    /**
     * [InterHobby description]
     * @author liuchao 2018-11-17T22:15:31+0800
     * @param  string $value [description]
     */
    public function interHobby(Request $request)
    {
        $uid = $request -> uid;
        $info = $this -> userService -> getUserIhobby($uid);
        return view('user.interHobby',$info);
    }

    /**
     * [Perference description]
     * @author liuchao 2018-11-17T22:15:41+0800
     * @param  string $value [description]
     */
    public function perference(Request $request)
    {
        $uid = $request -> uid;
        $info = $this -> userService -> getUserPerference($uid);
        return view('user.perference',$info);
    }

    /**
     * [Identify description]
     * @author liuchao 2018-11-17T22:15:51+0800
     * @param  string $value [description]
     */
    public function identify(Request $request)
    {
        $uid = $request -> uid;
        $info = $this -> userService -> getUserIdentify($uid);
        return view('user.identify',$info);
    }

    /**
     * [SetRight description]
     * @author liuchao 2018-11-17T22:16:02+0800
     * @param  string $value [description]
     */
    public function setRight(Request $request)
    {
        $uid = $request -> uid;
        $info = $this -> userService -> getUserSetright($uid);
        return view('user.setRight',$info);
    }

    /**
     * [SetPass description]
     * @author liuchao 2018-11-17T22:16:07+0800
     * @param  string $value [description]
     */
    public function setPass(Request $request)
    {
        $uid = $request -> uid;
        $info = $this -> userService -> getUserSetpass($uid);
        return view('user.setPass',$info);
    }

    /**
     * userbase_save
     * @author charlesliu 2018-11-07T13:55:15+0800
     * @param  string $value [description]
     */
    public function baseInfoSave(Request $request)
    {
        $params = $request->all();
        $effect = $this -> userService -> saveUserBase($params);
        return redirect()->route($params['action'],['uid'=>$params['uid']]);
    }

    /**
     * userbase_save
     * @author charlesliu 2018-11-07T13:55:15+0800
     * @param  string $value [description]
     */
    public function prefernceSave(Request $request)
    {
        $params = $request->all();
        $effect = $this -> userService -> savePrefernce($params);
        return redirect()->route('Perference',['uid'=>$params['uid']]);
    }

    























}
