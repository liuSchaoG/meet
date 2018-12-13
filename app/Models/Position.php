<?php

namespace App\Models;

// use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    protected   $table = 'position';
    public      $timestamps = true;
    // protected   $fillable = ['uid','user_name','phone','area_province','area_city','area','income','height','marry_status','education','college','created_at','updated_at'];
    // protected   $hidden = [ 'password', 'remember_token'];
    // 
   	public function findNameById($id)
   	{
   		return DB::table('postion')->where('id',$id)->value('name');
   	}
}
