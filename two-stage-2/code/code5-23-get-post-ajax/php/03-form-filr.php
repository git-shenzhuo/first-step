<?php
// 睡眠多少事件再往下执行
// sleep(2);
// 拿到上传的文件
var_dump($_FILES);
/*
array
  'filename' => 
    array
      'name' => string '203ca86df8de469fb99ab04dc072c34b.jpeg' (length=37)
      'type' => string 'image/jpeg' (length=10)
      'tmp_name' => string 'C:\server\wamp\tmp\php6D5B.tmp' (length=30)
      'error' => int 0
      'size' => int 215733
*/
print_r($_FILES);
/*
Array ( [filename] => Array ( [name] => 203ca86df8de469fb99ab04dc072c34b.jpeg [type] => image/jpeg [tmp_name] => C:\server\wamp\tmp\php7BAF.tmp [error] => 0 [size] => 215733 ) )
*/

#通过代码把上传服务器的文件保存到制定文件夹，并可以给他命名
move_uploaded_file($_FILES["filename"]["tmp_name"],"php.123.png");
?>