@extends('layouts.user')
@section('right_block')
<div class="content-area col-md-8">
            <div class="panel panel-default">
                <div class="panel-heading">内心独白</div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{ route('BaseInfoSave') }}">
                        {{ csrf_field() }}
                        <input type="hidden" name="uid" value="{{$uid}}">
                        <div class="form-group{{ $errors->has('inner_idea') ? ' has-error' : '' }}">
                            <label for="inner_idea" class="col-md-4 control-label">内心独白</label>

                            <div class="col-md-3">
                                <input id="inner_idea" type="inner_idea" placeholder="请输入用户名或者手机号" class="form-control" name="inner_idea" value="{{ $inner_idea or '暂未设定'}}" required autofocus>
                                @if ($errors->has('inner_idea'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('inner_idea') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-8 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    保存并继续
                                </button>

                                <a class="btn btn-link " href="#">
                                    跳过
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
</div>
@endsection
