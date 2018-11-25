@extends('layouts.user')
@section('right_block')
<div class="content-area col-md-8">
            <div class="panel panel-default">
                <div class="panel-heading">相册中心</div>
                <div class="panel-body">
                    <p><button class="btn btn-primary">上传相片</button>&nbsp;<button class="btn btn-primary">创建相册</button></p>
                    <hr>
                    <div class="row clearfix">
                        @if(!count($list))
                            <?php foreach ($list as $key => $value): ?>
                                <div class="col-md-3 column">
                                    <h2>
                                        {{$value['name']}}
                                    </h2>
                                    <p>
                                         <a class="btn" href=" {{$value['alb_id']}}">浏览进入 »</a>
                                    </p>
                                </div>
                            <?php endforeach ?>
                        @else
                            <h1>暂时没有任何相册</h1>
                        @endif
                    </div>
                </div>
            </div>
</div>
@endsection

<script src="{{ asset('js/jquery-1.11.0.min.js') }}"></script>