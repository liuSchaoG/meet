<?php

namespace App\Http\Controllers;


class IndexController extends Controller
{


    //首页
    public function index()
    {
        //test
        return view('index/index');
    }
}
