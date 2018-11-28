@extends('layouts.app')
@section('content')
<link href="{{ asset('css/cropper.min.css') }}" rel="stylesheet">
<link href="{{ asset('css/sitelogo.css') }}" rel="stylesheet">
<script src="{{ asset('js/cropper.min.js') }}"></script>
<script src="{{ asset('js/sitelogo.js') }}"></script>
<div class="container">
    <div class="row">
        <div class="content-area col-md-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <div class="media">
                        <div class="media-left">
                            <!-- <a href="">
                                <img alt="胖大爷" src="{{ asset(session('head_image')) }}" class="img-circle" height="72" width="72">
                            </a> -->
                            <div class="ibox-content">
                                <div class="row">
                                    <div id="crop-avatar" class="col-md-3">
                                        <div class="avatar-view" title="Change Logo Picture">
                                            <img src="{{ asset(session('head_image')) }}" alt="Logo">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">胖大爷</h4>
                            <p>搞编程，要有一颗严谨负责的态度</p>
                            <p>
                                等级：
                                <a href="" title="查看等级积分明细">
                                    P3
                                </a>
                                    &nbsp;&nbsp;&nbsp;
                                积分值：
                                <a href="" title="查看我的积分明细">
                                    133
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="list-group">
                        <a href="#systemSetting" class="list-group-item kb-list-date kb-post-list text-center" data-toggle="collapse">
                            个人资料 <span class="glyphicon glyphicon-plus"></span>
                        </a>
                        <ul id="systemSetting" class="nav nav-list collapse secondmenu" style="height: 0px;">
                            <li><a href="{{ route('BaseInfo') }}" class="text-center"><i class="nav nav-list"></i>基本资料</a></li>
                            <li><a href="{{ route('DetailInfo') }}" class="text-center"><i class="nav nav-list"></i>详细资料</a></li>
                            <li><a href="{{ route('WorkLife') }}" class="text-center"><i class="nav nav-list"></i>工作生活</a></li>
                        </ul>
                        <a href="{{ route('InnerTalk') }}" class="list-group-item kb-list-date kb-post-list text-center">
                            内心独白
                        </a>
                        <a href="{{ route('InterHobby') }}" class="list-group-item kb-list-date kb-post-list text-center">
                            兴趣爱好
                        </a>
                        <a href="{{ route('Perference') }}" class="list-group-item kb-list-date kb-post-list text-center">
                            择偶条件
                        </a>
                        <a href="{{ route('Identify') }}" class="list-group-item kb-list-date kb-post-list text-center">
                            我的认证
                        </a>
                        <a href="{{ route('albumIndex') }}" class="list-group-item kb-list-date kb-post-list text-center">
                            我的相册
                        </a>
                        <a href="#systemSetting2" class="list-group-item kb-list-date kb-post-list text-center" data-toggle="collapse">
                            我的设置 <span class="glyphicon glyphicon-plus"></span>
                        </a>
                        <ul id="systemSetting2" class="nav nav-list collapse secondmenu" style="height: 0px;">
                            <li><a href="{{ route('SetRight') }}" class="text-center"><i class="nav nav-list"></i>权限设置</a></li>
                            <li><a href="{{ route('SetPass') }}" class="text-center"><i class="nav nav-list"></i>修改密码</a></li>
                        </ul>
                    </div>
                </div>
                <div class="panel-footer">
                    <a href="">
                        3 条未读消息
                    </a>
                </div>
            </div>
        </div>
        @yield('right_block')
    </div>
    
</div>
@endsection  
