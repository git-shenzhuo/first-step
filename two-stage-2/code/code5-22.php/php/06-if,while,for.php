<?php
header("content-type:text/html;charset=utf-8");
#if
$num = 5;
if($num>=1 && $num<4){
    echo "一年四季---春季";
}elseif($num>=4 && $num<7){
    echo "一年四季---夏季";
}elseif($num>=7 && $num<10){
    echo "一年四季---秋季";
}elseif ($num>=10 && $num<=12) {
    echo "一年四季---冬季";
}else{
    echo "请过地球人的日子";
}
echo "<br>";
// :等价于｛｝，但要用endif结束
if($num>=1 && $num<4):
    echo "一年四季---春季";
elseif($num>=4 && $num<7):
    echo "一年四季---夏季";
elseif($num>=7 && $num<10):
    echo "一年四季---秋季";
elseif($num>=10 && $num<=12):
    echo "一年四季---冬季";
else:
    echo "请过地球人的日子";
endif;
echo "<br>";

// while
echo "<br>";
$i = 0;
while($i < 10){
    echo "当前i=$i";
    $i++;
    echo "<br>";
}
echo "<br>";
echo "<br>";
$i = 0;
while($i < 10):
    echo "当前i=$i";
    $i++;
    echo "<br>";
endwhile;
echo "<br>";


// for
echo "<br>";
for($n = 14;$n >2;$n--){
    echo "<br>";
    echo "n的平方=".($n * $n);
}
echo "<br>";
echo "<br>";
for($n = 14;$n >2;$n--):
    echo "<br>";
    echo "n的平方=".($n * $n);
endfor;
echo "<br>";
$friends = array("Rose","Lucy","Jack");
for($key = 0;$key < count($friends);$key++){
    echo "<br>";
    echo "$key-----$friends[$key]";
}
echo "<br>";
for($key = 0;$key < count($friends);$key++):
    echo "<br>";
    echo "$key-----$friends[$key]";
endfor;
?>