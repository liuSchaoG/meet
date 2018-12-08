@extends('layouts.app')
@section('content')
     <div class="row clearfix">
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
    </div>

@endsection