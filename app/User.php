<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\DB;

class User extends Authenticatable
{
    use Notifiable;
    protected $table = 'user';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'phone', 'password', 'sex'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public static function findByUsename($username)
    {
        return DB::table('user')->where('username', $username)->first();
    }

    public static function findByPhone($phone)
    {
        return DB::table('user')->where('phone', $phone)->first();
    }

    public static function findByUid($uid)
    {
        return DB::table('user')->where('id', $uid)->select('username', 'head_img','created_at')->first();
    }
}
