
// 引入token，并暴露出去
const token = require('./token')


// 封装方法
// obj={},ES6的默认参数，当前面没有传参过来时默认为{}
exports.formatData = (obj = {})=>{
    // 默认参数，code与后台商量得出，可以为任意数字，当code=200时表示成功，code=250时表示失败
    let {data=[],code=200,msg='success'} = obj;
    // 判断code值改变msg状态
    if(code == 250 && !obj.msg){
        msg = 'fail'
    }
    // 返回
    return {
        code,
        data,
        msg
    }
}

exports.token = token  //包括两个方法{create,verify}

// exports.formatData = ({data = [],code = 200,msg = "success"} = {})=>{
//     // // 默认参数，code与后台商量得出，可以为任意数字，当code=200时表示成功，code=250时表示失败
//     // let obj = {data = [],code = 200,msg = "success"};
//     // 判断code值改变msg状态
//     if(code = 250){
//         msg = 'fail'
//     }
//     // 返回
//     return {
//         code,
//         data,
//         msg
//     }
// }