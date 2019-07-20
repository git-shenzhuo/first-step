// 引入vue
import Vue from 'vue';

// 引入vue-router
import VueRouter from 'vue-router';

// 使用VueRouter插件
Vue.use(VueRouter);

// 引入页面组件
import Home from "../pages/Home.vue"
import Discover from '../pages/Discover.vue'
import Cart from '../pages/Cart.vue'
import Mine from '../pages/Mine.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import Goods from '../pages/Goods.vue'


import axios from 'axios'


// 实例化router并配置参数
let router = new VueRouter({
    // 路由页面信息配置。千万不要写成routers，否则错误都找不到
    routes:[{
        name:'Home',
        path: '/home',   // 当浏览器地址为#/home时，渲染Home组件
        component: Home
    },{
        name:'Discover',
        path: '/discover',
        component: Discover,
        // 嵌套路由（子路由）
        children:[{
            name:'Phone',
            path:'phone',
            component:{
                template:`<div>手机</div>`
            }
        },{
            name:'Computer',
            path:'computer',
            component:{
                template:`<div>电脑</div>`
            }
        },{
            name:'Tablet',
            path:'tablet',
            component:{
                template:`<div>平板</div>`
            }       
        },{
            name:'Acc',
            path:'acc',
            component:{
                template:`<div>配件</div>`
            }
        }]
    },{
        name:'Cart',
        path: '/cart',
        component: Cart,
        // 本组件需要权限才可以跳转，requiresAuth 可自定义名字
        meta: { requiresAuth: true }
    },{
        name:'Mine',
        path: '/mine',
        component: Mine,
        meta: { requiresAuth: true }
    },{
        name:'Login',
        path: '/login',
        component: Login
    },{
        name:'Reg',
        path: '/reg',
        component: Reg
    },{
        name:'Goods',
        path: '/goods',
        component: Goods
    }]
})

// 全局守卫
// 判断是否登录，决定跳转位置
router.beforeEach((to,from,next)=>{
    // 判断目标路由是否需要权限才可访问
    // 只要该路由下有一个需要权限，就需要满足条件
    if(to.matched.some(item=>item.meta.requiresAuth)){
        // 拿到保存在本地的信息，如果有表示已登录
        let username = localStorage.getItem('Authorization');
        axios.get('/verify')
        if(username){
            // 已登录,直接放行
            next()
        }else{
            // 未登录,跳转到登录页，并把当前页路径传递过去
            next({
                path:'/login',
                query:{
                    // 当前页的路径，以便登陆成功后跳转回来
                    redirectTo:to.fullPath
                }
            })
        }
    }else{
        // 如果不需要权限，则直接进入
        next()
    }
})



// 把router暴露出去
export default router