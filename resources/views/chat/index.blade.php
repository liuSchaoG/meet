@extends('layouts.app')
<link href="{{ asset('chat/css/chat.css?a=2') }}" rel="stylesheet">
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
                                    <div class="liLeft"><img src="{{$l['head_image']}}" id="head_{{$l['uid']}}"/></div>
                                    <div class="liRight">
                                        <span  class="intername">{{$l['username']}}</span>
                                        <span class="infor">年龄:29</span>
                                        <span class="uid" style="display: none;">{{$l['uid']}}</span>
                                    </div>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                    <!--右边聊天框-->
                    <div class="conRight">
                        <div class="Righthead">
                            <div class="headName">{{$freinds[0]['username']}}</div>
                            <div class="receive_uid" style="display: none;">{{$freinds[0]['uid']}}</div>
                            <div class="headConfig">
                                <ul>
                                    <li><img src="chat/images/20170926103645_06.jpg"/></li>
                                    <li><img src="chat/images/20170926103645_08.jpg"/></li>
                                    <li><img src="chat/images/20170926103645_10.jpg"/></li>
                                    <li><img src="chat/images/20170926103645_12.jpg"/></li>
                                </ul>
                            </div>
                        </div>
                        <div class="RightCont">
                            <ul class="newsList">

                            </ul>
                        </div>
                        <div class="RightFoot">
                            <div class="emjon">
                                <ul>
                                    <li><img src="chat/images/em_02.jpg"/></li>
                                    <li><img src="chat/images/em_05.jpg"/></li>
                                    <li><img src="chat/images/em_07.jpg"/></li>
                                    <li><img src="chat/images/em_12.jpg"/></li>
                                    <li><img src="chat/images/em_14.jpg"/></li>
                                    <li><img src="chat/images/em_16.jpg"/></li>
                                    <li><img src="chat/images/em_20.jpg"/></li>
                                    <li><img src="chat/images/em_23.jpg"/></li>
                                    <li><img src="chat/images/em_25.jpg"/></li>
                                    <li><img src="chat/images/em_30.jpg"/></li>
                                    <li><img src="chat/images/em_31.jpg"/></li>
                                    <li><img src="chat/images/em_33.jpg"/></li>
                                    <li><img src="chat/images/em_37.jpg"/></li>
                                    <li><img src="chat/images/em_38.jpg"/></li>
                                    <li><img src="chat/images/em_40.jpg"/></li>
                                    <li><img src="chat/images/em_45.jpg"/></li>
                                    <li><img src="chat/images/em_47.jpg"/></li>
                                    <li><img src="chat/images/em_48.jpg"/></li>
                                    <li><img src="chat/images/em_52.jpg"/></li>
                                    <li><img src="chat/images/em_54.jpg"/></li>
                                    <li><img src="chat/images/em_55.jpg"/></li>
                                </ul>
                            </div>
                            <div class="footTop">
                                <ul>
                                    <li><img src="chat/images/20170926103645_31.jpg"/></li>
                                    <li class="ExP"><img src="chat/images/20170926103645_33.jpg"/></li>
                                    <li><img src="chat/images/20170926103645_35.jpg"/></li>
                                    <li><img src="chat/images/20170926103645_37.jpg"/></li>
                                    <li><img src="chat/images/20170926103645_39.jpg"/></li>
                                    <li><img src="chat/images/20170926103645_41.jpg" alt="" /></li>
                                    <li><img src="chat/images/20170926103645_43.jpg"/></li>
                                    <li><img src="chat/images/20170926103645_45.jpg"/></li>
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
        window.onload = function (ev) {
            var user_uid = '{{ session('id') }}';
            var default_receive_uid = $('.receive_uid').text();
            //默认聊天记录10条
            getTalkList(user_uid,default_receive_uid,1);
            $('.conLeft li').on('click',function(){
                $(this).addClass('bg').siblings().removeClass('bg');
                var intername=$(this).children('.liRight').children('.intername').text();
                var receive_id = $(this).children('.liRight').children('.uid').text();
                $('.headName').text(intername);
                $('.receive_uid').text(receive_id);
                $('.newsList').html('');
                getTalkList(user_uid,receive_id,1);
                //$('.newsList').html('');
            })


            $('.ExP').on('mouseenter',function(){
                $('.emjon').show();
            })
            $('.emjon').on('mouseleave',function(){
                $('.emjon').hide();
            })
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
            })

            if(window.WebSocket) {
                //var webSocket = new WebSocket("ws://47.52.167.163:9502");
                var webSocket = new WebSocket("ws://127.0.0.1:9502");
                webSocket.onopen = function (event) {
                    //webSocket.send("{'user':'{{ session('id')}}'}");
                    webSocket.send('{"uid":'+ user_uid +'}');
                };
                $('.sendBtn').on('click', function () {
                    var news = $('#dope').val();
                    if (news == '') {
                        alert('不能为空');
                    } else {
                        $('#dope').val('');
                        var receive_uid = $('.receive_uid').text();
                        var message =  '{"message":"'+ news +'","send_uid":'+ user_uid +',"receive_uid":'+ receive_uid +'}';    //{'message': news, 'uid': user_uid};
                        console.log(message);
                        webSocket.send(message);
                        //$('.newsList').append(message);
                        //setTimeout(answers,1000);
                        //$('.conLeft').find('li.bg').children('.liRight').children('.infor').text(news);
                        //$('.RightCont').scrollTop($('.RightCont')[0].scrollHeight );
                    }

                })
                webSocket.onmessage = function (event) {
                    var data = eval('(' + event.data + ')');
                    //console.log(data);
                    var message = '';
                    //console.log(data.user_uid);
                    if(data.send_uid == undefined || data.receive_uid == undefined){
                        console.log(data.user_uid);
                        return '';
                    }
                    if (data.send_uid == user_uid) {
                        message += '<li>' +
                            '<div class="answerHead"><img src="{{session('head_image')}}"/></div>' +
                            '<div class="answers"><img class="jiao" src="chat/images/jiao.jpg">' + data.message + '</div>' +
                            '</li>';
                        $('.newsList').append(message);
                        $('.RightCont').scrollTop($('.RightCont')[0].scrollHeight);
                    } else {
                        var head_photo = $("#head_" + data.send_uid).attr('src');
                        console.log(data.send_uid);
                        message += '<li>' +
                            '<div class="nesHead"><img src="'+head_photo+'"/></div>' +
                            '<div class="news"><img class="jiao" src="chat/images/20170926103645_03_02.jpg">' + data.message + '</div>' +
                            '</li>';
                        $('.newsList').append(message);
                        // $('.conLeft').find('li.bg').children('.liRight').children('.infor').text(data.message);
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
                            if (list[i].send_uid == user_uid) {
                                message += '<li>' +
                                    '<div class="answerHead"><img src="{{session('head_image')}}"/></div>' +
                                    '<div class="answers"><img class="jiao" src="chat/images/jiao.jpg">' + list[i].message + '</div>' +
                                    '</li>';
                            } else {
                                var head_photo = $("#head_" + list[i].send_uid).attr('src');;
                                //console.log("head_" +list[i].send_uid);
                                //console.log(head_photo);
                                message += '<li>' +
                                    '<div class="nesHead"><img src="'+head_photo +'"/></div>' +
                                    '<div class="news"><img class="jiao" src="chat/images/20170926103645_03_02.jpg">' + list[i].message + '</div>' +
                                    '</li>';
                            }
                        }
                        $('.newsList').append(message);
                    }
                });
        }
    </script>
@endsection
<script src="{{ asset('js/jquery-1.11.0.min.js') }}"></script>




