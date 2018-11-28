@extends('layouts.user')
@section('right_block')
<div class="content-area col-md-8">
            <div class="panel panel-default">
                <div class="panel-heading">工作生活</div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{ route('BaseInfoSave') }}">
                        {{ csrf_field() }}
                        <input type="hidden" name="action" value="WorkLife">
                        <div class="form-group{{ $errors->has('industry') ? ' has-error' : '' }}">
                            <label for="industry" class="col-md-4 control-label">行业</label>

                            <div class="col-md-3">
                                <select class="form-control" name="industry" id="industry" onchange="vacation_list()">
                                </select>
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
                                <select class="form-control" name="vacation" id="vacation" onchange="position_list()">
                                </select>
                                @if ($errors->has('vacation'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('vacation') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('job') ? ' has-error' : '' }}">
                            <label for="job" class="col-md-4 control-label">工作</label>
                            <div class="col-md-3">
                                <select class="form-control" name="job" id="job" onchange="">
                                </select>
                                @if ($errors->has('job'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('job') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('house_status') ? ' has-error' : '' }}">
                            <label for="house_status" class="col-md-4 control-label">住房情况</label>

                            <div class="col-md-3">
                                <select class="form-control" name="house_status" id="house_status">
                                    <option value="0" @if ($house_status==0) selected @endif>保密</option>
                                    <option value="1" @if ($house_status==1) selected @endif>和家人住</option>
                                    <option value="2" @if ($house_status==2) selected @endif>已购房</option>
                                    <option value="3" @if ($house_status==3) selected @endif>租房</option>
                                    <option value="4" @if ($house_status==4) selected @endif>婚后购房</option>
                                    <option value="5" @if ($house_status==5) selected @endif>在单位宿舍</option>
                                </select>
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
                                <select class="form-control" name="car_status" id="car_status">
                                    <option value="0" @if ($car_status==0) selected @endif>保密</option>
                                    <option value="1" @if ($car_status==1) selected @endif>已购车</option>
                                    <option value="2" @if ($car_status==2) selected @endif>未购车</option>
                                </select>

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
                                    <option value="0" @if ($smoke_status==0) selected @endif>保密</option>
                                    <option value="1" @if ($smoke_status==1) selected @endif>不吸烟</option>
                                    <option value="2" @if ($smoke_status==2) selected @endif>稍微一点</option>
                                    <option value="3" @if ($smoke_status==3) selected @endif>抽得很多</option>
                                    <option value="4" @if ($smoke_status==4) selected @endif>社交抽烟</option>
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
                                <select class="form-control" name="drink_status" id="drink_status">
                                    <option value="0" @if ($drink_status==0) selected @endif>保密</option>
                                    <option value="1" @if ($drink_status==1) selected @endif>不喝酒</option>
                                    <option value="2" @if ($drink_status==2) selected @endif>稍微一点</option>
                                    <option value="3" @if ($drink_status==3) selected @endif>喝得很多</option>
                                    <option value="4" @if ($drink_status==4) selected @endif>社交喝酒</option>
                                </select>

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
                            </div>
                        </div>
                    </form>
                </div>
            </div>
</div>
@endsection
<script src="{{ asset('js/jquery-1.11.0.min.js') }}"></script>
<script>
    $.post('/position/childsByPid',{'_token':'{{csrf_token()}}'},function(data){
        if(data.code==1){
            var len = data.data.length;
            var html = '';
            for (var i = len - 1; i >= 0; i--) {
                if({{$industry}} == data.data[i].id){
                    html += "<option value='"+data.data[i].id+"' selected>"+data.data[i].name+"</option>";
                }else{
                    html += "<option value='"+data.data[i].id+"'>"+data.data[i].name+"</option>";
                }
            }
            $('#industry').html(html);
        }
    });


    function vacation_list(pid) {
        if(!pid){
            var pid = $('#industry').val();
        }
        $.post('/position/childsByPid',{'_token':'{{csrf_token()}}','pid':pid},function(data){
            if(data.code==1){
                var len = data.data.length;
                var html = '';
                for (var i = len - 1; i >= 0; i--) {
                    if({{$vacation}} == data.data[i].id){
                        html += "<option value='"+data.data[i].id+"' selected>"+data.data[i].name+"</option>";
                    }else{
                        html += "<option value='"+data.data[i].id+"'>"+data.data[i].name+"</option>";
                    }
                }
                $('#vacation').html(html);
            }
        });
    }

    function position_list(pid) {
        if(!pid){
            var pid = $('#vacation').val();
        }
        $.post('/position/childsByPid',{'_token':'{{csrf_token()}}','pid':pid},function(data){
            if(data.code==1){
                var len = data.data.length;
                var html = '';
                for (var i = len - 1; i >= 0; i--) {
                    if({{$job}} == data.data[i].id){
                        html += "<option value='"+data.data[i].id+"' selected>"+data.data[i].name+"</option>";
                    }else{
                        html += "<option value='"+data.data[i].id+"'>"+data.data[i].name+"</option>";
                    }
                }
                $('#job').html(html);
            }
        });
    }

    if({{$industry}}){
        vacation_list({{$industry}});
    }

    if({{$vacation}}){
        position_list({{$vacation}});
    }
</script>
