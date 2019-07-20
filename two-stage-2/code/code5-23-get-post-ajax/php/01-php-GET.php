<?php
header("content-type:text/html;charset=utf-8");
var_dump($_GET);
echo "用 户 名：".$_GET["user"]."<br>";
echo "密    码：".$_GET["word"]."<br>";
echo "手机号码：".$_GET["phone"]."<br>";
echo "邮箱地址：".$_GET["enum"]."<br>";


?>