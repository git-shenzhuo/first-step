import Vue from 'vue'
import App from './App.vue'

// 接收router
import router from './routers/index'

// 接收vuex
import store from './vuex'

// 把 axios 添加到 router 原型对象上
import axios from 'axios'
Vue.prototype.$axios = axios
// 配置基础路径
axios.defaults.baseURL = 'http://localhost:1904';






// // 请求拦截：发送token
// axios.interceptors.request.use(config=>{
//   // 每次利用axios发起的请求，都会进入到这里
//   // 添加token
//   let token = localStorage.getItem('Authorization');
//   if(config.url != '/login'){
//     config.headers.Authorization = token;

//   }
//   return config;
// }, error=>{
//   // 请求失败进入这个回调
//   return Promise.reject(error);
// });

// // 响应拦截：校验token
// axios.interceptors.response.use(res=>{
//   // 判断token是否校验成功
//   // 校验不成功：过期或被伪造
//   if(router.currentRoute.matched.some(item=>item.meta.requiresAuth) && res.data.code == 401){
//     router.replace({
//       path:'/login',
//       query:{
//         redirectTo:router.currentRoute.fullPath
//       }
//     })
//   }
//   return res;
// }, error=>{
//     // Do something with response error
//     return Promise.reject(error);
// });











Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  // 把router注入实例中
  router,

  // 把vuex注入实例中
  store

}).$mount('#app')

// 在任意组件中使用this.$router访问VueRouter
