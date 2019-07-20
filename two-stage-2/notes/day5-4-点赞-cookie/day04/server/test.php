<?php
    # 获取提交的参数
    $id = $_REQUEST["id"];
    $filePath = "weibo.json";

    # 读取文件的内容
    $content = fread(fopen($filePath,"r"),filesize($filePath));
    // var_dump($content);

    $data = json_decode($content,true);
    // var_dump($data);
    # 根据数据来修改文件的内容
    for($i = 0 ; $i<count($data);$i++)
    {
        // echo $data[$i]["id"];
        // echo $id;
        if($data[$i]["id"] ==  $id)
        {
            $data[$i]["good"]++;
            echo $data[$i]["good"];
        }
    }

    # 把数据更新到JSON文件中
    fwrite(fopen($filePath,"w"),json_encode($data,true));
    fclose($filePath);
?>