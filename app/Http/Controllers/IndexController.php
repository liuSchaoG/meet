<?php

namespace App\Http\Controllers;


use App\Mongo;
use Illuminate\Support\Facades\DB;
use Illuminate\Session\Store;
use App\Services\MatchService;

class IndexController extends Controller
{

    private $matchService;
    /**
     * Create a new controller instance.
     * @return void
     */
    public function __construct(MatchService $matchService)
    {
        $this -> matchService = $matchService;
    }


    //首页
    public function index()
    {
        //$connection = Mongo::connectMongo('chatFriendsList')->where('updated_at',1542877289);

        //$res = $connection->select('receive_id','updated_at')->where('uid',1)
        //    ->get()->toArray();
        //$resa = $connection1->select('fd')->where('uid',3)->get()->toArray();
        //$connection2 = Mongo::connectMongo('wesocketConnect');
        //$connection = Mongo::connectMongo('chatFriendsList');
        //$resb = $connection2->select('fd')->where('uid',1)->get()->toArray();
        //$res= $connection->get()->toArray();
        //$res= $connection2->delete();
        //var_dump($res);exit;
        //$a= Mongo::connectMongo('chatFriendsList')->select('unread_num')->where('uid',3)->where('receive_id',1)->get()->toArray();
        //var_dump($a);
        $every = $this -> matchService -> getEveryList();
        $incomes    = config('userdata.user_incomes');
        $educations = config('userdata.user_educations');
        $jobs       = config('userdata.user_jobs');
        $citys      = config('userdata.user_citys');

        dd($every);
        return view('index.index',['every_list'=>$every,'incomes'=>$incomes,'educations'=>$educations,'jobs'=>$jobs,'citys'=>$citys]);

    }

    //朋友推荐页
    public function friendsPush()
    {

        return view('index/list');
    }
}




