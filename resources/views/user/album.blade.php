@extends('layouts.user')
@section('right_block')
<div class="content-area col-md-8">
            <div class="panel panel-default">
                <div class="panel-heading">相册中心</div>
                <div class="panel-body">
                    <p><button class="btn btn-primary">上传相片</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn btn-primary">创建相册</button></p>
                    <hr>
                    <div class="row clearfix">
                        @forelse ($list as $value)
                            <div class="col-md-3 column">
                                <a href=""><img style="width: 50px" src="{{$value['img']}}" alt=""></a>
                                <p>
                                     <a class="btn" href="">{{$value['name']}} »</a>
                                </p>
                            </div>
                        @empty
                            &nbsp;&nbsp;<h1>暂时没有任何相册</h1>
                        @endforelse
                    </div>
                </div>
            </div>
</div>
@endsection

<script src="{{ asset('js/jquery-1.11.0.min.js') }}"></script>