<?php
    header("Content-Type:text/json;charset=utf-8");
    # 获取前端页面提交的参数：username password
    $password = $_REQUEST["password"];
    $username = $_REQUEST["username"];

    # 对前端页面提交的数据检查
    # 假设：账户信息(wdd wwj xsl)  密码(123456)
    $usernames = array("wdd","wwj","xsl");
    if(in_array($username,$usernames))
    {
        if($password == "123456")
        {
            echo '{"code":"100","msg":"登录成功","status":"success"}';
        }else
        {
            echo '{"code":"101","msg":"密码不正确！","status":"error"}';
        }
    }else
    {
        echo '{"code":"102","msg":"用户名不存在！","status":"error"}';
    }

?>