<?php

namespace App\Models;

// use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
    protected   $table = 'user_info';
    public      $timestamps = true;
    protected   $fillable = ['uid','user_name','phone','area_province','area_city','area','income','height','marry_status','education','college','created_at','updated_at'];
}
