<?php
header("content-type:text/html;charset=utf-8");
$date = array("nema"=>"洛天依","age"=>6,"color"=>"blue");
var_dump($date);
#php转化为json
var_dump("JSON_UNESCAPED_UNICODE");
$json1 = json_encode($date);
var_dump($json1);
#json转换为php
$p     = json_decode($json1);
var_dump($p);


?>