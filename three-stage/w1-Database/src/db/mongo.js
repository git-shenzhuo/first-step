
// 引入模块
const mongodb = require('mongodb');

// 调用方法
const mongoClient = mongodb.mongoClient();

// 引入配置文件       mongodb:url 表示 把mongodb的内容赋值给url
let {mongodb:url,dbname} = require('../config.json');

// 封装一个方法，方便下面调用
const connect = () =>{
    return new Promise((resolve,reject)=>{
        mongoClient.connect(url,(err,client)=>{
            if(err) throw err;
            
            // 如果数据库存在，则访问，否则创建
            let db = client.db(dbname);

            // 通过resolve返回
            resolve({db,client})
        })
    })
}


// 增删改查---------------------------------
// 增，插入数据库
// colName 是数据库的名字   data是要传入的数据
exports.insert = (colName,data)=>{

    // return new Promise((resolve,reject)=>{
    //     connect().then(({db,client})=>{

    //     })
    // })

// ES7新方法-----------------------------------------------
    // async 加上关键字表示异步执行    await：等待promise返回的结果；
    // await 必须放在 async 函数中
    return new Promise(async (resolve,reject)=>{
        let {db,client} = await connect();

        // 获取集合
        let col = db.collection(colName);

        // 把数据写入集合
        let res = col.insertOne(data);

        // 返回结果
        resolve(res);
        
        // 关闭释放
        client.close();

    })
}


// 删，删除数据库满足条件的数据
exports.delete = (colName,query)=>{
    return new Promise(async (resolve,reject)=>{
        let {db,client} = await connect();
        let col = db.collection(colName);
        let res = col.deleteMany(query);
        resolve(res);
        client.close();
    })
}


// 改，修改数据库满足条件的所有数据
exports.update = (colName,query,data)=>{
    return new Promise(async (resolve,reject)=>{
        let {db,client} = await connect();
        let col = db.collection(colName);
        let res = col.updataOne(query,{$set:data});
        resolve(res);
        client.close();
    })
}


// 查，查询一条或多条数据
exports.find = (colName,query,{limit,skip,sort}={})=>{
    return new Promise(async (resolve,reject)=>{
        let {db,client} = await connect();
        let col = db.collection(colName);
        let res = col.find(query);

        // 如果有传参，这进入更改
        // 跳过的数量
        if(skip){
            res = res.skip(skip)
        }
        // 限制数量
        if(limit){
            res = res.limit(limit);
        }
        // 排序
        if(sort){
            res = res.sort(sort);
        }
        // 把结果转化成数组
        res = await res.toArray();
        resolve(res);
        client.close();
    })
}