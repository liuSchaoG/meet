<?php
/**
 * Created by PhpStorm.
 * User: yingchao
 * Date: 18-10-26
 * Time: 下午5:56
 */
namespace App\Extensions;

//全局函数
class GlobalFunction 
{
	/**
	 * 获取客户端IP
	 * @author charlesliu 2018-12-06T18:09:55+0800
	 * @return [type] [description]
	 */
    public static function getIp(){

        $realip = '';
        $unknown = 'unknown';
        if (isset($_SERVER)){
            if(isset($_SERVER['HTTP_X_FORWARDED_FOR']) && !empty($_SERVER['HTTP_X_FORWARDED_FOR']) && strcasecmp($_SERVER['HTTP_X_FORWARDED_FOR'], $unknown)){
                $arr = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
                foreach($arr as $ip){
                    $ip = trim($ip);
                    if ($ip != 'unknown'){
                        $realip = $ip;
                        break;
                    }
                }
            }else if(isset($_SERVER['HTTP_CLIENT_IP']) && !empty($_SERVER['HTTP_CLIENT_IP']) && strcasecmp($_SERVER['HTTP_CLIENT_IP'], $unknown)){
                $realip = $_SERVER['HTTP_CLIENT_IP'];
            }else if(isset($_SERVER['REMOTE_ADDR']) && !empty($_SERVER['REMOTE_ADDR']) && strcasecmp($_SERVER['REMOTE_ADDR'], $unknown)){
                $realip = $_SERVER['REMOTE_ADDR'];
            }else{
                $realip = $unknown;
            }
        }else{
            if(getenv('HTTP_X_FORWARDED_FOR') && strcasecmp(getenv('HTTP_X_FORWARDED_FOR'), $unknown)){
                $realip = getenv("HTTP_X_FORWARDED_FOR");
            }else if(getenv('HTTP_CLIENT_IP') && strcasecmp(getenv('HTTP_CLIENT_IP'), $unknown)){
                $realip = getenv("HTTP_CLIENT_IP");
            }else if(getenv('REMOTE_ADDR') && strcasecmp(getenv('REMOTE_ADDR'), $unknown)){
                    $realip = getenv("REMOTE_ADDR");
            }else{
                $realip = $unknown;
            }
        }
        $realip = preg_match("/[\d\.]{7,15}/", $realip, $matches) ? $matches[0] : $unknown;

        return $realip;
    }


    /**
     * [获取城市 description]
     * @author charlesliu 2018-12-06T18:10:34+0800
     * @param  string $value [description]
     */
    public static function getCityByIp()
    {
    	$ip = self::GetIp();

    	if(!filter_var($ip, FILTER_VALIDATE_IP)) {
			return false;
		}
        $url = "http://ip.taobao.com/service/getIpInfo.php?ip=".$ip;

        $ret = self::https_request($url);

        return json_decode($ret,true);
    }


    //POST请求函数
    public static function https_request($url,$data = null){
        $curl = curl_init();
         
        curl_setopt($curl,CURLOPT_URL,$url);
        curl_setopt($curl,CURLOPT_SSL_VERIFYPEER,false);
        curl_setopt($curl,CURLOPT_SSL_VERIFYHOST,false);
         
        if(!empty($data)){//如果有数据传入数据
            curl_setopt($curl,CURLOPT_POST,1);//CURLOPT_POST 模拟post请求
            curl_setopt($curl,CURLOPT_POSTFIELDS,$data);//传入数据
        }
         
        curl_setopt($curl,CURLOPT_RETURNTRANSFER,1);
        $output = curl_exec($curl);
        curl_close($curl);
         
        return $output;
    }







}