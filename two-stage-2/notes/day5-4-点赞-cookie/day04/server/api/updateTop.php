<?php

var_dump($_COOKIE);

 # 01-获取前端页面传递进来的参数 id
 $id = $_REQUEST["id"];

 # 02-根据参数来更新后端的数据weibo.json
 # 02-1 file_get_contents
 $filePath = "../weibo.json";
 
 # 02-2 fopen 方法以只读模式打开文件
 $content = fread(fopen($filePath,"r"),filesize($filePath));

 # 02-3 把读取的json数据转换为PHP字典
 $data = json_decode( $content,true);

 # 02-4 遍历字典，找到指定id对应的数据
 for($i = 0 ; $i < count($data);$i++)
 {
     if($id == $data[$i]["id"])
     {
         //var_dump($data[$i]);
         # 02-5 修改当前数据中的top点赞数量
         $data[$i]["top"]++;

          # 03-把对应数据中最新的点赞数量返回
          echo $data[$i]["top"];
     }
 }

 #4 把最新的数据更新到json文件
 fwrite(fopen($filePath,"w"),json_encode($data,true));
 
 #5 关闭文件
 fclose($filePath);

?>