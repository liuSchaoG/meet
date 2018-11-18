<?php
/**
 * Created by PhpStorm.
 * User: yingchao
 * Date: 18-11-09
 * Time: 下午11:13
 */

namespace App\Extensions;


class ReturnModel
{

    public $code;
    public $message;
    public $data;

    public function __construct()
    {
        $this->code = 1;
        $this->message = '成功';
        $this->data = array();
    }

    public function initFail($fail_message)
    {
        $this->code = -100;
        $this->message = $fail_message;
        $this->data = null;
    }

    public function setData($data)
    {
        $this->data = $data;
    }

    public function setCode($code)
    {
        $this->code = $code;
    }

    public function toArray()
    {
        return ['code' => $this->code, 'message' => $this->message, 'data' => $this->data];
    }

    public function toJson()
    {
        return json_encode(['code' => $this->code, 'message' => $this->message, 'data' => $this->data]);
    }

}