<?php

namespace App\Http\Controllers;

use App\Services\AlbumService;
use Illuminate\Http\Request;
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
        $param = $request -> all();
        // dd($param);
        $info = $this -> albumService -> uploadPic($param);
    }
    























}
