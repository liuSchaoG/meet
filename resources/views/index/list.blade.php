@extends('layouts.app')
@section('content')
    <!-- <link href="{{ asset('css/list.css') }}" rel="stylesheet"> -->
    
     <!-- <div class="row clearfix">
        <div class="col-md-12 column">
            <table class="table">
                <thead>
                <tr>
                    <th>用户ID</th>
                    <th>用户姓名</th>
                    <th>省份</th>
                    <th>收入</th>
                    <th>身高</th>
                    <th>学历</th>
                    <th>学校</th>
                </tr>
                </thead>
                <tbody>
                @foreach ($list_p as $info)
                <tr>
                    <td>{{$info->uid}}</td>
                    <td>{{$info->user_name}}</td>
                    <td>{{$info->area_province}}</td>
                    <td>{{$info->income}}</td>
                    <td>{{$info->height}}</td>
                    <td>{{$info->education}}</td>
                    <td>{{$info->college}}</td>
                </tr>
                @endforeach
                </tbody>
            </table>
            {{ $list_p->links() }}
        </div>
    </div> -->
    <div class="row">
     <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-default">
       <div class="panel-heading">
        
       </div> 
       <div class="job-list">
        <ul>
            <li>
                  <div class="job-primary">
                      <div class="info-primary">
                          <h3 class="name">
                              <a href="/job_detail/1e2e53c18de6dfd51X1z2di8ElE~.html" data-jid="1e2e53c18de6dfd51X1z2di8ElE~" data-itemid="1" data-lid="1cuR2yKgA43.search" data-jobid="29925123" data-index="1" ka="search_list_1" target="_blank">
                                  <span>29岁</span>&nbsp;<span class="red">30k-50k</span>
                              </a>
                          </h3>
                          <p>北京<em class="vline"></em>3-5年<em class="vline"></em>本科</p>
                      </div>
                      <div class="info-company">
                          <div class="company-text">ddddd</p>
                          </div>
                      </div>
                      <div class="info-publis">
                          <h3 class="name"><img src="https://img2.bosszhipin.com/boss/avatar/avatar_14.png?x-oss-process=image/resize,w_40,limit_0">李龙<em class="vline"></em>求婚者</h3>
                          <p>发布于11月19日</p>
                      </div>
                      <a href="javascript:;" data-url="/gchat/addRelation.json?jobId=1e2e53c18de6dfd51X1z2di8ElE~&amp;lid=1cuR2yKgA43.search" redirect-url="/geek/new/index/chat?id=6c0de8711ede6e851Hx82t29ElU~" target="_blank" class="btn btn-startchat">立即沟通
                      </a>
                  </div>
            </li>
            <li>
                  <div class="job-primary">
                      <div class="info-primary">
                          <h3 class="name">
                              <a href="/job_detail/1e2e53c18de6dfd51X1z2di8ElE~.html" data-jid="1e2e53c18de6dfd51X1z2di8ElE~" data-itemid="1" data-lid="1cuR2yKgA43.search" data-jobid="29925123" data-index="1" ka="search_list_1" target="_blank">
                                  <span>29岁</span>&nbsp;<span class="red">30k-50k</span>
                              </a>
                          </h3>
                          <p>北京<em class="vline"></em>3-5年<em class="vline"></em>本科</p>
                      </div>
                      <div class="info-company">
                          <div class="company-text"></p>
                          </div>
                      </div>
                      <div class="info-publis">
                          <h3 class="name"><img src="https://img2.bosszhipin.com/boss/avatar/avatar_14.png?x-oss-process=image/resize,w_40,limit_0">李龙<em class="vline"></em>求婚者</h3>
                          <p>发布于11月19日</p>
                      </div>
                      <a href="javascript:;" data-url="/gchat/addRelation.json?jobId=1e2e53c18de6dfd51X1z2di8ElE~&amp;lid=1cuR2yKgA43.search" redirect-url="/geek/new/index/chat?id=6c0de8711ede6e851Hx82t29ElU~" target="_blank" class="btn btn-startchat">立即沟通
                      </a>
                  </div>
            </li>
        </ul>
       </div>
      </div>
     </div>
    </div>
    <script src="{{ asset('js/jquery-1.11.0.min.js') }}"></script>
    <script src="{{ asset('js/list.js') }}"></script>
@endsection