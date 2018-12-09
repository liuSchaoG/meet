<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\MatchService;
use App\Extensions\GlobalFunction;
/**
 * 列表用户控制器
 */
class MatchingController extends Controller
{

    private $matchService;
    /**
     * Create a new controller instance.
     * @return void
     */
    public function __construct(MatchService $matchService)
    {
        $this->middleware('checkAuth');
        $this->matchService = $matchService;
    }


    /**
     * 检索列表
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $param = $request->all(); 
        //获取浏览器地理位置  
        $locations = GlobalFunction::getCityByIp();
        if($locations){
            $param['local_country'] = $locations['data']['country'];
            $param['local_province'] = $locations['data']['region'];
            $param['local_city'] = $locations['data']['city'];
        }

        $list_p = $this->matchService -> getDefaultList($param);
        
        return view('index.list',['list_p'=>$list_p,'local_city'=>$locations['data']['city']]);
    }











}
