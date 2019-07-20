<?php
header("content-type:text/html;charset=utf-8");
    // 数据库已经存在的用户名和密码
    $arr1 = array("name"=>"zs","password"=>123456);
    $arr2 = array("name"=>"ls","password"=>234567);
    $arr3 = array("name"=>"ww","password"=>345678);
    $arr4 = array("name"=>"zd","password"=>4567890);
    // $data = array(
    //     {"name"=>"zs","password"=>123456},
    //     {"name"=>"ls","password"=>234567},
    //     {"name"=>"ww","password"=>345678},
    //     {"name"=>"zd","password"=>4567890});
    $data = array($arr1,$arr2,$arr3,$arr4);
    $test1 = array("code"=>"100","msg"=>"用户名不正确");
    $test2 = array("code"=>"101","msg"=>"密码不正确");
    $test3 = array("code"=>"102","msg"=>"登录成功");
    // $json1 = json_encode($test1);
    // $json2 = json_encode($test2);
    // $json3 = json_encode($test3);
    // 拿到传输过来的数据
    $name     = $_REQUEST["username"];
    $password = $_REQUEST["password"];
    // 数据进行比较
    for($i = 0,$j = 0;$i < count($data);$i++){
        if($data[$i]["username"] == $name){
            break;
        }else{$j++;};
    };
    for($n = 0,$m = 0;$n < count($data);$n++){
        if($data[$n]["password"] == $password){
            break;
        }else{$m++;};
    };
    if($j == 4){
        echo `{"code":100","msg":"用户名不正确","judge":"error"}`;
    }else{
        if($m == 4){
            echo `{"code":101","msg":"密码不正确","judge":"error"}`;
        }else{
            
            echo `{"code":102","msg":"登陆成功","judge":"success"}`;
           
        };
    };
    
    
?>