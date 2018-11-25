@extends('layouts.user')
@section('right_block')
<div class="content-area col-md-8">
            <div class="panel panel-default">
                <div class="panel-heading">用户详细资料</div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{ route('BaseInfoSave') }}">
                        {{ csrf_field() }}
                        <input type="hidden" name="uid" value="{{$uid}}">
                        <input type="hidden" name="action" value="DetailInfo">
                        <div class="form-group{{ $errors->has('origin_province') ? ' has-error' : '' }}">
                            <label for="origin_province" class="col-md-4 control-label">籍贯省份</label>

                            <div class="col-md-3">
                                <select class="form-control" name="origin_province" id="origin_province" onchange="citys_list()">
                                </select>
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
                                <select class="form-control" name="origin_city" id="origin_city">
                                </select>
                                @if ($errors->has('origin_city'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('origin_city') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        
                        <div class="form-group{{ $errors->has('weight') ? ' has-error' : '' }}">
                            <label for="weight" class="col-md-4 control-label">体重 kg</label>

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
                                    <option value="1" @if ($shape==0) selected @endif>保密</option>
                                    <option value="1" @if ($shape==1) selected @endif>一般</option>
                                    <option value="2" @if ($shape==2) selected @endif>瘦长</option>
                                    <option value="3" @if ($shape==3) selected @endif>运动员型</option>
                                    <option value="4" @if ($shape==4) selected @endif>比较胖</option>
                                    <option value="5" @if ($shape==5) selected @endif>体格魁梧</option>
                                    <option value="6" @if ($shape==6) selected @endif>壮实</option>
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
                                <select class="form-control" name="constellation" id="constellation">
                                    <option value="1" @if ($constellation==0) selected @endif>保密</option>
                                    <option value="1" @if ($constellation==1) selected @endif>牡羊座(03.21-04.20)</option>
                                    <option value="2" @if ($constellation==2) selected @endif>金牛座(04.21-05.20)</option>
                                    <option value="3" @if ($constellation==3) selected @endif>双子座(05.21-06.21)</option>
                                    <option value="4" @if ($constellation==4) selected @endif>巨蟹座(06.22-07.22)</option>
                                    <option value="5" @if ($constellation==5) selected @endif>狮子座(07.23-08.22)</option>
                                    <option value="6" @if ($constellation==6) selected @endif>处女座(08.23-09.22)</option>
                                    <option value="7" @if ($constellation==7) selected @endif>天平座(09.23-10.22)</option>
                                    <option value="8" @if ($constellation==8) selected @endif>天蝎座(10.23-11.21)</option>
                                    <option value="9" @if ($constellation==9) selected @endif>射手座(11.22-12.21)</option>
                                    <option value="10" @if ($constellation==10) selected @endif>摩羯座(12.22-01.19)</option>
                                    <option value="11" @if ($constellation==11) selected @endif>水瓶座(01.20-02.19)</option>
                                    <option value="12" @if ($constellation==12) selected @endif>双鱼座(02.20-03.20)</option>
                                </select>

                                @if ($errors->has('constellation'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('constellation') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('nation') ? ' has-error' : '' }}">
                            <label for="nation" class="col-md-4 control-label">民族</label>

                            <div class="col-md-3">
                                <select class="form-control" name="nation" id="nation">
                                @foreach ($nations as $key => $v)
                                    <option value="{{$v->id}}" @if ($v->id==0) selected @endif>{{$v->name}}</option>
                                @endforeach
                                </select>
                                <!-- 
                                    <option value="0" @if ($nation==0) selected @endif>保密</option>
                                    <option value="1" @if ($nation==1) selected @endif>未婚未育</option>
                                    <option value="2" @if ($nation==2) selected @endif>未婚已育</option>
                                    <option value="3" @if ($nation==3) selected @endif>已婚未育</option>
                                    <option value="4" @if ($nation==4) selected @endif>已婚已育</option>
                                    <option value="5" @if ($nation==5) selected @endif>离异未育</option>
                                    <option value="6" @if ($nation==6) selected @endif>离异已育</option>
                                 -->
                                @if ($errors->has('nation'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('nation') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('marry_time') ? ' has-error' : '' }}">
                            <label for="marry_time" class="col-md-4 control-label">结婚打算</label>
                            <div class="col-md-3">
                                <select class="form-control" name="marry_time" id="marry_time">
                                    <option value="1" @if ($marry_time==0) selected @endif>保密</option>
                                    <option value="1" @if ($marry_time==1) selected @endif>认同闪婚</option>
                                    <option value="2" @if ($marry_time==2) selected @endif>一年内</option>
                                    <option value="3" @if ($marry_time==3) selected @endif>两年内</option>
                                    <option value="4" @if ($marry_time==4) selected @endif>三年内</option>
                                    <option value="5" @if ($marry_time==5) selected @endif>时机成熟就结婚</option>
                                </select>
                                @if ($errors->has('marry_time'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('marry_time') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('has_child') ? ' has-error' : '' }}">
                            <label for="has_child" class="col-md-4 control-label">有没有小孩</label>
                            <div class="col-md-3">
                                <select class="form-control" name="has_child" id="has_child">
                                    <option value="1" @if ($has_child==0) selected @endif>保密</option>
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

                        <div class="form-group{{ $errors->has('want_child') ? ' has-error' : '' }}">
                            <label for="want_child" class="col-md-4 control-label">有没有小孩</label>
                            <div class="col-md-3">
                                <select class="form-control" name="want_child" id="want_child">
                                    <option value="1" @if ($want_child==0) selected @endif>保密</option>
                                    <option value="1" @if ($want_child==1) selected @endif>视情况</option>
                                    <option value="2" @if ($want_child==2) selected @endif>想要孩子</option>
                                    <option value="3" @if ($want_child==3) selected @endif>不要孩子</option>
                                    <option value="4" @if ($want_child==4) selected @endif>以后再说</option>
                                </select>
                                @if ($errors->has('want_child'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('want_child') }}</strong>
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
<script type="text/javascript">
    $.post('/area/childsByPid',{'_token':'{{csrf_token()}}'},function(data){
        if(data.code==1){
            var len = data.data.length;
            var html = '';
            for (var i = len - 1; i >= 0; i--) {
                if({{$origin_province}} == data.data[i].id){
                    html += "<option value='"+data.data[i].id+"' selected>"+data.data[i].name+"</option>";
                }else{
                    html += "<option value='"+data.data[i].id+"'>"+data.data[i].name+"</option>";
                }
            }
            $('#origin_province').html(html);
        }
    });

    if({{$origin_province}}){
        citys_list({{$origin_province}});
    }

    function citys_list(pid) {
        if(!pid){
            var pid = $('#origin_province').val();
        }
        $.post('/area/childsByPid',{'_token':'{{csrf_token()}}','pid':pid},function(data){
            if(data.code==1){
                var len = data.data.length;
                var html = '';
                for (var i = len - 1; i >= 0; i--) {
                    if({{$origin_city}} == data.data[i].id){
                        html += "<option value='"+data.data[i].id+"' selected>"+data.data[i].name+"</option>";
                    }else{
                        html += "<option value='"+data.data[i].id+"'>"+data.data[i].name+"</option>";
                    }
                }
                $('#origin_city').html(html);
            }
        });
    }
</script>
