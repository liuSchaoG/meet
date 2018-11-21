@extends('layouts.user')
@section('right_block')
<div class="content-area col-md-8">
            <div class="panel panel-default">
                <div class="panel-heading">兴趣爱好</div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{ route('BaseInfoSave') }}">
                        {{ csrf_field() }}
                        <input type="hidden" name="uid" value="{{$uid}}">
                        <input type="hidden" name="action" value="InterHobby">
                        <div class="form-group{{ $errors->has('foods') ? ' has-error' : '' }}">
                            <label for="foods" class="col-md-4 control-label">最喜欢的一道菜</label>

                            <div class="col-md-6">
                                <input id="foods" type="foods" placeholder="一道菜名，说出你最符合你口味的菜？" class="form-control" name="foods" value="{{ $foods or '暂未设定'}}" required autofocus>
                                @if ($errors->has('foods'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('foods') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('idol') ? ' has-error' : '' }}">
                            <label for="idol" class="col-md-4 control-label">喜欢的名人</label>

                            <div class="col-md-6">
                                <input id="idol" type="idol" placeholder="一个名字，让你最敬佩的名人是谁？" class="form-control" name="idol" required  value="{{ $idol}}">

                                @if ($errors->has('idol'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('idol') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('song') ? ' has-error' : '' }}">
                            <label for="song" class="col-md-4 control-label">喜欢的歌曲</label>

                            <div class="col-md-6">
                                <input id="song" type="song" placeholder="一首歌曲，那首歌曲让你最感动？" class="form-control" name="song" required value="{{ $song or 0}}">

                                @if ($errors->has('song'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('song') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('book') ? ' has-error' : '' }}">
                            <label for="book" class="col-md-4 control-label">喜欢的书</label>

                            <div class="col-md-6">
                                <input id="book" type="book" class="form-control" placeholder="一本书，哪本是让印象最深刻的书？" name="book" required value="{{ $book or 0}}">

                                @if ($errors->has('book'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('book') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('hobby') ? ' has-error' : '' }}">
                            <label for="hobby" class="col-md-4 control-label">特别爱好</label>

                            <div class="col-md-6">
                                <input id="hobby" type="hobby" placeholder="还有什么与众不同的爱好？" class="form-control" name="hobby" required value="{{ $hobby or 0}}">

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
                            </div>
                        </div>
                    </form>
                </div>
            </div>
</div>
@endsection
