<?php
/**
 * Created by PhpStorm.
 * User: yingchao
 * Date: 18-10-26
 * Time: 下午5:56
 */

namespace App\Extensions;

use Illuminate\Validation\Validator;


class Validate extends Validator
{

    //验证手机号
    public static function isMobile($mobile)
    {
        if (empty($mobile)) {
            return false;
        }

        $reDate = '/^1[3456789]{1}\d{9}$/';
        return preg_match($reDate, $mobile);
    }


}