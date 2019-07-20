<?php
header("content-type:text/html;charset=utf-8");
$addres = "塔寨村";
$name   = "林耀东";
$age    = 48;
$office = "人大常务副主任";
echo "我叫$name,住在$addres,今年$age,曾任$office.";
echo "<br>";
echo '我叫$name,住在$addre,今年$age,曾任$office.';
echo "<br>";
echo "<br>";
// strlen计算字符串长度
echo strlen("Hello world!");
echo "<br>";
// str_word_count字符串单词个数
echo str_word_count("hi hello world is love you");
echo str_word_count("Hello world!");
echo str_word_count("hi hello world is love you");
echo "<br>";
echo strrev("Hello world!");
echo "<br>";
echo "<br>";


?>