@extends('layouts.user')
@section('right_block')
@uploader('assets')
<div class="content-area col-md-8">
            <div class="panel panel-default">
                <div class="panel-heading">相册中心</div>

                <div class="panel-body">
                    @uploader('images')
                </div>
            </div>
</div>
@endsection
<script src="{{ asset('js/jquery-1.11.0.min.js') }}"></script>