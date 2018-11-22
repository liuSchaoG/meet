<?php

namespace App;

use DB;

class Mongo
{
    public static function connectMongo($tables)
    {
        return $users = DB::connection('mongodb')->collection($tables);
    }
}
