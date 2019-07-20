 
// 需要安装的模块有 ----------- express    request    cheerio    
// 引入爬虫所需模块
const request = require('request');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');


// 引入express模块
const express = require('express');

// 调用方法
const Router = express.Router();

// 开始爬虫--------------------------------------------------------------------
Router.get('/',(req,res)=>{
    // 通过路径爬取数据
    request('http://list.jiuxian.com/1-2-0-0-0-0-0-0-0-0-0-0.htm?area=6#v2',(err,response,body)=>{

        // 赋值
        const $ = cheerio.load(body);
        // 用一个空数组接收获取的数据
        let goodslist = [];
        
        $('.proListSearch li').each((idx,ele)=>{
            let $ele = $(ele);

            // 获取数据
            let name = $ele.find('.proName a').text();
            let price = $ele.find('.price span').text();
            let imgurl = $ele.find('.img img').attr('src');


            // 获取图片名
            let fillname = path.basename(imgurl);


            // 添加数据到数组
            goodslist.push({
                name,
                price,
                imgurl
            })

            // 下载图片到uploads/img
            request(imgurl).pipe(fs.createWriteStream(`uploads/img/${fillname}`));
 
        })

        // 返回数据
        res.send(goodslist);
    })
})








// 暴露
module.exports = Router;