<?php
header("Content-Type:text/html;charset=UTF-8");
# PHP字典和JSON数据的转换

$data = array("name"=>"王小波","age"=>45,"address"=>"北京市");
var_dump($data);

# 把PHP数据转换为JSON数据
$json = json_encode($data,JSON_UNESCAPED_UNICODE);
echo $json;

# 把JSON数据转换为PHP数据
$arr = json_decode($json,true);
var_dump($arr);


# http://wendingding.com/鲸鱼.png
# 协议   域名(DNS)   资源路径
?>