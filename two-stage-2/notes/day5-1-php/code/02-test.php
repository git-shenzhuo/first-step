<?php
# 变量声明 | 数据类型(整数 浮点型 字符串 数组   对象 NULL) 索引数组|关联数组(字典) 函数
$name    = "张三";
$address = "北京";
$age     = 18;
$height  = 173.5;
$friends = array("Rose","Lucy","Jack");
$car     = array("color"=>"red","ID"=>"粤888888");

# 控制输出 echo print() | print_r() | var_dump()  打印(调试)
echo $name."<br>";
var_dump($name);
echo "<br>";
var_dump($age);
echo "<br>";
var_dump($height);
echo "<br>";
var_dump($friends);
echo "<br>";
var_dump($car);
echo "<br>";
print_r($car);

# 对象
class Person{
    public $name = "田维";
    public $age  = 18;
    function showName(){
        echo "姓名：".$this->name;
    }
    function showAge(){
        echo "年龄：".$this->age;
    }
}

$p1 = new Person;
echo "<br>";
var_dump($p1->age);
echo "<br>";
var_dump($p1->name);
$p1->showName();
$p1->showAge();

# 函数
function add($a,$b)
{
    echo "a=$a,b=$b,a + b =".($a + $b);

    # 在函数内部不能直接访问全局变量
    # 如果要访问全局变量 需要特别说明  
    # 第一种方式 global说明
    # global $friends;
    # var_dump($friends);

    # 第二种方式 超级全局变量
    echo "<br>";
    var_dump($GLOBALS["friends"]);

}
ADD(10,333);


# 流程控制语句
# 顺序 + 选择 + 循环
# [1] 选择结构 
$number = 3;
if($number == 4)
{
    echo "当前是春天";
}else
{
    echo "这是你人生的其它季节！";
}
$score = 95;
// if($score >=85)
// {
//     echo "优秀";
// }elseif($score >= 60){
//     echo "及格";
// }else
// {
//     echo "不及格";
// }

if($score >=85):
    echo "优秀";
elseif($score >= 60):
    echo "及格";
else:
    echo "不及格";
endif;

# [2] 循环结构
# while do..while for
 $n = 5;
 while($n >0)
 {
     echo "<br>";
     echo "当前循环--$n";
     $n--;
 }

 for($i = 0 ; $i < 5; $i++)
 {
    echo "<br>";
    echo "当前循环--$i";
 }

 for($key = 0;$key<count($friends);$key++)
 {
     echo "<br>";
     echo "$key---$friends[$key]";
 }

// 解决中文乱码问题
// JSON_UNESCAPED_UNICODE
// header("Content-Type:text/html;charset=UTF-8");
?>