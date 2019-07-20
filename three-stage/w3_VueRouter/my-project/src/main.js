import Vue from 'vue'
import App from './App.vue'

// 接收router
import router from './routers/index'

// 把 axios 添加到 router 原型对象上
import axios from 'axios'
Vue.prototype.$axios = axios
// 配置基础路径
// axios.defaults.baseURL = 'http://localhost:1904';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  // 把router注入实例中
  router

}).$mount('#app')

// 在任意组件中使用this.$router访问VueRouter
