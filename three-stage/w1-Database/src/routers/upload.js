const express = require('express')
const Router = express.Router()

const {formatData} = require('../utils')

// 文件上传
// 下载插件multer
const multer = require('multer')
const path = require('path')

// 配置上传参数
let storage = multer.diskStorage({
    // 上传文件保存目录，无则自动创建
    destination:'./uploads/',
    // 格式化文件名
    filename: function (req, file, cb) {
        // 获取文件后缀名
        let ext = path.extname(file.originalname);

        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
})

// 设置文件保存目录
var upload = multer({storage})

Router.post('/avatar',upload.single('avatar'),async (req,res)=>{
    // 后端如何接收文件格式的数据
    // post -> req.body
    // 文件 -> multer中间件格式化到req.file
    console.log('avatar:',req.file.path)
    res.send(formatData({data:req.file.path}))
})

module.exports = Router