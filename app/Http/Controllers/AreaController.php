<?php

namespace App\Http\Controllers;

use App\Services\AreaService;
use Illuminate\Http\Request;
use App\Extensions\ReturnModel;

/**
 * 地区业务处理模块
 */
class AreaController extends Controller
{
    private $areaService;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(AreaService $areaService)
    {
        $this->middleware('checkAuth');
        $this -> areaService = $areaService;
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
            $data = $this -> areaService -> childs($pid);
            if (!empty($data)) {
                $returnModel->setData($data);
            }
        } catch (Exception $e) {
            $returnModel->initFail($e->getMessage());
        }
        return $returnModel->toArray();
    }

    /**
     * get Provences
     * @author charlesliu 2018-11-06T18:12:33+0800
     * @param  string $value [description]
     */
    public function getProvences(Request $request)
    {
        $returnModel = new ReturnModel();
        try {
            $data = $this -> areaService -> provences();
            if (!empty($data)) {
                $returnModel->setData($data);
            }
        } catch (Exception $e) {
            $returnModel->initFail($e->getMessage());
        }
        return $returnModel->toArray();
    }

    /**
     * get citys
     * @author charlesliu 2018-11-07T13:55:15+0800
     * @param  string $value [description]
     */
    public function getCitys(Request $request)
    {
        $pid = $request->pid;
        $returnModel = new ReturnModel();
        try {
            $data = $this -> areaService -> citys($pid);
            if (!empty($data)) {
                $returnModel->setData($data);
            }
        } catch (Exception $e) {
            $returnModel->initFail($e->getMessage());
        }
        return $returnModel->toArray();
    }



    public function getAreas(Request $request)
    {
        $pid = $request->pid;
        $returnModel = new ReturnModel();
        try {
            $data = $this -> areaService -> areas($pid);
            if (!empty($data)) {
                $returnModel->setData($data);
            }
        } catch (Exception $e) {
            $returnModel->initFail($e->getMessage());
        }
        return $returnModel->toArray();
    }






















}
