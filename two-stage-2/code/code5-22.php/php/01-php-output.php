<?php
header("content-type:text/html;charset=utf-8");
$name = '张三';
$age  = 23;
echo $name;
echo '<br>';
echo $age."<br>";
#字符串拼接
echo "姓名：".$name."<br>";
echo "hello,wodel!<br>";
print($name."<br>");
#索引数组
$arr  = array("hello","hi","you","love","mmp","<br>");
print_r($arr);
print_r($arr[5]);
#关联数组=>字典
$arr1 = array("name1"=>"王八","age1"=>"千年","name2"=>"龟","age2"=>"万年");
print_r($arr1);
print("<br>");
print_r($arr1["age1"].$arr1["name1"].$arr1["age2"].$arr1["name2"]);
// 打印具体数据
var_dump($name);
var_dump($age);
var_dump($arr);
var_dump($arr1);
var_export($arr1);
echo "<br>";
echo $arr;

?>