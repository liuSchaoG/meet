<?php

namespace App\Models;

// use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class Preference extends Model
{
    protected   $table = 'user_preference';
    public      $timestamps = true;
    protected   $fillable = ['uid','max_age','min_age','max_height','min_height','max_income','min_income','height','marry_status','education','marry_status','shape','updated_at','area_province','area_city','area','has_child','is_smoke','is_drink','has_photo','created_at','updated_at'];
    // protected   $hidden = [ 'password', 'remember_token'];
}
