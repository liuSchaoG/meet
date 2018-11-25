<?php

namespace App\Http\Controllers;

use App\Mongo;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{


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
        return view('index/index');
    }

    //朋友推荐页
    public function friendsPush()
    {

        return view('index/list');
    }
}
