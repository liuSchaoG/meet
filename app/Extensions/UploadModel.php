<?php
/**
 * Created by PhpStorm.
 * User: yingchao
 * Date: 18-11-09
 * Time: 下午11:13
 */

namespace App\Extensions;
use Illuminate\Support\Facades\Storage;


class UploadModel
{
    
    /**
     * [Upload description]
     * @author liuchao 2018-11-27T08:12:52+0800
     * @param  [type] $file $request->file('file')
     * @param  [type] $path 存储路径
     * @param  [type] $disk 存储系统位置  config/filesysterm.php
     */
    public static function Upload($file, $path = '', $disk = 'upload')
    {
        if (empty($file) || empty($path)) {
            return false;
        }
        if ($file->isValid()) { //括号里面的是必须加的哦
            //获取文件的扩展名 
            $ext = $file->getClientOriginalExtension();
            //获取文件的绝对路径
            $tempPath = $file->getRealPath();
            //随机文件名
            $filename = $path . md5(date('Y-m-dhis')) . '.' . $ext;
            //存储文件。disk里面的public。总的来说，就是调用disk模块里的public配置
            $result = Storage::disk('upload')->put($filename, file_get_contents($tempPath));
            if ($result) {
                return $disk . '/' . $filename;
            } else {
                return false;
            }
        }
        return false;
    }

}