@extends('layouts.user')
@section('right_block')
<div class="content-area col-md-8">
            <div class="panel panel-default">
                <div class="panel-heading">择偶条件</div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{ route('BaseInfoSave') }}">
                        {{ csrf_field() }}
                        <input type="hidden" name="uid" value="{{$uid}}">
                        <div class="form-group{{ $errors->has('max_age') ? ' has-error' : '' }}">
                            <label for="max_age" class="col-md-4 control-label">最大年龄</label>

                            <div class="col-md-3">
                                <input id="max_age" type="max_age" placeholder="请输入用户名或者手机号" class="form-control" name="max_age" value="{{ $max_age or '暂未设定'}}" required autofocus>
                                @if ($errors->has('max_age'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('max_age') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('min_age') ? ' has-error' : '' }}">
                            <label for="min_age" class="col-md-4 control-label">最小年龄</label>

                            <div class="col-md-3">
                                <input id="min_age" type="min_age" class="form-control" name="min_age" required  disabled value="{{ $min_age}}">

                                @if ($errors->has('min_age'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('min_age') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('max_height') ? ' has-error' : '' }}">
                            <label for="max_height" class="col-md-4 control-label">最高身高</label>

                            <div class="col-md-3">
                                <input id="max_height" type="max_height" class="form-control" name="max_height" required value="{{ $max_height or 0}}">

                                @if ($errors->has('max_height'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('max_height') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('min_height') ? ' has-error' : '' }}">
                            <label for="min_height" class="col-md-4 control-label">最低身高</label>

                            <div class="col-md-3">
                                <input id="min_height" type="min_height" class="form-control" name="min_height" required value="{{ $min_height or 0}}">

                                @if ($errors->has('min_height'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('min_height') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('max_income') ? ' has-error' : '' }}">
                            <label for="max_income" class="col-md-4 control-label">最大收入</label>

                            <div class="col-md-3">
                                <input id="max_income" type="max_income" class="form-control" name="max_income" required value="{{ $max_income or 0}}">

                                @if ($errors->has('max_income'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('max_income') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('min_income') ? ' has-error' : '' }}">
                            <label for="min_income" class="col-md-4 control-label">最低收入</label>

                            <div class="col-md-3">
                                <select class="form-control" name="min_income" id="min_income">
                                    <option value="1" @if ($min_income==0) selected @endif >未设定</option>
                                    <option value="1" @if ($min_income==1) selected @endif >3000元以下</option>
                                    <option value="2" @if ($min_income==2) selected @endif>3001~5000元</option>
                                    <option value="3" @if ($min_income==3) selected @endif>5001~8000元</option>
                                    <option value="4" @if ($min_income==4) selected @endif>8001~12000元</option>
                                    <option value="5" @if ($min_income==5) selected @endif>12001~20000元</option>
                                    <option value="6" @if ($min_income==6) selected @endif>20001~50000元</option>
                                    <option value="7" @if ($min_income==7) selected @endif>5000元以上</option>
                                </select>
                                @if ($errors->has('min_income'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('min_income') }}</strong>
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

                       

                        <div class="form-group{{ $errors->has('area_province') ? ' has-error' : '' }}">
                            <label for="area_province" class="col-md-4 control-label">工作省份</label>

                            <div class="col-md-3">
                                <input id="area_province" type="area_province" class="form-control" name="area_province" required value="{{ $area_province or '暂未设定'}}">

                                @if ($errors->has('area_province'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('area_province') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('area_city') ? ' has-error' : '' }}">
                            <label for="area_city" class="col-md-4 control-label">工作城市</label>

                            <div class="col-md-3">
                                <input id="area_city" type="area_city" class="form-control" name="area_city" required value="{{ $area_city or '暂未设定'}}">

                                @if ($errors->has('area_city'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('area_city') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('area') ? ' has-error' : '' }}">
                            <label for="area" class="col-md-4 control-label">工作区域</label>

                            <div class="col-md-3">
                                <input id="area" type="area" class="form-control" name="area" required value="{{ $area or '暂未设定'}}">

                                @if ($errors->has('area'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('area') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>


                        <div class="form-group{{ $errors->has('has_child') ? ' has-error' : '' }}">
                            <label for="has_child" class="col-md-4 control-label">是否有小孩</label>

                            <div class="col-md-3">
                                <input id="has_child" type="has_child" class="form-control" name="has_child" required value="{{ $has_child or '暂未设定'}}">

                                @if ($errors->has('has_child'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('has_child') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('is_smoke') ? ' has-error' : '' }}">
                            <label for="is_smoke" class="col-md-4 control-label">是否吸烟</label>

                            <div class="col-md-3">
                                <input id="is_smoke" type="is_smoke" class="form-control" name="is_smoke" required value="{{ $is_smoke or '暂未设定'}}">

                                @if ($errors->has('is_smoke'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('is_smoke') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('is_drink') ? ' has-error' : '' }}">
                            <label for="is_drink" class="col-md-4 control-label">是否喝酒</label>

                            <div class="col-md-3">
                                <input id="is_drink" type="is_drink" class="form-control" name="is_drink" required value="{{ $is_drink or '暂未设定'}}">

                                @if ($errors->has('is_drink'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('is_drink') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('has_photo') ? ' has-error' : '' }}">
                            <label for="has_photo" class="col-md-4 control-label">有无照片</label>

                            <div class="col-md-3">
                                <input id="has_photo" type="has_photo" class="form-control" name="has_photo" required value="{{ $has_photo or '暂未设定'}}">

                                @if ($errors->has('has_photo'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('has_photo') }}</strong>
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
