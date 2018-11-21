@extends('layouts.user')
@section('right_block')
@uploader('assets')
<div class="content-area col-md-8">
            <div class="panel panel-default">
                <div class="panel-heading">用户基本信息</div>

                <div class="panel-body">
                    @uploader('images',['name' => 'images','strategy' => 'default'])
                    <form class="form-horizontal" method="POST" action="{{ route('BaseInfoSave') }}">
                        {{ csrf_field() }}
                        <div class="form-group{{ $errors->has('user_name') ? ' has-error' : '' }}">
                            <label for="user_name" class="col-md-4 control-label">真实姓名</label>

                            <div class="col-md-3">
                                <input id="user_name" type="user_name" placeholder="请输入用户名或者手机号" class="form-control" name="user_name" value="{{ $user_name or '暂未设定'}}" required autofocus>
                                @if ($errors->has('user_name'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('user_name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                    </form>
                </div>
            </div>
</div>
@endsection
<script src="{{ asset('js/jquery-1.11.0.min.js') }}"></script>