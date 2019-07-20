// 校验token
// 引入插件jsonwebtoken，引入config配置的校验方法
const jwt = require('jsonwebtoken')
const {pKey} = require('../config.json')

// 生成token（加密）
exports.create = (data,expiresIn=60*60*2)=>{
    // data：加密的数据
    // expiresIn：token有效时间，单位--s
    // sign是jwt的方法
    let token = jwt.sign({data},pKey,{expiresIn})
    // data：加密的数据
    // pKey：自定义加密方式
    return token
}

// 校验token（解密）
exports.verify = (token)=>{
    let res = false;
    try {
        // 校验通过，res变true
       jwt.verify(token,pKey);
        res = true
    } catch (error) {
        // 校验不通过就返回false
        res = false
    }
    return res
}
