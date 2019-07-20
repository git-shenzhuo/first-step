<?php

$name = "jakema";
$age  = 46;
function person($a,$b){
    echo "$a,$b,".($a+$b);
    // 1------在函数里面访问外面的全局变量，global说明
    // global $name,$age;
    // echo $name,$age;
    // 2------超级全局变量$GLOBALS[];
    echo $GLOBALS["name"];
    var_dump($GLOBALS["name"]);
    var_dump($GLOBALS["age"]);
};
person(4,20);


?>