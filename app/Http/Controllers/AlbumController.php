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
     * get Provences
     * @author charlesliu 2018-11-06T18:12:33+0800
     * @param  string $value [description]
     */
    public function getChilds(Request $request)
    {
        $returnModel = new ReturnModel();
        try {
            $pid = $request->pid;
            $data = $this -> albumService -> childs($pid);
            if (!empty($data)) {
                $returnModel->setData($data);
            }
        } catch (Exception $e) {
            $returnModel->initFail($e->getMessage());
        }
        return $returnModel->toArray();
    }



}
