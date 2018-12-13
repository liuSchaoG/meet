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

        $incomes = [0=>'保密',1=>'3000元以下',2=>'3001~5000元',3=>'5001~8000元',4=>'8001~12000元',5=>'12001~20000元',6=>'20001~50000元',7=>'5000元以上'];

        $educations = [0=>'保密',1=>'小学',2=>'初中',3=>'高中（职高、中专）',4=>'大专（高职）',5=>'本科',6=>'研究生',7=>'博士以上'];

        return view('index.list',['list_p'=>$list_p,'incomes'=>$incomes,'educations'=>$educations]);

    }











}
