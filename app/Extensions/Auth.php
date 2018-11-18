<?php
/**
 * Created by PhpStorm.
 * User: yingchao
 * Date: 18-10-26
 * Time: 下午5:56
 */
namespace App\Extensions;



use Illuminate\Support\Facades\Session;

class Auth
{

    public $sex;

    public $username;

    public $id;

    public $status;

    function __construct()
    {
        $this->id = self::getUserId();
        $this->username = self::getUserName();
        $this->status = self::getLoginStatus();
        $this->sex = self::getUserSex();
    }

    public static function getUserId()
    {
        $id = \session('id');
        return !empty($id) ? $id : '';
    }

    public static function getUserSex()
    {
        $sex = \session('sex');
        return !empty($sex) ? $sex : '';
    }

    public static function getUserName()
    {
        $name = \session('username');
        return !empty($name) ? $name : '';
    }

    public static function getLoginStatus()
    {
        $status = \session('status');
        return !empty($status) ? $status : '';
    }

}