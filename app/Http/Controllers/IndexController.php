<?php

namespace App\Http\Controllers;


class IndexController extends Controller
{


    //首页
    public function index()
    {
        return view('index/index');
    }

    //朋友推荐页
    public function friendsPush()
    {

        return view('index/list');
    }
}
