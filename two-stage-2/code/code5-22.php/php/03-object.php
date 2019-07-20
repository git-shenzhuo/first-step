<?php
header("content-type:text/html;charset=utf-8");
#对象
class Person{
    public $name = "洛天依";
    public $age  = 6;
    function showname(){
        echo "姓名：".$this->name;
    }
    function showage(){
        echo "年龄：".$this->age;
    }
}
$p = new Person;
echo "<br>";
var_dump($p);
echo "<br>";
var_dump($p->showname());
echo "<br>";
var_dump($p->showage());
echo "<br>";
echo "<br>";
echo $p->name;
echo "<br>";
echo $p->age;
echo "<br>";
$p->showname();
echo "<br>";
$p->showage();
echo "<br>";
$q = new Person;
echo $q->age,$q->name;
var_dump($q->age,$q->name);
$q->showage();
echo "<br>";
$q->showname();
?>