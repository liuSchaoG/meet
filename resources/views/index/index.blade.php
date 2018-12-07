@extends('layouts.app')
@section('content')
    <link href="{{ asset('css/index.css') }}?a=2" rel="stylesheet">
    <div id="myCarousel" class="carousel slide">
        <!-- 轮播（Carousel）指标 -->
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <!-- 轮播（Carousel）项目 -->
        <div class="carousel-inner">
            <div class="item active">
                <img src="http://images1.jyimg.com/w4/index_new/i/big_bg4.jpg" alt="First slide">
            </div>
            <div class="item">
                <img src="http://images1.jyimg.com/w4/index_new/i/big_bg4.jpg" alt="Second slide">
            </div>
            <div class="item">
                <img src="http://images1.jyimg.com/w4/index_new/i/big_bg4.jpg" alt="Third slide">
            </div>
        </div>
        <!-- 轮播（Carousel）导航 -->
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

@endsection