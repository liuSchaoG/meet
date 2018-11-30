@extends('layouts.user')
@section('right_block')
<div class="content-area col-md-8">
            <div class="panel panel-default">
                <div class="panel-heading">择偶条件</div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{ route('PreferenceSave') }}">
                        {{ csrf_field() }}
                        <div class="form-group{{ $errors->has('max_age') ? ' has-error' : '' }}">
                            <label for="max_age" class="col-md-4 control-label">年龄</label>
                            <div class="col-md-3">
                                <input id="min_age" type="min_age" class="form-control" name="min_age" required  value="{{ $min_age}}">
                                @if ($errors->has('min_age'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('min_age') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="col-md-3">
                                <input id="max_age" type="max_age" class="form-control" name="max_age" value="{{ $max_age or '暂未设定'}}" required autofocus>
                                @if ($errors->has('max_age'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('max_age') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>


                        <div class="form-group{{ $errors->has('max_height') ? ' has-error' : '' }}">
                            <label for="max_height" class="col-md-4 control-label">身高</label>
                            <div class="col-md-3">
                                <input id="min_height" type="min_height" class="form-control" name="min_height" required value="{{ $min_height or 0}}">

                                @if ($errors->has('min_height'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('min_height') }}</strong>
                                    </span>
                                @endif
                            </div>

                            <div class="col-md-3">
                                <input id="max_height" type="max_height" class="form-control" name="max_height" required value="{{ $max_height or 0}}">

                                @if ($errors->has('max_height'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('max_height') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('max_income') ? ' has-error' : '' }}">
                            <label for="max_income" class="col-md-4 control-label">最大收入</label>

                            <div class="col-md-3">
                                <select class="form-control" name="min_income" id="min_income">
                                    <option value="0" @if ($min_income==0) selected @endif >不限</option>
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

                            <div class="col-md-3">
                                <select class="form-control" name="max_income" id="max_income">
                                    <option value="0" @if ($max_income==0) selected @endif >不限</option>
                                    <option value="1" @if ($max_income==1) selected @endif >3000元以下</option>
                                    <option value="2" @if ($max_income==2) selected @endif>3001~5000元</option>
                                    <option value="3" @if ($max_income==3) selected @endif>5001~8000元</option>
                                    <option value="4" @if ($max_income==4) selected @endif>8001~12000元</option>
                                    <option value="5" @if ($max_income==5) selected @endif>12001~20000元</option>
                                    <option value="6" @if ($max_income==6) selected @endif>20001~50000元</option>
                                    <option value="7" @if ($max_income==7) selected @endif>5000元以上</option>
                                </select>

                                @if ($errors->has('max_income'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('max_income') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                         <div class="form-group{{ $errors->has('education') ? ' has-error' : '' }}">
                            <label for="education" class="col-md-4 control-label">学历要求</label>

                            <div class="col-md-3">
                                <select class="form-control" name="education" id="education">
                                    <option value="0" @if ($education==0) selected @endif>不限</option>
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
                                    <option value="0" @if ($marry_status==0) selected @endif>不限</option>
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
                            <label for="area_province" class="col-md-4 control-label">工作所在省</label>

                            <div class="col-md-3">
                                <select class="form-control" name="area_province" id="area_province" onchange="citys_list()">
                                    <option value=0 >请选择</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('area_city') ? ' has-error' : '' }}">
                            <label for="area_city" class="col-md-4 control-label">工作所在市</label>

                            <div class="col-md-3">
                                <select class="form-control" name="area_city" id="area_city" onchange="areas_list()">
                                    <option value=0 >请选择</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('area') ? ' has-error' : '' }}">
                            <label for="area" class="col-md-4 control-label">工作所在区</label>

                            <div class="col-md-3">
                                <select class="form-control" name="area" id="area_area">
                                    <option value=0 >请选择</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('has_child') ? ' has-error' : '' }}">
                            <label for="has_child" class="col-md-4 control-label">有没有小孩</label>
                            <div class="col-md-3">
                                <select class="form-control" name="has_child" id="has_child">
                                    <option value="0" @if ($has_child==0) selected @endif>保密</option>
                                    <option value="1" @if ($has_child==1) selected @endif>有且住在一起</option>
                                    <option value="2" @if ($has_child==2) selected @endif>有偶尔住在一起</option>
                                    <option value="3" @if ($has_child==3) selected @endif>有且不在身边</option>
                                    <option value="4" @if ($has_child==4) selected @endif>没有小孩</option>
                                </select>
                                @if ($errors->has('has_child'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('has_child') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('is_smoke') ? ' has-error' : '' }}">
                            <label for="is_smoke" class="col-md-4 control-label">抽烟情况</label>
                            <div class="col-md-3">
                                <select class="form-control" name="is_smoke" id="is_smoke">
                                    <option value="0" @if ($is_smoke==0) selected @endif>保密</option>
                                    <option value="1" @if ($is_smoke==1) selected @endif>不吸烟</option>
                                    <option value="2" @if ($is_smoke==2) selected @endif>稍微一点</option>
                                    <option value="3" @if ($is_smoke==3) selected @endif>抽得很多</option>
                                    <option value="4" @if ($is_smoke==4) selected @endif>社交抽烟</option>
                                </select>
                                @if ($errors->has('is_smoke'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('is_smoke') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('is_drink') ? ' has-error' : '' }}">
                            <label for="is_drink" class="col-md-4 control-label">喝酒情况</label>

                            <div class="col-md-3">
                                <select class="form-control" name="is_drink" id="is_drink">
                                    <option value="0" @if ($is_drink==0) selected @endif>保密</option>
                                    <option value="1" @if ($is_drink==1) selected @endif>不喝酒</option>
                                    <option value="2" @if ($is_drink==2) selected @endif>稍微一点</option>
                                    <option value="3" @if ($is_drink==3) selected @endif>喝得很多</option>
                                    <option value="4" @if ($is_drink==4) selected @endif>社交喝酒</option>
                                </select>

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
                                <select class="form-control" name="has_photo" id="has_photo">
                                    <option value="0" @if ($has_photo==0) selected @endif>不限</option>
                                    <option value="1" @if ($has_photo==1) selected @endif>有</option>
                                </select>

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
                                    保存
                                </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
</div>
@endsection
<script src="{{ asset('js/jquery-1.11.0.min.js') }}"></script>
<script>
    $.post('/area/childsByPid',{'_token':'{{csrf_token()}}'},function(data){
        if(data.code==1){
            var len = data.data.length;
            var html = '';
            for (var i = len - 1; i >= 0; i--) {
                if({{$area_province}} == data.data[i].id){
                    html += "<option value='"+data.data[i].id+"' selected>"+data.data[i].name+"</option>";
                }else{
                    html += "<option value='"+data.data[i].id+"'>"+data.data[i].name+"</option>";
                }
            }
            $('#area_province').html(html);
        }
    });

    if({{$area_province}}){
        citys_list({{$area_province}});
    }

    if({{$area_city}}){
        areas_list({{$area_city}});
    }


    function citys_list(pid) {
        if(!pid){
            var pid = $('#area_province').val();
        }
        $.post('/area/childsByPid',{'_token':'{{csrf_token()}}','pid':pid},function(data){
            if(data.code==1){
                var len = data.data.length;
                var html = '';
                for (var i = len - 1; i >= 0; i--) {
                    if({{$area_city}} == data.data[i].id){
                        html += "<option value='"+data.data[i].id+"' selected>"+data.data[i].name+"</option>";
                    }else{
                        html += "<option value='"+data.data[i].id+"'>"+data.data[i].name+"</option>";
                    }
                }
                $('#area_city').html(html);
                if(!{{$area_city}}){
                    $('#area_area').html();
                }
            }
        });
    }

    function areas_list(pid) {
        if(!pid){
            var pid = $('#area_city').val();
        }
        $.post('/area/childsByPid',{'_token':'{{csrf_token()}}','pid':pid},function(data){
            if(data.code==1){
                var len = data.data.length;
                var html = '';
                for (var i = len - 1; i >= 0; i--) {
                    if({{$area}} == data.data[i].id){
                        html += "<option value='"+data.data[i].id+"' selected>"+data.data[i].name+"</option>";
                    }else{
                        html += "<option value='"+data.data[i].id+"'>"+data.data[i].name+"</option>";
                    }
                }
                $('#area_area').html(html);
            }
        });
    }
    
</script>
