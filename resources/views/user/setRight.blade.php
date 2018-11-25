@extends('layouts.user')
@section('right_block')
<div class="content-area col-md-8">
            <div class="panel panel-default">
                <div class="panel-heading">设置权限</div>

                <div class="panel-body">
                    <h1>设置权限</h1>
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

                        <div class="form-group{{ $errors->has('phone') ? ' has-error' : '' }}">
                            <label for="phone" class="col-md-4 control-label">手机号码</label>

                            <div class="col-md-3">
                                <input id="phone" type="phone" class="form-control" name="phone" required  disabled value="{{ $phone}}">

                                @if ($errors->has('phone'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('phone') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('area_province') ? ' has-error' : '' }}">
                            <label for="area_province" class="col-md-4 control-label">所在省</label>

                            <div class="col-md-3">
                                <input id="area_province" type="area_province" class="form-control" name="area_province" required value="{{ $area_province or 0}}">

                                @if ($errors->has('area_province'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('area_province') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('area_city') ? ' has-error' : '' }}">
                            <label for="area_city" class="col-md-4 control-label">所在市</label>

                            <div class="col-md-3">
                                <input id="area_city" type="area_city" class="form-control" name="area_city" required value="{{ $area_city or 0}}">

                                @if ($errors->has('area_city'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('area_city') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('area') ? ' has-error' : '' }}">
                            <label for="area" class="col-md-4 control-label">所在区</label>

                            <div class="col-md-3">
                                <input id="area" type="area" class="form-control" name="area" required value="{{ $area or 0}}">

                                @if ($errors->has('area'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('area') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('income') ? ' has-error' : '' }}">
                            <label for="income" class="col-md-4 control-label">月收入</label>

                            <div class="col-md-3">
                                <select class="form-control" name="income" id="income">
                                    <option value="1" @if ($income==0) selected @endif >未设定</option>
                                    <option value="1" @if ($income==1) selected @endif >3000元以下</option>
                                    <option value="2" @if ($income==2) selected @endif>3001~5000元</option>
                                    <option value="3" @if ($income==3) selected @endif>5001~8000元</option>
                                    <option value="4" @if ($income==4) selected @endif>8001~12000元</option>
                                    <option value="5" @if ($income==5) selected @endif>12001~20000元</option>
                                    <option value="6" @if ($income==6) selected @endif>20001~50000元</option>
                                    <option value="7" @if ($income==7) selected @endif>5000元以上</option>
                                </select>
                                @if ($errors->has('income'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('income') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('height') ? ' has-error' : '' }}">
                            <label for="height" class="col-md-4 control-label">净身高(CM)</label>

                            <div class="col-md-3">
                                <input id="height" type="height" class="form-control" name="height" required value="{{ $height or '暂未设定'}}">

                                @if ($errors->has('height'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('height') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('marry_status') ? ' has-error' : '' }}">
                            <label for="marry_status" class="col-md-4 control-label">婚姻状态</label>

                            <div class="col-md-3">
                                <select class="form-control" name="marry_status" id="marry_status">
                                    <option value="1" @if ($marry_status==1) selected @endif>未婚未育</option>
                                    <option value="2" @if ($marry_status==2) selected @endif>未婚已育</option>
                                    <option value="3" @if ($marry_status==3) selected @endif>已婚未育</option>
                                    <option value="4" @if ($marry_status==4) selected @endif>已婚已育</option>
                                    <option value="5" @if ($marry_status==5) selected @endif>离异未育</option>
                                    <option value="6" @if ($marry_status==6) selected @endif>离异已育</option>
                                </select>
                                @if ($errors->has('marry_status'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('marry_status') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('education') ? ' has-error' : '' }}">
                            <label for="education" class="col-md-4 control-label">最高学历</label>

                            <div class="col-md-3">
                                <select class="form-control" name="education" id="education">
                                    <option value="1" @if ($education==1) selected @endif>小学</option>
                                    <option value="2" @if ($education==2) selected @endif>初中</option>
                                    <option value="3" @if ($education==3) selected @endif>高中（职高、中专）</option>
                                    <option value="4" @if ($education==4) selected @endif>大专（高职）</option>
                                    <option value="5" @if ($education==5) selected @endif>本科</option>
                                    <option value="6" @if ($education==6) selected @endif>研究生</option>
                                    <option value="7" @if ($education==7) selected @endif>博士以上</option>
                                </select>
                                @if ($errors->has('education'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('education') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('college') ? ' has-error' : '' }}">
                            <label for="college" class="col-md-4 control-label">毕业学校-最高学历</label>

                            <div class="col-md-3">
                                <input id="college" type="college" class="form-control" name="college" required value="{{ $college or '暂未设定'}}">

                                @if ($errors->has('college'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('college') }}</strong>
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
                    </form> -->
                </div>
            </div>
</div>
@endsection
