<?php
header("content-type:text/html;charset=utf-8");
var_dump($_POST);
echo "用 户 名：".$_POST["user"]."<br>";
echo "密    码：".$_POST["word"]."<br>";
echo "手机号码：".$_POST["phone"]."<br>";
echo "邮箱地址：".$_POST["enum"]."<br>";


?>