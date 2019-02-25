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
     * [获取城市 description]
     * @author charlesliu 2018-12-06T18:10:34+0800
     * @param  string $value [description]
     */
    public static function getCityByIp()
    {
    	$ip = self::get_client_ip();

    	if(!filter_var($ip, FILTER_VALIDATE_IP)) {
			return false;
		}
        $url = "http://ip.taobao.com/service/getIpInfo.php?ip=".$ip;

        $ret = self::send_request($url, '', 'post', false);

        return json_decode($ret,true);
    }


    /**
     * 发送curl请求，并获取请求结果
     * @param string 请求地址
     * @param array 如果是post请求则需要传入请求参数
     * @param string 请求方法，get 或者 post， 默认为get
     * @param bool 是否以https协议请求
     */
    public static function send_request($request, $params, $method='post', $https=true){
        // 以get方式提交
        if ($method == 'get') {
            if (is_array($params)) {
                $request = $request.'?'.http_build_query($params);
            } else {
                $request = $request;
            }
        }

        $ch = curl_init($request);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);// 设置不显示结果，储存入变量
        curl_setopt($ch, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循环
        // 判断是否以https方式访问
        if ($https) {
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0); // 对认证证书来源的检查
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2); // 从证书中检查SSL加密算法是否存在
        }
        if ($method == 'post') {        // 以post方式提交
            curl_setopt($ch, CURLOPT_POST, 1); // 发送一个常规的Post请求
            curl_setopt($ch, CURLOPT_HTTPHEADER,array('Content-Type: application/json; charset=utf-8')
        );
            curl_setopt($ch, CURLOPT_POSTFIELDS, $params); // Post提交的数据包
        }
        $tmpInfo = curl_exec($ch); // 执行操作
        if (curl_errno($ch)) {
            // echo 'Errno:'.curl_error($ch);//捕抓异常
            return json_encode(curl_error($ch),JSON_UNESCAPED_UNICODE);
        }
        curl_close($ch); // 关闭CURL会话
        return $tmpInfo; //
    }


    /**
     * 获取客户端IP地址
     * @param integer $type 返回类型 0 返回IP地址 1 返回IPV4地址数字
     * @param boolean $adv 是否进行高级模式获取（有可能被伪装） 
     * @return mixed
     */
    public static function get_client_ip($type = 0,$adv=false) {
        $type       =  $type ? 1 : 0;
        static $ip  =   NULL;
        if ($ip !== NULL) return $ip[$type];
        if($adv){
            if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
                $arr    =   explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
                $pos    =   array_search('unknown',$arr);
                if(false !== $pos) unset($arr[$pos]);
                $ip     =   trim($arr[0]);
            }elseif (isset($_SERVER['HTTP_CLIENT_IP'])) {
                $ip     =   $_SERVER['HTTP_CLIENT_IP'];
            }elseif (isset($_SERVER['REMOTE_ADDR'])) {
                $ip     =   $_SERVER['REMOTE_ADDR'];
            }
        }elseif (isset($_SERVER['REMOTE_ADDR'])) {
            $ip     =   $_SERVER['REMOTE_ADDR'];
        }
        // IP地址合法验证
        $long = sprintf("%u",ip2long($ip));
        $ip   = $long ? array($ip, $long) : array('0.0.0.0', 0);
        return $ip[$type];
    }

    /**
     * 根据年龄生成日期
     * @author liuchao 2018-12-31T10:43:15+0800
     * @param  [type] $birthday [description]
     * @return [type]           [description]
     */
    public static function getAge($birthday){
        $byear=date('Y',$birthday);
        $bmonth=date('m',$birthday);
        $bday=date('d',$birthday);
        $tyear=date('Y');
        $tmonth=date('m');
        $tday=date('d');
        $age=$tyear-$byear;
        if($bmonth>$tmonth || $bmonth==$tmonth && $bday>$tday){
            $age--;
        }
        return $age;
    }

    

}