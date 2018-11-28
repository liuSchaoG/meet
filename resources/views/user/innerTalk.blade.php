@extends('layouts.user')
@section('right_block')
<div class="content-area col-md-8">
            <div class="panel panel-default">
                <div class="panel-heading">内心独白</div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{ route('BaseInfoSave') }}">
                        {{ csrf_field() }}
                        <input type="hidden" name="action" value="InnerTalk">
                        <div class="form-group{{ $errors->has('inner_idea') ? ' has-error' : '' }}">
                            <label for="inner_idea" class="col-md-2 control-label">内心独白</label>

                            <div class="col-md-10">
                                <textarea id="inner_idea" type="inner_idea" placeholder="介绍一下自己，描述一下理想的伴侣，说说你对婚姻的期望" class="form-control" name="inner_idea" autofocus required rows="8" cols="20">{{$inner_idea}}</textarea>
                                <br>
                                <p>小提示：<br>
1.&nbsp;为了遵守国家法规，保障用户个人信息安全，内心独白中请勿出现QQ、微信、微博、电话号码等联系方式以及网址、广告、色情、诋毁或其他不健康的内容。</p><p>
2.&nbsp;若文字中出现不符合标准的内容，我们将予以删除，请认真填写。</p>
                                @if ($errors->has('inner_idea'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('inner_idea') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-8 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    保存
                                </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
</div>
@endsection
