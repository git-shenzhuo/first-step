<?php
    # 获取用户提交的数据
    # $_POST 仅仅能够获取POST请求提交的参数
    # $_GET  仅仅能够获取GET请求提交的参数
    # $_REQUEST 能够获取所有网络请求提交的参数
    echo "用户名".$_REQUEST["usm"]."<br>";
    echo "密码".$_REQUEST["pwd"]."<br>";
    echo "手机号码".$_POST["phoneText"]."<br>";
    echo "电子邮箱".$_POST["emailText"]."<br>";
?>