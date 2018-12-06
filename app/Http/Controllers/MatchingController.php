<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\MatchService;
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
        
        $list = $this->matchService -> getDefaultList($param);
        
        return view('home');
    }











}
