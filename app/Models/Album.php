<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    protected   $table = 'user_album';
    public      $timestamps = true;
    protected   $fillable = ['id','uid','alb_id','name','desc','a_right','img','created_at','updated_at'];
}
