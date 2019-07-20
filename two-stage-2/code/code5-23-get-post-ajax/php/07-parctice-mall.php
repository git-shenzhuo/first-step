<?php
header("content-type:text/html;charset=utf-8");
$data = array(
    0=>array(
        "name"=>"佰草集 肌活新颜组",
        "src"=>"https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/107028/2019/0506/83/8d1ced07-912a-490d-8faf-d0e23260ba29.jpg",
        "priceA"=>"540",
        "priceB"=>"229",
    ),
    1=>array(
          "name"=>"NEO运动休闲时尚",
          "src"=>"https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2019/01/18/73/f7f8a0ec-afe9-4af4-bbfc-19ff60462f52.jpg",
          "priceA"=>"629",
          "priceB"=>"307",
    ),
    2=>array(
          "name"=>"大1匹变频冷暖壁",
          "src"=>"https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100000044/2019/0522/116/1a8abba9-fb9b-4d57-9e58-0a42c1360d5e.jpg",
          "priceA"=>"2999",
          "priceB"=>"2138",
    ),
    3=>array(
          "name"=>"蓝月亮精选薰衣草",
          "src"=>"https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcpos/1100001647/2019/0422/82/bcebf8a7-7dbd-4510-b853-8a1789ea8897.jpg",
          "priceA"=>"310",
          "priceB"=>"89",
    ),
    4=>array(
          "name"=>"贝德玛 舒妍多效卸",
          "src"=>"https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2019/04/19/190/45479821555636766200.jpg",
          "priceA"=>"518",
          "priceB"=>"159",
    ),
    5=>array(
          "name"=>"高洁丝臻选纯棉超",
          "src"=>"https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/605400/2019/0417/29/0744a39e-c630-4d4a-a3c0-bff907fa3b82.jpg",
          "priceA"=>"140",
          "priceB"=>"49",
    ) 
    );
echo json_encode($data);
?>