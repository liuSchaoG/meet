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


    //个人心中路由定义  2018-11-17
    //基本资料
    Route::get('/user/baseInfo', 'UserController@BaseInfo')->name('BaseInfo');
    //详细资料
    Route::get('/user/detailInfo', 'UserController@DetailInfo')->name('DetailInfo');
    //工作生活
    Route::get('/user/workLife', 'UserController@WorkLife')->name('WorkLife');
    //内心独白
    Route::get('/user/innerTalk', 'UserController@InnerTalk')->name('InnerTalk');
    //兴趣爱好
    Route::get('/user/interHobby', 'UserController@InterHobby')->name('InterHobby');
    //择偶条件
    Route::get('/user/perference', 'UserController@Perference')->name('Perference');
    //我的认证
    Route::get('/user/identify', 'UserController@Identify')->name('Identify');
    //我的相册
    Route::get('/user/album', 'UserController@Album')->name('Album');
    //权限设置
    Route::get('/user/setRight', 'UserController@SetRight')->name('SetRight');
    //密码设置
    Route::get('/user/setPass', 'UserController@SetPass')->name('SetPass');

    更新添加 

    //用户保存信息
    Route::post('/user/baseInfoSave', 'UserController@BaseInfoSave')->name('BaseInfoSave');

});




Route::get('/home', 'HomeController@index')->name('home');

//获取全国各省列表  id name charlesliu
Route::get('/area/provences', 'AreaController@getProvences');
//获取全国各市列表  id name charlesliu
Route::get('/area/citys', 'AreaController@getCitys');
//获取全国各区域列表  id name charlesliu
Route::get('/area/areas', 'AreaController@getAreas');








