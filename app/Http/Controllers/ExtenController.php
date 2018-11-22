<?php

namespace App\Http\Controllers;

use App\Services\ExtenService;
use Illuminate\Http\Request;
use App\Extensions\ReturnModel;

/**
 * 扩展处理模块
 */
class ExtenController extends Controller
{
    private $extenService;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(ExtenService $extenService)
    {
        $this->middleware('checkAuth');
        $this -> extenService = $extenService;
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
            $data = $this -> extenService -> childs($pid);
            if (!empty($data)) {
                $returnModel->setData($data);
            }
        } catch (Exception $e) {
            $returnModel->initFail($e->getMessage());
        }
        return $returnModel->toArray();
    }


    public function positionChilds(Request $request)
    {
        $returnModel = new ReturnModel();
        try {
            $pid = $request->pid;
            $data = $this -> extenService -> positionChilds($pid);
            if (!empty($data)) {
                $returnModel->setData($data);
            }
        } catch (Exception $e) {
            $returnModel->initFail($e->getMessage());
        }
        return $returnModel->toArray();
    }







}
