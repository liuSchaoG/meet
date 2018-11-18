@extends('layouts.user')
@section('right_block')
<div class="content-area col-md-8">
            <div class="panel panel-default">
                <div class="panel-heading">兴趣爱好</div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{ route('BaseInfoSave') }}">
                        {{ csrf_field() }}
                        <input type="hidden" name="uid" value="{{$uid}}">
                        <div class="form-group{{ $errors->has('foods') ? ' has-error' : '' }}">
                            <label for="foods" class="col-md-4 control-label">最喜欢的一道菜</label>

                            <div class="col-md-3">
                                <input id="foods" type="foods" placeholder="请输入用户名或者手机号" class="form-control" name="foods" value="{{ $foods or '暂未设定'}}" required autofocus>
                                @if ($errors->has('foods'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('foods') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('idol') ? ' has-error' : '' }}">
                            <label for="idol" class="col-md-4 control-label">喜欢的名人</label>

                            <div class="col-md-3">
                                <input id="idol" type="idol" class="form-control" name="idol" required  disabled value="{{ $idol}}">

                                @if ($errors->has('idol'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('idol') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('song') ? ' has-error' : '' }}">
                            <label for="song" class="col-md-4 control-label">喜欢的歌曲</label>

                            <div class="col-md-3">
                                <input id="song" type="song" class="form-control" name="song" required value="{{ $song or 0}}">

                                @if ($errors->has('song'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('song') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('book') ? ' has-error' : '' }}">
                            <label for="book" class="col-md-4 control-label">喜欢的书</label>

                            <div class="col-md-3">
                                <input id="book" type="book" class="form-control" name="book" required value="{{ $book or 0}}">

                                @if ($errors->has('book'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('book') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('hobby') ? ' has-error' : '' }}">
                            <label for="hobby" class="col-md-4 control-label">特别爱好</label>

                            <div class="col-md-3">
                                <input id="hobby" type="hobby" class="form-control" name="hobby" required value="{{ $hobby or 0}}">

                                @if ($errors->has('hobby'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('hobby') }}</strong>
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
