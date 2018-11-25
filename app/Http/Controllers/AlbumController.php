<?php

namespace App\Http\Controllers;

use App\Services\AlbumService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Extensions\ReturnModel;

/**
 * 相册处理模块
 */
class AlbumController extends Controller
{
    private $albumService;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(AlbumService $albumService)
    {
        $this->middleware('checkAuth');
        $this -> albumService = $albumService;
    }

    /**
     * [Album description]
     * @author liuchao 2018-11-17T22:15:56+0800
     * @param  string $value [description]
     */
    public function index(Request $request)
    {
        $uid = $request -> uid;
        $info = $this -> albumService -> getUserAlbum($uid);
        return view('user.album',$info);
    }

    /**
     * [upload description]
     * @author liuchao 2018-11-25T16:16:16+0800
     * @param  string $value [description]
     * @return [type]        [description]
     */
    public function uploadAlbum(Request $request)
    {
        // $param = $request -> all();
        // // dd($param);
        // $info = $this -> albumService -> uploadPic($param);
        
        //在源生的php代码中是使用$_FILE来查看上传文件的属性
        //但是在laravel里面有更好的封装好的方法，就是下面这个
        //显示的属性更多
        $fileCharater = $request->file('file');

        if ($fileCharater->isValid()) { //括号里面的是必须加的哦
            //如果括号里面的不加上的话，下面的方法也无法调用的

            //获取文件的扩展名 
            $ext = $fileCharater->getClientOriginalExtension();

            //获取文件的绝对路径
            $path = $fileCharater->getRealPath();

            //定义文件名
            $filename = date('Y-m-d-h-i-s').'.'.$ext;
            dump(122222);
            //存储文件。disk里面的public。总的来说，就是调用disk模块里的public配置
            Storage::disk('public')->put($filename, file_get_contents($path));
        }
        dd(11111);
        // return view('upload');
    }
    























}
