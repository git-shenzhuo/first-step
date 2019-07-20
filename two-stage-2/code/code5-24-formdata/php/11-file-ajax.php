<?php

move_uploaded_file($_FILES["fileName"]["tmp_name"],"./file/".$_FILES["fileName"]["name"]);
print_r($_FILES);

?>