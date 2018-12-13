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

        $list_p = $this->matchService -> getDefaultList($param);

        $incomes    = config('userdata.user_incomes');
        $educations = config('userdata.user_educations');
        
        return view('index.list',['list_p'=>$list_p,'incomes'=>$incomes,'educations'=>$educations]);

    }











}
