@extends('layouts.user')
@section('right_block')
<div class="content-area col-md-8">
            <div class="panel panel-default">
                <div class="panel-heading">工作生活</div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{ route('BaseInfoSave') }}">
                        {{ csrf_field() }}
                        <input type="hidden" name="uid" value="{{$uid}}">
                        
                        <div class="form-group{{ $errors->has('industry') ? ' has-error' : '' }}">
                            <label for="industry" class="col-md-4 control-label">行业</label>

                            <div class="col-md-3">
                                <input id="industry" type="industry" class="form-control" name="industry" required  disabled value="{{ $industry}}">

                                @if ($errors->has('industry'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('industry') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('vacation') ? ' has-error' : '' }}">
                            <label for="vacation" class="col-md-4 control-label">职业</label>

                            <div class="col-md-3">
                                <input id="vacation" type="vacation" class="form-control" name="vacation" required value="{{ $vacation or 0}}">

                                @if ($errors->has('vacation'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('vacation') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('house_status') ? ' has-error' : '' }}">
                            <label for="house_status" class="col-md-4 control-label">住房情况</label>

                            <div class="col-md-3">
                                <input id="house_status" type="house_status" class="form-control" name="house_status" required value="{{ $house_status or 0}}">

                                @if ($errors->has('house_status'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('house_status') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('car_status') ? ' has-error' : '' }}">
                            <label for="car_status" class="col-md-4 control-label">用车情况</label>

                            <div class="col-md-3">
                                <input id="car_status" type="car_status" class="form-control" name="car_status" required value="{{ $car_status or 0}}">

                                @if ($errors->has('car_status'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('car_status') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('smoke_status') ? ' has-error' : '' }}">
                            <label for="smoke_status" class="col-md-4 control-label">抽烟情况</label>

                            <div class="col-md-3">
                                <select class="form-control" name="smoke_status" id="smoke_status">
                                    <option value="1" @if ($smoke_status==0) selected @endif >未设定</option>
                                    <option value="1" @if ($smoke_status==1) selected @endif >3000元以下</option>
                                    <option value="2" @if ($smoke_status==2) selected @endif>3001~5000元</option>
                                    <option value="3" @if ($smoke_status==3) selected @endif>5001~8000元</option>
                                    <option value="4" @if ($smoke_status==4) selected @endif>8001~12000元</option>
                                    <option value="5" @if ($smoke_status==5) selected @endif>12001~20000元</option>
                                    <option value="6" @if ($smoke_status==6) selected @endif>20001~50000元</option>
                                    <option value="7" @if ($smoke_status==7) selected @endif>5000元以上</option>
                                </select>
                                @if ($errors->has('smoke_status'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('smoke_status') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('drink_status') ? ' has-error' : '' }}">
                            <label for="drink_status" class="col-md-4 control-label">喝酒情况</label>

                            <div class="col-md-3">
                                <input id="drink_status" type="drink_status" class="form-control" name="drink_status" required value="{{ $drink_status or '暂未设定'}}">

                                @if ($errors->has('drink_status'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('drink_status') }}</strong>
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
