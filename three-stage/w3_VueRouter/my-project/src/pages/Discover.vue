<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-active="active" 
      @select="handleSelect"
      >
        <el-menu-item v-for="item in cat" :key="item.name" :index="item.path" @click='goto(item)'>
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>发现</el-breadcrumb-item>
          <el-breadcrumb-item>手机</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  data() {
    return {
      cat: [
        {
          title: "手机",
          name: "Phone",
          icon: "el-icon-mobile-phone"
        },
        {
          title: "电脑",
          name: "Computer",
          icon: "el-icon-s-platform"
        },
        {
          title: "平板",
          name: "Tablet",
          icon: "el-icon-reading"
        },
        {
          title: "配件",
          name: "Acc",
          icon: "el-icon-bangzhu"
        }
      ],
      active:'/discover/phone'
    };
  },
  methods: {
    goto(item){
      this.$router.push({name:item.name})
    },
    handleSelect(index,indexPath){
      this.active = index
    }
  },
  created() {
    let baseUrl = this.$route.path;
    this.cat = this.cat.map(item=>{
      return {
        ...item,
        path:baseUrl+ '/' + item.name.toLowerCase()
      }
    })
    if (this.$route.params.category) {
      this.cat = this.$route.params.category;
    }
  }
};
</script>

<style>
</style>
