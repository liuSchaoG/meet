@extends('layouts.user')
@section('right_block')
<div class="content-area col-md-8">
            <div class="panel panel-default">
                <div class="panel-heading">资格认证中心</div>

                <div class="panel-body">
                    <h1>资格认证中心</h1>
                    <!-- <form class="form-horizontal" method="POST" action="{{ route('BaseInfoSave') }}">
                        {{ csrf_field() }}
                        <input type="hidden" name="uid" value="{{$uid}}">
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

                        <div class="form-group">
                            <div class="col-md-8 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    保存并继续
                                </button>
                            </div>
                        </div>
                    </form> -->
                </div>
            </div>
</div>
@endsection
