<?php
    $origin = $_SERVER["HTTP_ORIGIN"];
    $allowOrigins = array("http://127.0.0.1:8888");

    //file:///Applications/MAMP/htdocs/code/day05/13-CORS%E8%B7%A8%E5%9F%9F%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86%E8%AF%B4%E6%98%8E.html
    if(in_array($origin,$allowOrigins))
    {
        header("Access-Control-Allow-Origin:".$origin);
    }
    echo "---";
?>