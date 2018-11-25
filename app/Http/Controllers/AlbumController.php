<?php

namespace App\Http\Controllers;

use App\Services\AlbumService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Extensions\ReturnModel;
use App\Models\Picture;

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
        $list = $this -> albumService -> getUserAlbum();
        return view('user.album',['list'=>$list]);
    }

    /**
     * [createAlbum description]
     * @author liuchao 2018-11-25T18:15:33+0800
     * @param  Request $request [description]
     * @return [type]           [description]
     */
    public function createAlbum(Request $request)
    {
        // $returnModel = new ReturnModel();
        // try {
            $param = $request -> all();
            $info = $this -> albumService -> userCreateAlbum($param);
        //     if (!empty($data)) {
        //         $returnModel->setData($data);
        //     }
        // } catch (Exception $e) {
        //     $returnModel->initFail($e->getMessage());
        // }
        // return $returnModel->toArray();
    }

    /**
     * [upload description]
     * @author liuchao 2018-11-25T16:16:16+0800
     * @param  string $value [description]
     * @return [type]        [description]
     */
    public function uploadAlbum(Request $request)
    {
        
        //显示的属性更多
        $fileCharater = $request->file('file');

        $alb_id = $request->alb_id;

        if ($fileCharater->isValid()) { //括号里面的是必须加的哦
            //如果括号里面的不加上的话，下面的方法也无法调用的

            //获取文件的扩展名 
            $ext = $fileCharater->getClientOriginalExtension();

            //获取文件的绝对路径
            $path = $fileCharater->getRealPath();
            $storage_path = md5($alb_id);
            $name = md5(date('Y-m-dhis')).'.'.$ext;
            //定义文件名
            $filename = $storage_path.'/'.$name;
            //存储文件。disk里面的public。总的来说，就是调用disk模块里的public配置
            Storage::disk('upload')->put($filename, file_get_contents($path));
            
            $insert['uid'] = session('id');
            $insert['type'] = 1;
            $insert['alb_id'] = $alb_id;
            $insert['img'] = '/upload/'.$filename;
            $insert['name'] = $name;
            Picture::insert($insert);
        }

        return redirect()->route('pictureList',['alb_id'=>$alb_id]);
    }


    /**
     * [pictures description]
     * @author liuchao 2018-11-25T20:00:36+0800
     * @param  string $value [description]
     * @return [type]        [description]
     */
    public function pictures(Request $request)
    {
        $alb_id = $request->alb_id;
        $list = $this -> albumService -> getPictures($alb_id);
        return view('user.picture',['list'=>$list,'alb_id'=>$alb_id]);
    }














    























}
