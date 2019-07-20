<template>
  <div class="app">
    <el-row>
      <el-col :span="18">
        <el-menu 
        :default-active="active" 
        class="el-menu-demo" 
        mode="horizontal" 
        active-text-color='#58bc58'
        @select="handleSelect"
        router>
        <el-menu-item :index="item.path" v-for='item in pages' :key="item.name">
          <el-badge :value="len" class="item" v-if='item.name=="Cart"'>
            <el-button size="small">{{item.title}}</el-button>
          </el-badge>
          <template v-else>
            {{item.title}}
          </template>
        </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6" class="login" v-if="!logined">
        <el-link href="#" @click.native.prevent="goto('Reg')">注册</el-link>
        <el-link href="#" @click.native.prevent="goto('Login')">登录</el-link>
      </el-col>
      <el-col :span="6" class="login" v-else>
        <el-link href="#" @click.native.prevent="logout()">退出</el-link>
        
      </el-col>
    </el-row>
    
    <!-- 路由配置后，渲染到对应的router-view -->
    <router-view></router-view>
  </div>
</template>

<script>

import Vue from 'vue'
// 基于babel-plugin-component的按需加载
import {Menu,MenuItem,Row,Col,Link,Container,Aside,Header,Main,Breadcrumb,BreadcrumbItem,Form,FormItem,Input,Button,Badge} from 'element-ui'
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Link)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(BreadcrumbItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Badge)

export default {
  name: 'app',
  data() {
    return {
      pages: [
        {
          title: "首页",
          path: "/home",
          name: "Home"
        },
        {
          title: "发现",
          path: "/discover",
          name: "Discover"
        },
        {
          title: "购物车",
          path: "/cart",
          name: "Cart"
        },
        {
          title: "我的",
          path: "/mine",
          name: "Mine"
        }
      ],
      active:"/home",
      logined:false
    }
  },
  methods:{
    handleSelect(index,indexPaht){
      this.active = index
    },
    goto(name){
      this.$router.push({name})  
    },
    logout(){
      // 点击退出
      this.logined = false;
      localStorage.removeItem('Authorization')
      // this.$$router.push({name:'Login'})
    }
  },
  created() {
    // 刷新保持高亮
    // let hash = window.location.hash.slice(1)
    // this.active = hash
    this.active = window.location.hash.slice(1)

    // 进入判断是否登录
    let username = localStorage.getItem('Authorization');
    this.logined = username ? true : false;
  },
  computed: {
    len(){
      return this.$store.state.goodslist.length;
    }
  }
}
</script>

<style>
.active{
  font-weight: bold;
  color: red;
}
.login{
  text-align: right;
  line-height: 60px;
}
.login a {
  margin-right: 10px;
}
</style>
