<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//防止csrf攻击
Route::group(['middleware'=>'web'],function (){
    Route::get('/', 'IndexController@index');//首页
    //登录注册
    //Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
    Route::post('login', 'Auth\LoginController@login')->name('login');//登录
    Route::get('login', 'Auth\LoginController@loginForm')->name('login');//登录
    Route::post('logout', 'Auth\LoginController@logout')->name('logout');//登出

    // Registration Routes...
    Route::get('register', 'Auth\RegisterController@RegistrationForm');
    Route::post('register', 'Auth\RegisterController@register')->name('register');//注册
    // Password Reset Routes...
    //Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm');
    //Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    //Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm');
    //Route::post('password/reset', 'Auth\ResetPasswordController@reset');
    Route::any('chatRoom', 'ChatController@index')->name('chatRoom');//聊天室
    Route::post('getChatList', 'ChatController@getChatList')->name('getChatList');//聊天室
    Route::post('chat/upload', 'ChatController@upload')->name('upload');//上传图片
    Route::post('chat/setTop', 'ChatController@setTop')->name('chat/setTop');//置顶


    //个人心中路由定义  2018-11-17
    //基本资料
    Route::get('/user/baseInfo', 'UserController@baseInfo')->name('BaseInfo');
    //详细资料
    Route::get('/user/detailInfo', 'UserController@detailInfo')->name('DetailInfo');
    //工作生活
    Route::get('/user/workLife', 'UserController@workLife')->name('WorkLife');
    //内心独白
    Route::get('/user/innerTalk', 'UserController@innerTalk')->name('InnerTalk');
    //兴趣爱好
    Route::get('/user/interHobby', 'UserController@interHobby')->name('InterHobby');
    //择偶条件
    Route::get('/user/perference', 'UserController@perference')->name('Perference');
    //我的认证
    Route::get('/user/identify', 'UserController@identify')->name('Identify');
    //我的相册
    Route::get('/user/album', 'AlbumController@index')->name('albumIndex');
    //相册照片
    Route::get('/user/picture', 'AlbumController@pictures')->name('pictureList');

    //权限设置
    Route::get('/user/setRight', 'UserController@setRight')->name('SetRight');
    //密码设置
    Route::get('/user/setPass', 'UserController@setPass')->name('SetPass');

    //相册上传
    Route::post('/album/upload', 'AlbumController@uploadAlbum')->name('albumUpload');
    //创建相册
    Route::post('/album/create', 'AlbumController@createAlbum')->name('createAlbum');

    //用户保存信息
    Route::post('/user/baseInfoSave', 'UserController@baseInfoSave')->name('BaseInfoSave');
    Route::post('/user/preferenceSave', 'UserController@prefernceSave')->name('PreferenceSave');
    
    Route::post('/user/uploadHeader', 'UserController@headerImg')->name('uploadHeader');

});


Route::get('/home', 'HomeController@index')->name('home');
//计算生成机器人
Route::get('/createPerson', 'RunController@runUser');
//根据父地区id 获取子集id
Route::post('/area/childsByPid', 'ExtenController@getChilds');
//根据父职位id 获取子集id
Route::post('/position/childsByPid', 'ExtenController@positionChilds');










