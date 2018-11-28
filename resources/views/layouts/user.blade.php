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
    
    <div class="modal fade" id="avatar-modal" aria-hidden="true" aria-labelledby="avatar-modal-label" role="dialog" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <form class="avatar-form" action="{{url('admin/upload-logo')}}" enctype="multipart/form-data" method="post">
                    <div class="modal-header">
                        <button class="close" data-dismiss="modal" type="button">&times;</button>
                        <h4 class="modal-title" id="avatar-modal-label">Change Logo Picture</h4>
                    </div>
                    <div class="modal-body">
                        <div class="avatar-body">
                            <div class="avatar-upload">
                                <input class="avatar-src" name="avatar_src" type="hidden">
                                <input class="avatar-data" name="avatar_data" type="hidden">
                                <label for="avatarInput">图片上传</label>
                                <input class="avatar-input" id="avatarInput" name="avatar_file" type="file"></div>
                            <div class="row">
                                <div class="col-md-9">
                                    <div class="avatar-wrapper"></div>
                                </div>
                                <div class="col-md-3">
                                    <div class="avatar-preview preview-lg"></div>
                                    <div class="avatar-preview preview-md"></div>
                                    <div class="avatar-preview preview-sm"></div>
                                </div>
                            </div>
                            <div class="row avatar-btns">
                                <div class="col-md-9">
                                    <div class="btn-group">
                                        <button class="btn" data-method="rotate" data-option="-90" type="button" title="Rotate -90 degrees"><i class="fa fa-undo"></i> 向左旋转</button>
                                    </div>
                                    <div class="btn-group">
                                        <button class="btn" data-method="rotate" data-option="90" type="button" title="Rotate 90 degrees"><i class="fa fa-repeat"></i> 向右旋转</button>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <button class="btn btn-success btn-block avatar-save" type="submit"><i class="fa fa-save"></i> 保存修改</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="loading" aria-label="Loading" role="img" tabindex="-1"></div>
</div>
<script src="{{ asset('js/jquery-1.11.0.min.js') }}"></script>
@endsection  
