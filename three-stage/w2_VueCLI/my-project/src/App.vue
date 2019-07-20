<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <home></home>
    <home></home> -->
    <todolist></todolist>
  </div>
</template>

<script>
// 引入组件--------------------
// import HelloWorld from './components/HelloWorld.vue'
// import home from './pages/home.vue'
import todolist from './components/todolist/todolist.vue'




export default {
  name: 'app',
  components: {
    todolist
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
