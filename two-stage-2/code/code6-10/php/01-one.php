<?php
    // 打开文件
    // $wenjian = fopen("02-two.json","w");

    // 拿到数据
    $user = $_REQUEST["user"];
    $pass = $_REQUEST["pass"];
    $pinjie = {"user":$user,"pass":$pass};

    // echo $user.$pass;
    echo "123";

    // 写入
    // fwrite($wenjian,"123456\n");
    // fwrite($wenjian,"qwerty\n")

    // // 关闭文件
    // fclose($wenjian);

?>