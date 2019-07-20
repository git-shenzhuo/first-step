<?php
    $date = array(
        "username"=>$_REQUEST["username"],
        "passnum"=>$_REQUEST["passnum"],
        "phonenum"=>$_REQUEST["phonenum"],
        "emailnum"=>$_REQUEST["emailnum"],
    );
    echo json_encode($date);


?>