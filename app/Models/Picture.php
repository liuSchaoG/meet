<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class Picture extends Model
{
    protected   $table = 'user_picture';
    public      $timestamps = true;
    protected   $fillable = ['id','uid','type','alb_id','name','img','created_at','updated_at'];
}
