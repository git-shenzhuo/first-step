<?php
 //     单行注释1
 #      单行注释2
 /*     多行注释*/  
 
 # 变量
 # JavaScript var name = "张三" | let name = "李四";
 $name = "张三";
 $age  = 18;

 # 控制输出 
 # JavaScript console.log(name) | document.write(name) | alert()
 # echo /  print一组函数
 # print()   输出字符串
 # printf()  格式化输出字符串
 # print_r() 输出对象或者是数组的内容
 echo "hello php~<br>";
 echo "姓名：".$name;
 echo "<br>";
 echo "年龄：".$age;
 $arr = array("毛毛","吉吉");
 echo "<br>";
 echo $arr;
 echo "<br>";
 print_r($arr);
 
 # 数据类型：
 # JavaScript null undefined string number boolean Object Symbol
 # php (整型 浮点型) 字符串 布尔类型  数组 对象   资源类型和Null
 $intNum    = 123;
 $floatNum  = 123.5;
 $className = "H5修仙班级";
 $address   = '天上人间';
 # 字符串单引号和双引号的区别
 echo '我是丹，我住在$address';
 echo "我是丹，我住在$address";
 $bool1    = true;
 $bool2    = false;
//  echo "<br>";
//  print_r($bool1);
//  echo "<br>";
//  print_r($bool2);
# JavaScript 数组 [1,2,3,4]
# 数组类型：数组(索引数组) | 字典(关联数组)
$arr1 = array("demoA","demoB","demoC");
$arr2 = array(1,2,3);
echo "<br>";
print_r($arr1);
echo "<br>";
print_r($arr2);

$dict = array("name"=>"zs","age"=>18,"color"=>"red");
print_r($dict);

echo $arr1[1];
echo $dict["color"];
?>