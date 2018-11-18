@extends('layouts.user')
@section('right_block')
<div class="content-area col-md-8">
            <div class="panel panel-default">
                <div class="panel-heading">用户详细资料</div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{ route('BaseInfoSave') }}">
                        {{ csrf_field() }}
                        <input type="hidden" name="uid" value="{{$uid}}">
                        <div class="form-group{{ $errors->has('origin_province') ? ' has-error' : '' }}">
                            <label for="origin_province" class="col-md-4 control-label">籍贯省份</label>

                            <div class="col-md-3">
                                <input id="origin_province" type="origin_province" class="form-control" name="origin_province" required value="{{ $origin_province}}">

                                @if ($errors->has('origin_province'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('origin_province') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('origin_city') ? ' has-error' : '' }}">
                            <label for="origin_city" class="col-md-4 control-label">籍贯市区</label>

                            <div class="col-md-3">
                                <input id="origin_city" type="origin_city" class="form-control" name="origin_city" required value="{{ $origin_city or 0}}">

                                @if ($errors->has('origin_city'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('origin_city') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        
                        <div class="form-group{{ $errors->has('weight') ? ' has-error' : '' }}">
                            <label for="weight" class="col-md-4 control-label">体重</label>

                            <div class="col-md-3">
                                <input id="weight" type="weight" class="form-control" name="weight" required value="{{ $weight or 0}}">

                                @if ($errors->has('weight'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('weight') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('shape') ? ' has-error' : '' }}">
                            <label for="shape" class="col-md-4 control-label">体型</label>

                            <div class="col-md-3">
                                <select class="form-control" name="shape" id="shape">
                                    <option value="1" @if ($shape==0) selected @endif >保密</option>
                                    <option value="1" @if ($shape==1) selected @endif >3000元以下</option>
                                    <option value="2" @if ($shape==2) selected @endif>3001~5000元</option>
                                    <option value="3" @if ($shape==3) selected @endif>5001~8000元</option>
                                    <option value="4" @if ($shape==4) selected @endif>8001~12000元</option>
                                    <option value="5" @if ($shape==5) selected @endif>12001~20000元</option>
                                    <option value="6" @if ($shape==6) selected @endif>20001~50000元</option>
                                    <option value="7" @if ($shape==7) selected @endif>5000元以上</option>
                                </select>
                                @if ($errors->has('shape'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('shape') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('constellation') ? ' has-error' : '' }}">
                            <label for="constellation" class="col-md-4 control-label">星座</label>

                            <div class="col-md-3">
                                <input id="constellation" type="constellation" class="form-control" name="constellation" required value="{{ $constellation or '暂未设定'}}">

                                @if ($errors->has('constellation'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('constellation') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('nation') ? ' has-error' : '' }}">
                            <label for="nation" class="col-md-4 control-label">婚姻状态</label>

                            <div class="col-md-3">
                                <select class="form-control" name="nation" id="nation">
                                    <option value="1" @if ($nation==1) selected @endif>未婚未育</option>
                                    <option value="2" @if ($nation==2) selected @endif>未婚已育</option>
                                    <option value="3" @if ($nation==3) selected @endif>已婚未育</option>
                                    <option value="4" @if ($nation==4) selected @endif>已婚已育</option>
                                    <option value="5" @if ($nation==5) selected @endif>离异未育</option>
                                    <option value="6" @if ($nation==6) selected @endif>离异已育</option>
                                </select>
                                @if ($errors->has('nation'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('nation') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('marry_time') ? ' has-error' : '' }}">
                            <label for="marry_time" class="col-md-4 control-label">最高学历</label>

                            <div class="col-md-3">
                                <select class="form-control" name="marry_time" id="marry_time">
                                    <option value="1" @if ($marry_time==1) selected @endif>小学</option>
                                    <option value="2" @if ($marry_time==2) selected @endif>初中</option>
                                    <option value="3" @if ($marry_time==3) selected @endif>高中（职高、中专）</option>
                                    <option value="4" @if ($marry_time==4) selected @endif>大专（高职）</option>
                                    <option value="5" @if ($marry_time==5) selected @endif>本科</option>
                                    <option value="6" @if ($marry_time==6) selected @endif>研究生</option>
                                    <option value="7" @if ($marry_time==7) selected @endif>博士以上</option>
                                </select>
                                @if ($errors->has('marry_time'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('marry_time') }}</strong>
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
