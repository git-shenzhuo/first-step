
 
<template>
  <!-- 分成form和content ------------------------------------------------------------>
  <div>
      <todofrom :add='add'></todofrom>
      <!--  -->
      <todocontent :todolist='todolist' :complete='complete' :del='del'></todocontent>
  </div>
</template>

<script>
// 引入bootstrap
import 'bootstrap/dist/css/bootstrap.css'

// 引入form和content模块
import todofrom from './todoform.vue'
import todocontent from './todocontent.vue'

export default {
  data() {
    return {
      todolist: [
        {
          id: 1,
          title: "起床记得吃饭",
          done: true,
          date: "2019-07-23"
        },
        {
          id: 2,
          title: "吃完饭就去上课",
          done: false,
          date: "2019-04-23"
        }
      ]
    }
  },
  components:{
      todofrom,
      todocontent
  },
  methods: {
    add(data) {
      this.todolist.unshift(data);
    },
    complete(id) {
      for (let i = 0; i < this.todolist.length; i++) {
        if (this.todolist[i].id == id) {
          this.todolist[i].done = !this.todolist[i].done;
        }
      }
    },
    del(id){ 
      for (let i = 0; i < this.todolist.length; i++) {
        if (this.todolist[i].id == id) {
          this.todolist.splice(i, 1);
          break;
        }
      }
    }
  },
 };
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.container-fluid {
  width: 700px;
  height: 300px;
  overflow: auto;
}
h3 {
  text-align: center;
}
#box {
  width: 100%;
}
li {
  display: flex;
  height: 30px;
  margin-top: 5px;
  /* padding-top: 5px; */
  border-top: 1px solid red;
  text-align: center;
  line-height: 30px;
  justify-content: space-around;
}
li p {
  width: 400px;
}
</style>