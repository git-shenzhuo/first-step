<?php
    $data = array(
        "username"=>$_REQUEST["username"],
        "password"=>$_REQUEST["password"],
        "phone"=>$_REQUEST["phone"],
        "email"=>$_REQUEST["email"]);

    echo json_encode($data);


?>