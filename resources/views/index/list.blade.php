@extends('layouts.app')
@section('content')
    <link href="{{ asset('css/list.css?a=17')}}" rel="stylesheet">
    <div id="filter-box" class="">
        <div class="inner home-inner">
            <!--搜索框-->
            <div class="search-box">
                <div class="search-form ">
                    <form action="/job_detail/" method="get">
                        <div class="search-form-con">
                            <div class="city-sel">
                                <i class="line"></i>
                                <span class="label-text" id ='city-label'><b>北京</b>
                                    <i class="glyphicon glyphicon-chevron-down" id="city-icon"></i>
                                </span>
                            </div>
                            <div class="industry-sel" ka="search_bos_sel_industry">
                                <i class="line"></i>
                                <span class="label-text" id="sex-label"><b>性别</b><i class="glyphicon glyphicon-chevron-down" id="sex-icon"></i></span>
                            </div>
                            <p class="ipt-wrap"><input type="text" name="query" ka="search-keyword" value="" autocomplete="off" class="ipt-search" maxlength="50" placeholder="搜索用户id"></p>
                        </div>
                        <input type="hidden" name="scity" class="city-code" value="101010100">
                        <input type="hidden" name="industry" class="industry-code" value="">
                        <input type="hidden" name="position" class="position-code" value="">
                        <button class="btn-search">搜索</button>
                        <div class="city-box">
                            <ul class="dorpdown-province">
                                <li ka="sel-province-0" class="cur">热门</li>
                                <li ka="sel-province-1" class="">北京</li>
                                <li ka="sel-province-2" class="">上海</li>
                                <li ka="sel-province-3" class="">天津</li>
                                <li ka="sel-province-4" class="">重庆</li>
                                <li ka="sel-province-5" class="">黑龙江</li>
                                <li ka="sel-province-6" class="">吉林</li>
                                <li ka="sel-province-7" class="">辽宁</li>
                                <li ka="sel-province-8" class="">内蒙古</li>
                                <li ka="sel-province-9" class="">河北</li>
                                <li ka="sel-province-10" class="">山西</li>
                                <li ka="sel-province-11" class="">陕西</li>
                                <li ka="sel-province-12" class="">山东</li>
                                <li ka="sel-province-13" class="">新疆</li>
                                <li ka="sel-province-14" class="">青海</li>
                                <li ka="sel-province-15" class="">甘肃</li>
                                <li ka="sel-province-16" class="">宁夏</li>
                                <li ka="sel-province-17" class="">河南</li>
                                <li ka="sel-province-18" class="">江苏</li>
                                <li ka="sel-province-19" class="">湖北</li>
                                <li ka="sel-province-20" class="">浙江</li>
                                <li ka="sel-province-21" class="">安徽</li>
                            </ul>
                        </div>
                        <div class="dorpdown-city">
                            <ul class="sel-province-0 show"><li ka="hot-city-100010000" data-val="100010000" class="cur">全国</li><li ka="hot-city-101010100" data-val="101010100" class="cur">北京</li><li ka="hot-city-101020100" data-val="101020100" class="cur">上海</li><li ka="hot-city-101280100" data-val="101280100" class="cur">广州</li><li ka="hot-city-101280600" data-val="101280600" class="cur">深圳</li><li ka="hot-city-101210100" data-val="101210100" class="cur">杭州</li><li ka="hot-city-101030100" data-val="101030100" class="cur">天津</li><li ka="hot-city-101110100" data-val="101110100" class="cur">西安</li><li ka="hot-city-101190400" data-val="101190400" class="cur">苏州</li><li ka="hot-city-101200100" data-val="101200100" class="cur">武汉</li><li ka="hot-city-101230200" data-val="101230200" class="cur">厦门</li><li ka="hot-city-101250100" data-val="101250100" class="cur">长沙</li><li ka="hot-city-101270100" data-val="101270100" class="cur">成都</li><li ka="hot-city-101180100" data-val="101180100" class="cur">郑州</li><li ka="hot-city-101040100" data-val="101040100" class="cur">重庆</li></ul>
                            <ul class="sel-province-1"><li ka="hot-city-101010100" data-val="101010100" class="cur">北京</li></ul>
                        </div>
                        <div class="position-box">
                            <ul class="dorpdown-sex">
                                <li data-val="" class="cur"><a href="javascript:;">不限</a></li>
                                <li data-val="100001" ka="sel-industry-1">男</li>
                                <li data-val="100001" ka="sel-industry-1">女</li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
            <!--搜索框结束-->
            <!--地区-->
            <div class="condition-box">
                <dl class="condition-city show-condition-district">
                    <dd class="city-wrapper">
                        <a href="javascript:;" class="disabled">北京</a>

                        <em class="icon-arrow-right"></em>
                        <a href="javascript:;" class="link-district selected">
                            不限</a>
                        <em class="icon-arrow-right"></em>


                        <span class="hot-text">热门城市：</span>

                        <a href="/c100010000/" ka="sel-city-100010000">全国</a>

                        <a href="/c101010100/" ka="sel-city-101010100">北京</a>

                        <a href="/c101020100/" ka="sel-city-101020100">上海</a>

                        <a href="/c101280100/" ka="sel-city-101280100">广州</a>

                        <a href="/c101280600/" ka="sel-city-101280600">深圳</a>

                        <a href="/c101210100/" ka="sel-city-101210100">杭州</a>

                        <a href="/c101030100/" ka="sel-city-101030100">天津</a>

                        <a href="/c101110100/" ka="sel-city-101110100">西安</a>

                        <a href="/c101190400/" ka="sel-city-101190400">苏州</a>

                        <a href="/c101200100/" ka="sel-city-101200100">武汉</a>

                        <a href="/c101230200/" ka="sel-city-101230200">厦门</a>

                        <a href="/c101250100/" ka="sel-city-101250100">长沙</a>

                        <a href="/c101270100/" ka="sel-city-101270100">成都</a>

                        <a href="/c101180100/" ka="sel-city-101180100">郑州</a>

                        <a href="/c101040100/" ka="sel-city-101040100">重庆</a>

                        <a href="javascript:;" class="btn-allcity">全部城市</a>
                    </dd>
                </dl>
                <dl class="condition-district  show-condition-district ">
                    <dd>
                        <a class="selected" href="/c101010100/" ka="sel-business-0">不限</a>


                        <a href="/c101010100/b_%E6%9C%9D%E9%98%B3%E5%8C%BA/" ka="sel-business-1">朝阳区</a>

                        <a href="/c101010100/b_%E6%B5%B7%E6%B7%80%E5%8C%BA/" ka="sel-business-2">海淀区</a>

                        <a href="/c101010100/b_%E4%B8%B0%E5%8F%B0%E5%8C%BA/" ka="sel-business-3">丰台区</a>

                        <a href="/c101010100/b_%E5%A4%A7%E5%85%B4%E5%8C%BA/" ka="sel-business-4">大兴区</a>

                        <a href="/c101010100/b_%E4%B8%9C%E5%9F%8E%E5%8C%BA/" ka="sel-business-5">东城区</a>

                        <a href="/c101010100/b_%E6%98%8C%E5%B9%B3%E5%8C%BA/" ka="sel-business-6">昌平区</a>

                        <a href="/c101010100/b_%E8%A5%BF%E5%9F%8E%E5%8C%BA/" ka="sel-business-7">西城区</a>

                        <a href="/c101010100/b_%E9%80%9A%E5%B7%9E%E5%8C%BA/" ka="sel-business-8">通州区</a>

                        <a href="/c101010100/b_%E9%A1%BA%E4%B9%89%E5%8C%BA/" ka="sel-business-9">顺义区</a>

                        <a href="/c101010100/b_%E7%9F%B3%E6%99%AF%E5%B1%B1%E5%8C%BA/" ka="sel-business-10">石景山区</a>

                        <a href="/c101010100/b_%E6%88%BF%E5%B1%B1%E5%8C%BA/" ka="sel-business-11">房山区</a>

                        <a href="/c101010100/b_%E9%97%A8%E5%A4%B4%E6%B2%9F%E5%8C%BA/" ka="sel-business-12">门头沟区</a>

                        <a href="/c101010100/b_%E5%AF%86%E4%BA%91%E5%8C%BA/" ka="sel-business-13">密云区</a>

                        <a href="/c101010100/b_%E6%80%80%E6%9F%94%E5%8C%BA/" ka="sel-business-14">怀柔区</a>

                        <a href="/c101010100/b_%E5%B9%B3%E8%B0%B7%E5%8C%BA/" ka="sel-business-15">平谷区</a>

                        <a href="/c101010100/b_%E5%BB%B6%E5%BA%86%E5%8C%BA/" ka="sel-business-16">延庆区</a>

                    </dd>
                </dl>
            </div>
            <!--地区结束-->
            <!--其他筛选条件-->
            <div class="filter-select-box">
                <div class="dropdown-wrap cur">
                    <span class="dropdown-select">
                            <input type="text" ka="sel-exp" value="工作经验" class="ipt" readonly="">
                        <i class="icon-select-arrow"></i>
                        <div class="dropdown-menu">
                            <ul>
                                <li><a href="/c101010100/" ka="sel-exp-0" data-urlv2="/c101010100/">不限</a></li>
                                <li><a href="/c101010100/e_102/" ka="sel-exp-102" data-urlv2="/c101010100/e_102/">应届生</a></li>
                                <li><a href="/c101010100/e_103/" ka="sel-exp-103" data-urlv2="/c101010100/e_103/">1年以内</a></li>
                                <li><a href="/c101010100/e_104/" ka="sel-exp-104" data-urlv2="/c101010100/e_104/">1-3年</a></li>
                                <li><a href="/c101010100/e_105/" ka="sel-exp-105" data-urlv2="/c101010100/e_105/">3-5年</a></li>
                                <li><a href="/c101010100/e_106/" ka="sel-exp-106" data-urlv2="/c101010100/e_106/">5-10年</a></li>
                                <li><a href="/c101010100/e_107/" ka="sel-exp-107" data-urlv2="/c101010100/e_107/">10年以上</a></li>
                            </ul>
                        </div>
                    </span>
                </div>
                <div class="dropdown-wrap">
                    <span class="dropdown-select">
                            <input type="text" value="学历要求" ka="sel-degree" class="ipt" readonly="">
                        <i class="icon-select-arrow"></i>
                        <div class="dropdown-menu">
                            <ul>
                                <li><a href="/c101010100/" ka="sel-degree-0">不限</a></li>
                                <li><a href="/c101010100/d_209/" ka="sel-degree-209">初中及以下</a></li>
                                <li><a href="/c101010100/d_208/" ka="sel-degree-208">中专/中技</a></li>
                                <li><a href="/c101010100/d_206/" ka="sel-degree-206">高中</a></li>
                                <li><a href="/c101010100/d_202/" ka="sel-degree-202">大专</a></li>
                                <li><a href="/c101010100/d_203/" ka="sel-degree-203">本科</a></li>
                                <li><a href="/c101010100/d_204/" ka="sel-degree-204">硕士</a></li>
                                <li><a href="/c101010100/d_205/" ka="sel-degree-205">博士</a></li>
                            </ul>
                        </div>
                    </span>
                </div>
                <div class="dropdown-wrap">
                    <span class="dropdown-select">
                            <input type="text" ka="sel-salary" value="薪资要求" class="ipt" readonly="">
                        <i class="icon-select-arrow"></i>
                        <div class="dropdown-menu">
                            <ul>
                                <li><a href="/c101010100/" ka="sel-salary-0">不限</a></li>
                                <li><a href="/c101010100/y_1/" ka="sel-salary-1">3k以下</a></li>
                                <li><a href="/c101010100/y_2/" ka="sel-salary-2">3-5k</a></li>
                                <li><a href="/c101010100/y_3/" ka="sel-salary-3">5-10k</a></li>
                                <li><a href="/c101010100/y_4/" ka="sel-salary-4">10-15k</a></li>
                                <li><a href="/c101010100/y_5/" ka="sel-salary-5">15-20k</a></li>
                                <li><a href="/c101010100/y_6/" ka="sel-salary-6">20-30k</a></li>
                                <li><a href="/c101010100/y_7/" ka="sel-salary-7">30-50k</a></li>
                                <li><a href="/c101010100/y_8/" ka="sel-salary-8">50k以上</a></li>
                            </ul>
                        </div>
                    </span>
                </div>
                <div class="dropdown-wrap">
                    <span class="dropdown-select">
                            <input type="text" ka="sel-stage" value="融资阶段" class="ipt" readonly="">
                        <i class="icon-select-arrow"></i>
                        <div class="dropdown-menu">
                            <ul>
                                <li><a href="/c101010100/" ka="sel-stage-0">不限</a></li>
                                <li><a href="/c101010100/t_801/" ka="sel-stage-801">未融资</a></li>
                                <li><a href="/c101010100/t_802/" ka="sel-stage-802">天使轮</a></li>
                                <li><a href="/c101010100/t_803/" ka="sel-stage-803">A轮</a></li>
                                <li><a href="/c101010100/t_804/" ka="sel-stage-804">B轮</a></li>
                                <li><a href="/c101010100/t_805/" ka="sel-stage-805">C轮</a></li>
                                <li><a href="/c101010100/t_806/" ka="sel-stage-806">D轮及以上</a></li>
                                <li><a href="/c101010100/t_807/" ka="sel-stage-807">已上市</a></li>
                                <li><a href="/c101010100/t_808/" ka="sel-stage-808">不需要融资</a></li>
                            </ul>
                        </div>
                    </span>
                </div>
                <div class="dropdown-wrap">
                    <span class="dropdown-select">
                            <input type="text" ka="sel-scale" value="公司规模" class="ipt" readonly="">
                        <i class="icon-select-arrow"></i>
                        <div class="dropdown-menu">
                            <ul>
                                <li><a href="/c101010100/" ka="sel-scale-0">不限</a></li>
                                <li><a href="/c101010100/s_301/" ka="sel-scale-301">0-20人</a></li>
                                <li><a href="/c101010100/s_302/" ka="sel-scale-302">20-99人</a></li>
                                <li><a href="/c101010100/s_303/" ka="sel-scale-303">100-499人</a></li>
                                <li><a href="/c101010100/s_304/" ka="sel-scale-304">500-999人</a></li>
                                <li><a href="/c101010100/s_305/" ka="sel-scale-305">1000-9999人</a></li>
                                <li><a href="/c101010100/s_306/" ka="sel-scale-306">10000人以上</a></li>
                            </ul>
                        </div>
                    </span>
                </div>
                <div class="dropdown-wrap">
                    <span class="dropdown-select">
                            <input type="text" ka="sel-scale" value="发布时间" class="ipt" readonly="">
                        <i class="icon-select-arrow"></i>
                        <div class="dropdown-menu">
                            <ul>
                                <li><a href="/c101010100/" ka="sel-scale-0">不限</a></li>
                                <li><a href="/c101010100/?period=1" ka="sel-scale-1">一天以内</a></li>
                                <li><a href="/c101010100/?period=2" ka="sel-scale-2">三天以内</a></li>
                                <li><a href="/c101010100/?period=3" ka="sel-scale-3">七天以内</a></li>
                                <li><a href="/c101010100/?period=4" ka="sel-scale-4">十五天以内</a></li>
                                <li><a href="/c101010100/?period=5" ka="sel-scale-5">一个月以内</a></li>
                            </ul>
                        </div>
                    </span>
                </div>
                <a href="/c101010100/" ka="empty-filter" class="empty-filter">清空筛选条件</a>
            </div>
        </div>
    </div>
    <!--推荐列表-->
    <div id="main" class="inner home-inner">
        <div class="user-box">
            <!--右边-->
            <div class="sider">
                <div class="sider-list" style="">
                    <h3>看过的会员</h3>
                    <ul>
                        <li>
                            <a href="/job_detail/4e7af467c2416dd11n1_3Nq9E1o~.html" ka="viewed_list_1">
                                <h4>后端开发工程师 <span class="salary">17K-25K</span></h4>
                                <p>巴别时代</p>
                            </a>
                        </li>
                        <li>
                            <a href="/job_detail/4e7af467c2416dd11n1_3Nq9E1o~.html" ka="viewed_list_1">
                                <h4>后端开发工程师 <span class="salary">17K-25K</span></h4>
                                <p>巴别时代</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="promotion-img">
                    <a href="/app.html" target="_blank" ka="ad_banner_1">
                        <img src="https://static.zhipin.com/zhipin/v106/web/geek/images/pro-1.png" alt="">
                    </a>
                </div>
            </div>
            <!--左边朋友-->
            <div class="user-list">
                <ul>
                    @foreach ($list_p as $info)
                        <li>
                            <div class="job-primary">
                                <div class="info-primary">
                                    <h3 class="name">
                                        <a href="{{$info->uid}}" data-itemid="1" data-lid="1cuR2yKgA43.search" data-jobid="29925123" data-index="1" ka="search_list_1" target="_blank">
                                            <span>{{$info->username}}</span>&nbsp;<em class="red"></em>
                                            <span>工作：{{$info->job_name or '保密'}}</span>
                                        </a>
                                    </h3>
                                    <p>{{$info->area_name or '暂时保密'}}<em class="vline"></em>月薪：{{$incomes[$info->income]}}<em class="vline"></em>{{$educations[$info->education]}}</p>
                                </div>
                                <div class="info-company">
                                    <div class="company-text"></p>
                                    </div>
                                </div>
                                <div class="info-publis">
                                    <h3 class="name"><img src="/{{$info->head_image}}">{{$info->user_name}}<em class="vline"></em>{{$info->username}}</h3>
                                    <p>创建于{{$info->created_at}}</p>
                                </div>
                                <a href="/chatRoom?id={{$info->uid}}" target="_blank" class="btn btn-startchat">立刻开撩</a>
                            </div>
                        </li>
                    @endforeach
                </ul>
                <div class="page">
                    {{ $list_p->links() }}
                </div>
            </div>
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
                        <a href="" ka="link-search">搜索好友</a>
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
            $('.filter-select-box .dropdown-wrap').hover(function () {
                $(this).find('.dropdown-menu').attr('style','display:block;')
            },function () {
                $(this).find('.dropdown-menu').attr('style','display:none;')
            })
            $('.user-list li').hover(function () {
                $(this).find('.btn-startchat').attr('style','display:block;')
            },function () {
                $(this).find('.btn-startchat').attr('style','display:none;')
            })
            $('.dorpdown-province').find('li').hover(function () {
                $('.dorpdown-province li').removeClass('cur');
                $(this).addClass('cur');
                var cl = $(this).attr('ka');
                $('.dorpdown-city ul').removeClass('show')
                $('.' +cl).addClass('show');
            })
            $('.dorpdown-city ul').find('li').hover(function () {
                $('.dorpdown-city ul li').removeClass('cur');
                $(this).addClass('cur');
            });
            $('.dorpdown-sex').find('li').hover(function () {
                $('.dorpdown-sex li').removeClass('cur');
                $(this).addClass('cur');
            });

            $('#city-label').click(function () {
                if($('.city-box').css("display") == 'none'){
                    $('#city-icon').removeClass('glyphicon-chevron-down');
                    $('#city-icon').addClass('glyphicon-chevron-up');
                    $('.city-box').show();
                    $('.dorpdown-city').show();
                }else{
                    $('#city-icon').removeClass('glyphicon-chevron-up');
                    $('#city-icon').addClass('glyphicon-chevron-down');
                    $('.city-box').hide();
                    $('.dorpdown-city').hide();
                }
            })

            $('#sex-label').click(function () {
                if($('.position-box').css("display") == 'none'){
                    $('#sex-icon').removeClass('glyphicon-chevron-down');
                    $('#sex-icon').addClass('glyphicon-chevron-up');
                    $('.position-box').show();
                }else{
                    $('#sex-icon').removeClass('glyphicon-chevron-up');
                    $('#sex-icon').addClass('glyphicon-chevron-down');
                    $('.position-box').hide();
                }
            })
        }
    </script>
@endsection