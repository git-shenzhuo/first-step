<?php
header("content-type:text/html;charset=utf-8");
// 读取单独的json文件
$content = fread(fopen("weibo.json","r"),filesize("weibo.json"));
// json转换
$data = json_decode($content,true);
// 获取html页面传过来的id
$id = $_REQUEST["id"];
// 根据数据来修改文件
for($i = 0;$i < count($data);$i++){
    if($data[$i]["id"] == $id){
        $data[$i]["down"]++;
        echo $data[$i]["down"];
    }
}
// 把数据更新到json中
fwrite(fopen("weibo.json","w"),json_encode($data,true));
// 关闭json数据库
// fclose(fopen("weibo.json","w"));
fclose("weibo.json");



?>