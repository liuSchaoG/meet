<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use Illuminate\Http\Request;
//每个控制器建立一个文件夹  每个方法根据需要加一个表单验证
use App\Http\Requests\User\UserBaseRequest;
use App\Extensions\CropAvatar;

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
        $info = $this -> userService -> getUserBase();
        return view('user.baseInfo',$info);
    }

    /**
     * [DetailInfo description]
     * @author liuchao 2018-11-17T22:13:08+0800
     * @param  string $value [description]
     */
    public function detailInfo(Request $request)
    {
        $info = $this -> userService -> getUserDetail();
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
        $info = $this -> userService -> getUserWLife();
        return view('user.workLife',$info);
    }

    /**
     * [InnerTalk description]
     * @author liuchao 2018-11-17T22:15:26+0800
     * @param  string $value [description]
     */
    public function innerTalk(Request $request)
    {
        $info = $this -> userService -> getUserItalk();
        return view('user.innerTalk',$info);
    }

    /**
     * [InterHobby description]
     * @author liuchao 2018-11-17T22:15:31+0800
     * @param  string $value [description]
     */
    public function interHobby(Request $request)
    {
        $info = $this -> userService -> getUserIhobby();
        return view('user.interHobby',$info);
    }

    /**
     * [Perference description]
     * @author liuchao 2018-11-17T22:15:41+0800
     * @param  string $value [description]
     */
    public function perference(Request $request)
    {
        $info = $this -> userService -> getUserPerference();
        return view('user.perference',$info);
    }

    /**
     * [Identify description]
     * @author liuchao 2018-11-17T22:15:51+0800
     * @param  string $value [description]
     */
    public function identify(Request $request)
    {
        $info = $this -> userService -> getUserIdentify();
        return view('user.identify',$info);
    }

    /**
     * [SetRight description]
     * @author liuchao 2018-11-17T22:16:02+0800
     * @param  string $value [description]
     */
    public function setRight(Request $request)
    {
        $info = $this -> userService -> getUserSetright();
        return view('user.setRight',$info);
    }

    /**
     * [SetPass description]
     * @author liuchao 2018-11-17T22:16:07+0800
     * @param  string $value [description]
     */
    public function setPass(Request $request)
    {
        $info = $this -> userService -> getUserSetpass();
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
        return redirect()->route($params['action']);
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
        return redirect()->route('Perference');
    }



    public function headerImg(Request $request)
    {
        $params = $request->all();

        // $crop = new CropAvatar($_POST['avatar_src'], $_POST['avatar_data'], $_FILES['avatar_file']);
        // $response = array(
        //    'state'  => 200,
        //    'message' => $crop -> getMsg(),
        //    'result' => $crop -> getResult()
        // );

        // echo json_encode($response);
        $crop = new CropAvatar(
          isset($_POST['avatar_src']) ? $_POST['avatar_src'] : null,
          isset($_POST['avatar_data']) ? $_POST['avatar_data'] : null,
          isset($_FILES['avatar_file']) ? $_FILES['avatar_file'] : null
        );

        $response = array(
          'state'  => 200,
          'message' => $crop -> getMsg(),
          'result' => $crop -> getResult()
        );

        echo json_encode($response);
    }






    























}
