@extends('layouts.user')
@section('right_block')
<div class="content-area col-md-8">
            <div class="panel panel-default">
                <div class="panel-heading">相册中心</div>
                <div class="panel-body">
                    <p><button class="btn btn-primary">上传相片</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn btn-primary" onclick="use_tan()">创建相册</button></p>
                    <hr>
                    <div class="row clearfix">
                        @forelse ($list as $value)
                            <div class="col-md-3 column">
                                <a href=""><img style="width: 150px" src="{{$value['img']}}" alt=""></a>
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
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">新增</h4>
            </div>
            <div class="modal-body">

                <div class="form-group">
                    <label for="txt_departmentname">部门名称</label>
                    <input type="text" name="txt_departmentname" class="form-control" id="txt_departmentname" placeholder="部门名称">
                </div>
                <div class="form-group">
                    <label for="txt_parentdepartment">上级部门</label>
                    <input type="text" name="txt_parentdepartment" class="form-control" id="txt_parentdepartment" placeholder="上级部门">
                </div>
                <div class="form-group">
                    <label for="txt_departmentlevel">部门级别</label>
                    <input type="text" name="txt_departmentlevel" class="form-control" id="txt_departmentlevel" placeholder="部门级别">
                </div>
                <div class="form-group">
                    <label for="txt_statu">描述</label>
                    <input type="text" name="txt_statu" class="form-control" id="txt_statu" placeholder="状态">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>关闭</button>
                <button type="button" id="btn_submit" class="btn btn-primary" data-dismiss="modal"><span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>保存</button>
            </div>
        </div>
    </div>
</div>

@endsection
<script src="{{ asset('js/jquery-1.11.0.min.js') }}"></script>
<script>

    function use_tan(argument) {
        $("#myModalLabel").text("新增");
        $('#myModal').modal();
    }
</script>










