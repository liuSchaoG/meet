@extends('layouts.app')
@section('content')
    <link href="{{ asset('css/list.css') }}" rel="stylesheet">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">
                </div> 
                <div class="job-list">
                    <ul>
                        @foreach ($list_p as $info)
                        <li>
                              <div class="job-primary">
                                  <div class="info-primary">
                                      <h3 class="name">
                                          <a href="{{$info->uid}}" data-itemid="1" data-lid="1cuR2yKgA43.search" data-jobid="29925123" data-index="1" ka="search_list_1" target="_blank">
                                              <span>{{$info->height}}</span>&nbsp;<span class="red">{{$info->income}}</span>
                                          </a>
                                      </h3>
                                      <p>北京<em class="vline"></em>3-5年<em class="vline"></em>本科</p>
                                  </div>
                                  <div class="info-company">
                                      <div class="company-text">遇见网络</p>
                                      </div>
                                  </div>
                                  <div class="info-publis">
                                      <h3 class="name"><img src="https://img2.bosszhipin.com/boss/avatar/avatar_14.png?x-oss-process=image/resize,w_40,limit_0">{{$info->user_name}}<em class="vline"></em>求婚者</h3>
                                      <p>发布于11月19日</p>
                                  </div>
                                  <a href="javascript:;" data-url="{{$info->uid}}" redirect-url="/geek/new/index/chat?id=6c0de8711ede6e851Hx82t29ElU~" target="_blank" class="btn btn-startchat">立即沟通
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