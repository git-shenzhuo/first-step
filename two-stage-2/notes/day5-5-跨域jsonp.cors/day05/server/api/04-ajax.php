<?php

# 假如要允许很多域发起的跨域请求
    $Origins = array("http://127.0.0.1:8888","http://127.0.0.1:80","http://127.0.0.1:8080");
    $origin = $_SERVER["HTTP_ORIGIN"];
    if(in_array($origin,$Origins))
    {
        header("Access-Control-Allow-Origin: $origin");
    }

# 假如要允许所有域发起的跨域请求 header("Access-Control-Allow-Origin: *");
    echo "ok~".$_SERVER["HTTP_Origin"];
?>