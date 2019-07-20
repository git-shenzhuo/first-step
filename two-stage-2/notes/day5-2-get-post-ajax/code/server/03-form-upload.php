<?php
    // var_dump($_REQUEST);
    sleep(3);
    
    # $_FILES 获取客户端提交的文件上传数据信息
    var_dump($_FILES);

    /*array(1) {
         ["fileName"]=> array(5) {
              ["name"]=> string(19) "Snip20190523_18.png" 
              ["type"]=> string(9)  "image/png" 
              ["tmp_name"]=> string(36) "/Applications/MAMP/tmp/php/phpcmcog7" 
              ["error"]=> int(0)
              ["size"]=> int(94319) 
            } 
        }
    */

    # 通过代码把上传到服务器的文件保存起来
    move_uploaded_file($_FILES["fileName"]["tmp_name"],"./file/123.png");  
?>