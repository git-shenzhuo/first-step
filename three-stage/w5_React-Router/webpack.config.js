
/**
    webpack配置文件
        > 是一个commonjs规范的莫文件
        * 入口: entry
        * 出口：output
        * 测试服务器：devServer
        * 加载器: loader
        * 插件：plugin
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

 module.exports = {
    // 入口
     entry:'./src/main.js',
    //  出口，打包之后所存位置
    output:{
        // 当前目录下面的dist文件夹
        path:path.join(__dirname,'dist'),
        // 文件的命名形式，bundle-main-五位hash值
        filename:'js/bundle-[name]-[hash:5].js'
    },
    //  测试服务器
     devServer:{
        contentBase:'./src',
     },
    //  后缀省略
     resolve:{
        extensions:['.js','.jsx']
     },

    //  加载器
    module:{
        rules:[
            {
                //匹配
                test:/\.jsx?$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react'],
                        plugins:[
                            ["@babel/plugin-proposal-decorators", { "legacy": true }]
                         ]
                    }
                }
            },
            // 解析css样式
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },

    // 插件
    plugins:[
        // 以某个文件作为模板生成html文件
        new HtmlWebpackPlugin({
			template:'./src/template.html',
			hash:true,
			title:'首页'
        }),

        // 每次build 把以前的清除
        new CleanWebpackPlugin()
    ]
 }
