<?php
    var_dump($_FILES);
    $source = $_FILES["fileName"]["tmp_name"];
    $name   = $_FILES["fileName"]["name"];

    $target = "./file/$name";
    echo "$source--$target";
    move_uploaded_file($source,$target);

?>