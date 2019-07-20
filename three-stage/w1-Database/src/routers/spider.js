

// 引入模块
const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');

const formatData = require('../utils');
const {mysql:query} = require('../db');

// 调用方法
const Router = express.Router();

// 开始爬虫---------------------------------------
Router.post('/',(req,res)=>{
    // 通过爬虫获取数据
    request('http://m.maoyan.com/shows/106?$from=canary#',(err,response,body)=>{


        // 赋值，为了后面方便调用,解析爬到的数据
        const $ = cheerio.load(body);
        // 用一个空数组存爬下来的数据
        let goodslist = [];
        $('.commodity-list dl').each((idx,ele)=>{
            let $ele = $(ele);
            let name = $ele.find('.dl_name a').text();
            let price = $ele.find('.dl_price span').text().slice(1);
            let imgurl = $ele.find('dt a img').attr('src');
            goodslist.push({
                name,
                price,
                imgurl
            })
        })
        // res.send(goodslist[0]);

        // 添加到数据库
        // 遍历goodslist
        for(let n = 0;n < goodslist.length;n++){
            // let idx = Date.now();
            let names = '',values = '';
            for(let key in goodslist[n]){
                names += key + ',';
                values += `'${goodslist[n][key]}',`
            }
            // 除去最后一个逗号
            names = names.slice(0,-1);
            values = values.slice(0,-1);
            // console.log( 123,names,values);
            
            let sql = `insert into skgoods(${names}) values(${values})`;

            query(sql).then(data=>{
                res.send("200")
            }).catch(err=>{
                res.send(err)
            })
        }
    })
})




// 暴露
module.exports = Router;