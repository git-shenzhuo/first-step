<?php
header("content-type:text/html;charset=utf-8");
move_uploaded_file($_FILES["filename"]["tmp_name"],"./file/".$_FILES["filename"]["name"]);
?>