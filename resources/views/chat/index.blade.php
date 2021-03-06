@extends('layouts.app')
<link href="{{ asset('chat/css/chat.css?v=35') }}" rel="stylesheet">
<link href="{{ asset('/css/webuploader.css?v=3') }}" rel="stylesheet">
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">30天内联系人</div>
                    <div class="conLeft" id="talkList">
                        <ul>
                            @foreach($freinds as $k=>$l)
                                <li @if($k==0) class="bg" @endif >
                                    <div class="liLeft"><img src="{{$l['head_image']}}" id="head_{{$l['uid']}}" width="43"/></div>
                                    <div class="liRight">
                                        <span  class="intername">{{$l['username']}}</span>
                                        <span class="uid" style="display: none;">{{$l['uid']}}</span>
                                        <span class="is_fan" style="display: none;">{{$l['is_fan']}}</span>
                                    </div>
                                    <div class="newLiRight">
                                        <span>
                                            {{$l['updated_at']}}
                                        </span>
                                        <span>
                                            <span class="notice-badge" id="unreadMessage_{{$l['uid']}}" style="display:{{$l['unread_num'] ? 'inline' : 'none'}};">
                                                {{$l['unread_num'] ? $l['unread_num'] : ''}}
                                            </span>
                                        </span>
                                    </div>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                    <!--右边聊天框-->
                    <div class="conRight">
                        <div class="Righthead">
                            <div class="headName"><?= isset($freinds[0]['username']) ?$freinds[0]['username']:'' ?></div>
                            <div class="receive_uid" style="display: none;"><?= isset($freinds[0]['uid']) ?$freinds[0]['uid']:'' ?></div>
                            <div class="is_fan" style="display: none;"><?= isset($freinds[0]['is_fan']) ?$freinds[0]['is_fan']:'' ?></div>
                            <div class="headConfig">
                                <ul style="font-size:12px;">
                                    <!--<li><img src="chat/images/20170926103645_06.jpg"/></li>
                                    <li><img src="chat/images/20170926103645_08.jpg"/></li>
                                    <li><img src="chat/images/20170926103645_10.jpg"/></li>
                                    <li><img src="chat/images/20170926103645_12.jpg"/></li>-->
                                    <li><span id="set_top" style="color: green;cursor:pointer;">置顶</span></li>
                                    <li><span id="test" style="color: green;cursor:pointer;">牵手</span></li>
                                    <li><span id="test" style="color: red;cursor:pointer;">拉黑</span></li>
                                    <li><span id="test" style="color: red;cursor:pointer;">举报</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="RightCont">
                            <ul class="newsList">
                            </ul>
                        </div>
                        <div class="RightFoot">
                            <div class="emjon" id="emjon"></div>
                            <div class="footTop">
                                <ul>
                                    <!--<li><img src="chat/images/20170926103645_31.jpg"/></li>-->
                                    <li id="ExP"><img src="chat/images/20170926103645_33.jpg" alt="表情"/></li>
                                    <!--<li><img src="chat/images/20170926103645_35.jpg"/></li>-->
                                    <!--<li><img src="chat/images/20170926103645_37.jpg"/></li>-->
                                    <!--<li><img src="chat/images/20170926103645_39.jpg"/></li>-->
                                    <li id="upload_photo"><img src="chat/images/20170926103645_41.jpg" alt="图片"/></li>
                                    <li><img src="chat/images/20170926103645_43.jpg"/></li>
                                    <!--<li><img src="chat/images/20170926103645_45.jpg"/></li>-->
                                </ul>
                            </div>
                            <div class="inputBox">
                                <textarea id="dope" style="width: 99%;height: 75px; border: none;outline: none;" name="" rows="" cols=""></textarea>
                                <button class="sendBtn">发送(s)</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript">
        $(document).ready(function(e) {
            ImgIputHandler.Init();
        });
        window.onload = function (ev) {
            //置顶功能
            var user_uid = '{{ session('id') }}';
            var default_receive_uid = $('.receive_uid').text();
            var is_top = $('.is_fan').text();
            isTop(is_top);
            //设为置顶
            $('#set_top').click(function () {
                var friend_uid = $(".receive_uid").text();
                $('.conLeft ul').prepend($('.conLeft ul .bg'));
                $.post("/chat/setTop", {'_token':'{{csrf_token()}}','uid':user_uid,'friend_uid':friend_uid},function (data) {
                    var data = eval('(' + data + ')');
                    if(data.code == 1){
                        isTop(data.data);
                    }
                })
            })
            //默认聊天记录10条
            getTalkList(user_uid,default_receive_uid,1);
            //图片上传
            var uploader = WebUploader.create({
                //设置上传不压缩
                compress:{
                    compressSize:1024*1024*1024,
                },
                // 自动上传。默认false不自动上传
                auto: true,
                // swf文件路径
                swf: '/webuploader/Uploader.swf',
                // 文件接收服务端。
                server: '/chat/upload',
                // 内部根据当前运行是创建，可能是input元素，也可能是flash.
                pick: '#upload_photo',
                // 定义上传文件类型
                accept: {
                    title: 'Images',
                    extensions: 'gif,jpg,jpeg,png',
                    mimeTypes: 'image/*'
                },
                //文件上传大小限制kb
                fileSingleSizeLimit: 1024 * 512,
                //自定义选择
                formData: {
                    limitType: 'gif,jpg,jpeg,png',
                    limitSize: '50',//单位kb
                    _token: '{{csrf_token()}}'
                }
            });

            uploader.on('uploadSuccess', function (file, response) {
                if(response.code === 1 ){
                    var img = '<img width=\'300\' src=\''+ response.data +'\' />'
                    send(img);
                }else{
                    layer.msg('图片上传失败');
                }
                uploader.reset();
            });

            if(window.WebSocket) {
                var webSocket = new WebSocket("ws://47.52.167.163:9502");
                //var webSocket = new WebSocket("ws://127.0.0.1:9502");
                webSocket.onopen = function (event) {
                    webSocket.send('{"uid":'+ user_uid +',"type":"init","access_token":"{{$chatToken}}"}');
                };
                $('.conLeft li').on('click',function(){
                    $(this).addClass('bg').siblings().removeClass('bg');
                    var intername=$(this).children('.liRight').children('.intername').text();
                    var receive_id = $(this).children('.liRight').children('.uid').text();
                    var is_fan = $(this).children('.liRight').children('.is_fan').text();
                    $('.headName').text(intername);
                    $('.receive_uid').text(receive_id);
                    isTop(is_fan);
                    $('.newsList').html('');
                    $('#unreadMessage_'+receive_id).html('');
                    $('#unreadMessage_'+receive_id).attr('style','display:none;');
                    getTalkList(user_uid,receive_id,1);
                    var message =  '{"status":"'+ 1 +'","send_uid":'+ user_uid +',"receive_uid":'+ receive_id +',"type":"is_read","access_token":"{{$chatToken}}"}';
                    //console.log(message)
                    webSocket.send(message);
                })
                $('.sendBtn').on('click', function () {
                    send('');
                })

                function send(img) {
                    var receive_uid = $('.receive_uid').text();
                    var news = $('#dope').val();
                    if (news == '' && img == '') {
                        alert('不能为空');
                    } else if(receive_uid == ''){
                        alert('请选择好友');
                    }else if(img){
                        var message =  '{"message":"'+ img +'","send_uid":'+ user_uid +',"receive_uid":'+ receive_uid +',"type":"msg","access_token":"{{$chatToken}}"}';
                        webSocket.send(message);
                    }else {
                        $('#dope').val('');
                        var message =  '{"message":"'+ news +'","send_uid":'+ user_uid +',"receive_uid":'+ receive_uid +',"type":"msg","access_token":"{{$chatToken}}"}';    //{'message': news, 'uid': user_uid};
                        webSocket.send(message);
                    }
                }

                //回车发送
                document.onkeydown=function(event){
                    if (event.key == 'Enter' && event.keyCode == 13) {
                        send('');
                        //阻止换行
                        event.cancelBubble=true;
                        event.preventDefault();
                        event.stopPropagation();
                    }
                }

                webSocket.onmessage = function (event) {
                    var data = eval('(' + event.data + ')');
                    var message = '';
                    if(data.send_uid == undefined || data.receive_uid == undefined){
                        return '';
                    }
                    var receive_uid = $('.receive_uid').text();
                    if((data.send_uid !=  user_uid || data.receive_uid != receive_uid) && (data.send_uid !=  receive_uid || data.receive_uid != user_uid)){
                        //添加消息未读
                        if(data.receive_uid ==  user_uid){
                            var message =  '{"status":"'+ 0 +'","send_uid":'+ data.send_uid +',"receive_uid":'+ user_uid +',"type":"is_read","access_token":"{{$chatToken}}"}';
                            webSocket.send(message);
                            var num = $('#unreadMessage_'+data.send_uid).html();
                            num = Number(num) + 1;
                            $('#unreadMessage_'+data.send_uid).html(num);
                            $('#unreadMessage_'+data.send_uid).attr('style','display:inline;');
                        }
                        return '';
                    }
                    var chat_message = ImgIputHandler.getEmjon(data.message);
                    if (data.send_uid == user_uid) {
                        message += '<li>' +
                            '<div class="answerHead"><img src="{{session('head_image')}}"/></div>' +
                            '<div class="answers"><img class="jiao" src="chat/images/jiao.jpg">' + chat_message + '</div>' +
                            '</li>';
                        $('.newsList').append(message);
                        $('.RightCont').scrollTop($('.RightCont')[0].scrollHeight);
                    } else {
                        var head_photo = $("#head_" + data.send_uid).attr('src');
                        message += '<li>' +
                            '<div class="nesHead"><img src="'+head_photo+'"/></div>' +
                            '<div class="news"><img class="jiao" src="chat/images/20170926103645_03_02.jpg">' + chat_message + '</div>' +
                            '</li>';
                        $('.newsList').append(message);
                        $('.RightCont').scrollTop($('.RightCont')[0].scrollHeight);
                    }

                };

            }else{
                console.log("您的浏览器不支持WebSocket");
            }
        }


        function getTalkList(send_uid,receive_uid,page) {
            $.post("/getChatList", {'_token':'{{csrf_token()}}','send_uid':send_uid,'receive_uid':receive_uid,'page':page },
                function(data){
                    var data = eval('(' + data + ')');
                    var message = '';
                    var list = data.data;
                    var user_uid = '{{ session('id')}}';
                    if(data.code == 1){
                        for(var i=0;i<list.length;i++){
                            var chat_message = ImgIputHandler.getEmjon(list[i].message);
                            if (list[i].send_uid == user_uid) {
                                message += '<li>' +
                                    '<div class="answerHead"><img src="{{session('head_image')}}"/></div>' +
                                    '<div class="answers"><img class="jiao" src="chat/images/jiao.jpg">' + chat_message + '</div>' +
                                    '</li>';
                            } else {
                                var head_photo = $("#head_" + list[i].send_uid).attr('src');
                                message += '<li>' +
                                    '<div class="nesHead"><img src="'+head_photo +'"/></div>' +
                                    '<div class="news"><img class="jiao" src="chat/images/20170926103645_03_02.jpg">' + chat_message + '</div>' +
                                    '</li>';
                            }
                        }
                        $('.newsList').append(message);
                    }
                });
        }
        //
        function isTop(a) {
            if(a == 0){
                $('#set_top').text('关注')
            } else {
                $('#set_top').text('取消关注');
            }
        }


        $('.emjon li').on('click',function(){
            var imgSrc=$(this).children('img').attr('src');
            var str="";
            str+='<li>'+
                '<div class="nesHead"><img src="img/6.jpg"/></div>'+
                '<div class="news"><img class="jiao" src="img/20170926103645_03_02.jpg"><img class="Expr" src="'+imgSrc+'"></div>'+
                '</li>';
            $('.newsList').append(str);
            $('.emjon').hide();
            $('.RightCont').scrollTop($('.RightCont')[0].scrollHeight );
        });
    </script>
@endsection
<script src="{{ asset('js/jquery-1.11.0.min.js') }}"></script>
<script src="{{ asset('chat/js/chat.js?v=30') }}"></script>
<script src="{{ asset('js/webuploader.min.js') }}"></script>
<script src="{{ asset('layer/layer.js') }}"></script>




