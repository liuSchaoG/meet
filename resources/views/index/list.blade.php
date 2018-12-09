@extends('layouts.app')
@section('content')
    <link href="{{ asset('css/list.css') }}" rel="stylesheet">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">
                    您的位置：{{$local_city}}&nbsp;定位不对？请选择城市：&nbsp; <em class="red">北京</em>&nbsp;<em class="red">上海</em>&nbsp;<em class="red">深圳</em>
                </div> 
                <div class="job-list">
                    <ul>
                        @foreach ($list_p as $info)
                        <li>
                              <div class="job-primary">
                                  <div class="info-primary">
                                      <h3 class="name">
                                          <a href="{{$info->uid}}" data-itemid="1" data-lid="1cuR2yKgA43.search" data-jobid="29925123" data-index="1" ka="search_list_1" target="_blank">
                                              <span>{{$info->username}}</span>&nbsp;<span class="red"></span>
                                          </a>
                                      </h3>
                                      <p>{{$info->area_name}}<em class="vline"></em>月薪：{{$incomes[$info->income]}}<em class="vline"></em>{{$educations[$info->education]}}</p>
                                  </div>
                                  <div class="info-company">
                                      <div class="company-text">{{$info->college}}</p>
                                      </div>
                                  </div>
                                  <div class="info-publis">
                                      <h3 class="name"><img src="/{{$info->head_image}}">{{$info->user_name}}<em class="vline"></em>{{$info->username}}</h3>
                                      <p>创建于{{$info->created_at}}</p>
                                  </div>
                                  <a href="javascript:;" data-url="/chatRoom?uid={{$info->uid}}" target="_blank" class="btn btn-startchat">立刻开撩
                                  </a>
                              </div>
                        </li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>
    </div>
    {{ $list_p->links() }}
    <script src="{{ asset('js/jquery-1.11.0.min.js') }}"></script>
    <script src="{{ asset('js/list.js') }}"></script>
@endsection