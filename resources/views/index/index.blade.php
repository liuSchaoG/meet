@extends('layouts.app')
@section('content')
    <link href="{{ asset('css/index.css') }}?a=126" rel="stylesheet">
    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="5000">
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
    <div class="container">
        <div class="common-box xy-box">
            <h3>
                <span class="cur">每日情缘</span>
            </h3>
            <ul class="cur">
                <li>
                    <div class="sub-li">
                        <div class="sub-li-left">
                            <img src="http://images1.jyimg.com/w4/global/cms/uploadfile/2010/1203/20101203102033242.jpg" width="100">
                        </div>
                        <div class="sub-li-right">
                            <p>
                                <a href="">王明月</a>
                                <span class="salary">5000-8000</span>
                            </p>
                            <p class="user-text">北京<span class="vline"></span>25岁<span class="vline"></span>本科<span class="vline"></span>160cm</p>
                            <p class="inner-talk">内心独白: 想找北京本地人，乐观阳光，本人单身多年认识的人少也不想将就，...</p>
                            <p class="to-chat">
                                <i class="bg"></i>
                                <a href="" class="btn">立即沟通</a>
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <div class="sub-li-left">
                            <img src="http://images.jiayuan.com/w4/global/cms/uploadfile/2012/1226/20121226105826219.jpg" width="100">
                        </div>
                        <div class="sub-li-right">
                            <p>
                                <a href="">王明月</a>
                                <span class="salary">5000-8000</span>
                            </p>
                            <p class="user-text">北京<span class="vline"></span>25岁<span class="vline"></span>本科<span class="vline"></span>160cm</p>
                            <p class="inner-talk">内心独白: 想找北京本地人，乐观阳光，本人单身多年认识的人少也不想将就，...</p>
                            <p class="to-chat">
                                <i class="bg"></i>
                                <a href="" class="btn">立即沟通</a>
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <div class="sub-li-left">
                            <img src="http://images.jiayuan.com/w4/global/cms/uploadfile/2012/0904/20120904041140469.jpg" width="100">
                        </div>
                        <div class="sub-li-right">
                            <p>
                                <a href="">王明月</a>
                                <span class="salary">5000-8000</span>
                            </p>
                            <p class="user-text">北京<span class="vline"></span>25岁<span class="vline"></span>本科<span class="vline"></span>160cm</p>
                            <p class="inner-talk">内心独白: 想找北京本地人，乐观阳光，本人单身多年认识的人少也不想将就，...</p>
                            <p class="to-chat">
                                <i class="bg"></i>
                                <a href="" class="btn">立即沟通</a>
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <div class="sub-li-left">
                            <img src="http://images3.jyimg.com/w4/global/cms/uploadfile/2010/1215/20101215043620277.jpg" width="100">
                        </div>
                        <div class="sub-li-right">
                            <p>
                                <a href="">王明月</a>
                                <span class="salary">5000-8000</span>
                            </p>
                            <p class="user-text">北京<span class="vline"></span>25岁<span class="vline"></span>本科<span class="vline"></span>160cm</p>
                            <p class="inner-talk">内心独白: 想找北京本地人，乐观阳光，本人单身多年认识的人少也不想将就，...</p>
                            <p class="to-chat">
                                <i class="bg"></i>
                                <a href="" class="btn">立即沟通</a>
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <div class="sub-li-left">
                            <img src="http://images.jiayuan.com/w4/global/cms/uploadfile/2012/0510/20120510093111797.jpg" width="100">
                        </div>
                        <div class="sub-li-right">
                            <p>
                                <a href="">王明月</a>
                                <span class="salary">5000-8000</span>
                            </p>
                            <p class="user-text">北京<span class="vline"></span>25岁<span class="vline"></span>本科<span class="vline"></span>160cm</p>
                            <p class="inner-talk">内心独白: 想找北京本地人，乐观阳光，本人单身多年认识的人少也不想将就，...</p>
                            <p class="to-chat">
                                <i class="bg"></i>
                                <a href="" class="btn">立即沟通</a>
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <div class="sub-li-left">
                            <img src="http://images.jiayuan.com/w4/global/cms/uploadfile/2012/0801/20120801091935795.jpg" width="100">
                        </div>
                        <div class="sub-li-right">
                            <p>
                                <a href="">王明月</a>
                                <span class="salary">5000-8000</span>
                            </p>
                            <p class="user-text">北京<span class="vline"></span>25岁<span class="vline"></span>本科<span class="vline"></span>160cm</p>
                            <p class="inner-talk">内心独白: 想找北京本地人，乐观阳光，本人单身多年认识的人少也不想将就，...</p>
                            <p class="to-chat">
                                <i class="bg"></i>
                                <a href="" class="btn">立即沟通</a>
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <div class="sub-li-left">
                            <img src="http://images.jiayuan.com/w4/global/cms/uploadfile/2012/1226/20121226013459587.jpg" width="100">
                        </div>
                        <div class="sub-li-right">
                            <p>
                                <a href="">王明月</a>
                                <span class="salary">5000-8000</span>
                            </p>
                            <p class="user-text">北京<span class="vline"></span>25岁<span class="vline"></span>本科<span class="vline"></span>160cm</p>
                            <p class="inner-talk">内心独白: 想找北京本地人，乐观阳光，本人单身多年认识的人少也不想将就，...</p>
                            <p class="to-chat">
                                <i class="bg"></i>
                                <a href="" class="btn">立即沟通</a>
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <div class="sub-li-left">
                            <img src="http://images.jiayuan.com/w4/global/cms/uploadfile/2012/0510/20120510093725140.jpg" width="100">
                        </div>
                        <div class="sub-li-right">
                            <p>
                                <a href="">王明月</a>
                                <span class="salary">5000-8000</span>
                            </p>
                            <p class="user-text">北京<span class="vline"></span>25岁<span class="vline"></span>本科<span class="vline"></span>160cm</p>
                            <p class="inner-talk">内心独白: 想找北京本地人，乐观阳光，本人单身多年认识的人少也不想将就，...</p>
                            <p class="to-chat">
                                <i class="bg"></i>
                                <a href="" class="btn">立即沟通</a>
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <div class="sub-li-left">
                            <img src="http://images.jiayuan.com/w4/global/cms/uploadfile/2012/0625/20120625103354148.jpg" width="100">
                        </div>
                        <div class="sub-li-right">
                            <p>
                                <a href="">王明月</a>
                                <span class="salary">5000-8000</span>
                            </p>
                            <p class="user-text">北京<span class="vline"></span>25岁<span class="vline"></span>本科<span class="vline"></span>160cm</p>
                            <p class="inner-talk">内心独白: 想找北京本地人，乐观阳光，本人单身多年认识的人少也不想将就，...</p>
                            <p class="to-chat">
                                <i class="bg"></i>
                                <a href="" class="btn">立即沟通</a>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <script src="{{ asset('js/jquery-1.11.0.min.js') }}"></script>
    <script type="text/javascript">
        window.onload = function (ev) {
            $(".xy-box ul li").hover(function(){
                $(this).find(".to-chat").animate({marginBottom:"55px"},300);
            },function () {
                $(this).find(".to-chat").animate({marginBottom:"-55px"},300);
            });
        }
    </script>

@endsection