<?php
$data = array(
        "fz"=>array(
            "title"=>"春秋服装",
            "des"=>"春秋服装清货大甩卖，最后一天，明天不走是小狗！",
            "src"=>"../img/1.png"
        ),
        "bb"=>array(
            "title"=>"时尚包包",
            "des"=>"时尚时尚最时尚，带上这款宝宝走出六亲不认的步伐！",
            "src"=>"../img/2.png"
        ),
        "ydx"=>array(
            "title"=>"运动鞋",
            "des"=>"摩擦摩擦，飞一般的感觉",
            "src"=>"../img/3.png"
        ));
echo json_encode($data[$_REQUEST["type"]]);

?>