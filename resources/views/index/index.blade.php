@extends('layouts.app')
@section('content')
    <link href="{{ asset('css/index.css') }}?a=132" rel="stylesheet">
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

        <div class="common-box xy-box-advantage">
            <h3>
                <span class="cur"></span>
            </h3>
            <ul class="cur">
                <li>
                    <div class="sub-li">
                        <div class="icon">
                            <img src="http://demo.cssmoban.com/cssthemes5/tope_9_ziggy/img/first-icon.png" alt="">
                        </div>
                        <h4>情感修复</h4>
                        <p>
                            也许旁人的一句话一份善意的提醒，能让你们更加懂得对方，珍惜彼此。
                        </p>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <div class="icon">
                            <img src="http://demo.cssmoban.com/cssthemes5/tope_9_ziggy/img/second-icon.png" alt="">
                        </div>
                        <h4>全民红娘|月老</h4>
                        <p>我们提供月老红娘注册功能，全民参与，帮助身边的人找到，找到另一半，找到幸福。</p>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <div class="icon">
                            <img src="http://demo.cssmoban.com/cssthemes5/tope_9_ziggy/img/third-icon.png" alt="">
                        </div>
                        <h4>实时畅聊</h4>
                        <p>点击立即沟通轻松畅聊，在小圆网遇见生命中的他和她！</p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="common-box xy-box-jiyu">
            <h3>
                <span class="cur">小圆寄语</span>
            </h3>
            <img src=" https://12452007.s61i.faiusr.com/2/AD0Ip4H4BRACGAAg8v_WwwUo-qHu_QMwwAc40QE.jpg">
            <div class="title">您的满意是对我们最大的肯定</div>
            <div class="text">
                我们将不断的优化升级服务，通过努力希望为单身者提供一个优质，高效，安全的相亲平台。
                也欢迎您提出宝贵的意见，我们将以工匠精神扎实坚定的为您竭诚服务。
            </div>
        </div>


        <div class="common-box xy-box-success">
            <h3>
                <span class="cur">遇见幸福</span>
            </h3>
            <ul class="cur">
                <li>
                    <div class="sub-li">
                        <img src="http://images1.jyimg.com/w4/story/i/love/2ced234806_160x160.jpg">
                        <div class="to-xiaoyuan">
                            <i class="bg"></i>
                            <span class="text">
                                <p>王明月|李超</p>
                                <p>2018.09.20</p>
                                <p>希望小圆网越办越好！</p>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <img src="http://images1.jyimg.com/w4/story/i/love/0d29ea8425_160x160.jpg">
                        <div class="to-xiaoyuan">
                            <i class="bg"></i>
                            <span class="text">
                                <p>王明月|李超</p>
                                <p>2018.09.20</p>
                                <p>在小圆网相识相知，加油小圆网！</p>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <img src="http://images1.jyimg.com/w4/story/i/love/9ba6447860_160x160.jpg">
                        <div class="to-xiaoyuan">
                            <i class="bg"></i>
                            <span class="text">
                                <p>王明月|李超</p>
                                <p>2018.09.20</p>
                                <p>在小圆网相识相知，加油小圆网！</p>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <img src="http://images1.jyimg.com/w4/story/i/love/113ab32904_160x160.jpg">
                        <div class="to-xiaoyuan">
                            <i class="bg"></i>
                            <span class="text">
                                <p>王明月|李超</p>
                                <p>2018.09.20</p>
                                <p>在小圆网相识相知，加油小圆网！</p>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <img src="http://images1.jyimg.com/w4/story/i/love/story_1472434250_160x160.jpg">
                        <div class="to-xiaoyuan">
                            <i class="bg"></i>
                            <span class="text">
                                <p>王明月|李超</p>
                                <p>2018.09.20</p>
                                <p>在小圆网相识相知，加油小圆网！</p>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <img src="http://images1.jyimg.com/w4/story/i/love/story_1448963029_160x160.jpg">
                        <div class="to-xiaoyuan">
                            <i class="bg"></i>
                            <span class="text">
                                <p>王明月|李超</p>
                                <p>2018.09.20</p>
                                <p>在小圆网相识相知，加油小圆网！</p>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <img src="http://images1.jyimg.com/w4/story/i/love/2ced234806_160x160.jpg">
                        <div class="to-xiaoyuan">
                            <i class="bg"></i>
                            <span class="text">
                                <p>王明月|李超</p>
                                <p>2018.09.20</p>
                                <p>在小圆网相识相知，加油小圆网！</p>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <img src="http://images1.jyimg.com/w4/story/i/love/0d29ea8425_160x160.jpg">
                        <div class="to-xiaoyuan">
                            <i class="bg"></i>
                            <span class="text">
                                <p>王明月|李超</p>
                                <p>2018.09.20</p>
                                <p>在小圆网相识相知，加油小圆网！</p>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <img src="http://images1.jyimg.com/w4/story/i/love/9ba6447860_160x160.jpg">
                        <div class="to-xiaoyuan">
                            <i class="bg"></i>
                            <span class="text">
                                <p>王明月|李超</p>
                                <p>2018.09.20</p>
                                <p>在小圆网相识相知，加油小圆网！</p>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <img src="http://images1.jyimg.com/w4/story/i/love/113ab32904_160x160.jpg">
                        <div class="to-xiaoyuan">
                            <i class="bg"></i>
                            <span class="text">
                                <p>王明月|李超</p>
                                <p>2018.09.20</p>
                                <p>在小圆网相识相知，加油小圆网！</p>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <img src="http://images1.jyimg.com/w4/story/i/love/story_1472434250_160x160.jpg">
                        <div class="to-xiaoyuan">
                            <i class="bg"></i>
                            <span class="text">
                                <p>王明月|李超</p>
                                <p>2018.09.20</p>
                                <p>在小圆网相识相知，加油小圆网！</p>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="sub-li">
                        <img src="http://images1.jyimg.com/w4/story/i/love/story_1448963029_160x160.jpg">
                        <div class="to-xiaoyuan">
                            <i class="bg"></i>
                            <span class="text">
                                <p>王明月|李超</p>
                                <p>2018.09.20</p>
                                <p>在小圆网相识相知，加油小圆网！</p>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <div id="footer">
        <div class="inner home-inner">
            <div class="footer-social">
                <img src="" alt="">
                <p>企业服务热线和举报投诉 <span>400 065 57123</span></p>
                <p>工作日 <span>9:30 - 18:30</span></p>
            </div>
            <div class="footer-about clear-fix">
                <dl>
                    <dt>企业服务</dt>
                    <dd>
                        <a href="/job_detail/" ka="link-search">搜索好友</a>
                        <a href="" ka="link-news">新闻资讯</a>
                        <a href="" ka="link-app">小圆网APP</a>
                    </dd>
                </dl>
                <dl>
                    <dt>使用与帮助</dt>
                    <dd>
                        <a href="/register/protocol/introduce" ka="link-privacy" target="_blank">用户协议与隐私政策</a>
                        <a href="/activity/cc/anticheatguide.html" ka="link-anticheatguide" target="_blank">防骗指南</a>
                        <a href="/activity/cc/postrules.html" ka="link-postrules" target="_blank">职位发布规则</a>
                        <a href="/activity/cc/usehelp.html" ka="link-usehelp" target="_blank">使用帮助</a>
                    </dd>
                </dl>
                <dl>
                    <dt>联系小圆网</dt>
                    <dd>
                        <p>北京小圆网络技术有限公司</p>
                        <p>公司地址 北京市朝阳区</p>
                        <p>联系电话 010-84150131</p>
                        <p>违法和不良信息举报邮箱 <a class="report-mail" href="mailto:jubao@kanzhun.com">1209398177@qq.com</a></p>
                    </dd>
                </dl>
            </div>
            <div style="clear: both;"></div>
            <div class="copyright">
                <p>
                    <span>Copyright © 2018 小圆网</span><span>京ICP备1401344321号-6</span>
                    <span>
                     <a href="/activity/cc/businesslicense.html" ka="link-businesslicense" target="_blank">
                         <img src="https://static.zhipin.com/zhipin/v106/web/geek/images/icon-badge-1.png" alt="">
                         电子营业执照
                     </a>
                 </span>
                    <span><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502032801" ka="link-beian" target="_blank">京公网安备11010</a></span>
                    <span><a href="http://sdwj.zhipin.com/web/index.html" ka="link-sdwj" target="_blank">首都网警</a></span>
                </p>
            </div>
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

            $(".xy-box-success .sub-li").hover(function(){
                $(this).find(".to-xiaoyuan").animate({top:"0px"},300);
            },function () {
                $(this).find(".to-xiaoyuan").animate({top:"-170px"},300);
            });
        }
    </script>

@endsection