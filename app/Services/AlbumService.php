<?php

namespace App\Services;

use App\Models\Album;
use Illuminate\Support\Facades\DB;
/**
 * 相册服务提供
 */
class AlbumService 
{

    /**
     * [getUserAlbum description]
     * @author charlesliu 2018-11-20T16:21:59+0800
     * @param  [type] $uid [description]
     * @return [type]      [description]
     */
    public function getUserAlbum($uid)
    {
        $where['uid'] = $uid;
        return Album::where($where)->select(['id','uid','alb_id','type','img','created_at','updated_at'])->get()->toArray();
    }

    /**
     * [getUserPhotos description]
     * @author charlesliu 2018-11-20T16:35:08+0800
     * @param  [type] $uid [description]
     * @return [type]      [description]
     */
    public function getUserPhotos($uid)
    {
        if(isset($uid)){
            $where['area_parent_id'] = $pid;
        }else{
            $where['area_deep'] = 1;
        }
        return Album::where($where)->select('area_id as id', 'area_name as name')->get()->toArray();
    }


    /**
     * [uploadPic description]
     * @author liuchao 2018-11-25T16:35:03+0800
     * @param  [type] $param [description]
     * @return [type]        [description]
     * //1.限制文件的类型，防止注入php或其他文件，提升安全
       //2.限制文件的大小，减少内存压力
       //3.防止文件名重复，提升用户体验
       //方法一：  修改文件名    一般为:时间戳+随机数+用户名
       // 方法二:建文件夹
       //4.保存文件
     */
    public function uploadPic1($param){

        $uid = session('id');
        dd($param['file']->type);

        //判断上传的文件是否出错,是的话，返回错误
        if($param["file"]["error"]){
            echo $param["file"]["error"];     
        }else{
        //判断上传文件类型为png或jpg且大小不超过2048000B
        if(($param["file"]["type"]=="image/png"||$param["file"]["type"]=="image/jpeg")&&$param["file"]["size"]<2048000){
                //防止文件名重复
                $filename ="/public/images/".microtime(true).$param["file"]["name"];
                //转码，把utf-8转成gb2312,返回转换后的字符串， 或者在失败时返回 FALSE。
                $filename =iconv("UTF-8","gb2312",$filename);
                 //检查文件或目录是否存在
                if(file_exists($filename)){
                    echo"该文件已存在";
                }else{  
                    //保存文件,   move_uploaded_file 将上传的文件移动到新位置  
                    move_uploaded_file($param["file"]["tmp_name"],$filename);//将临时地址移动到指定地址 
                    dd(['upload ok!',$filename]);   
                }        
            }else{
                echo"文件类型不对";
            }
        }

    }

    public function upload1(Request $request){

        // if ($request->isMethod('POST')) { //判断是否是POST上传，应该不会有人用get吧，恩，不会的
 
            //在源生的php代码中是使用$_FILE来查看上传文件的属性
            //但是在laravel里面有更好的封装好的方法，就是下面这个
            //显示的属性更多
            $fileCharater = $request->file('source');
 
            if ($fileCharater->isValid()) { //括号里面的是必须加的哦
                //如果括号里面的不加上的话，下面的方法也无法调用的
 
                //获取文件的扩展名 
                $ext = $fileCharater->getClientOriginalExtension();
 
                //获取文件的绝对路径
                $path = $fileCharater->getRealPath();
 
                //定义文件名
                $filename = date('Y-m-d-h-i-s').'.'.$ext;
        
                //存储文件。disk里面的public。总的来说，就是调用disk模块里的public配置
                Storage::disk('public')->put($filename, file_get_contents($path));
            }
        // }
        // return view('upload');
    }




















}
