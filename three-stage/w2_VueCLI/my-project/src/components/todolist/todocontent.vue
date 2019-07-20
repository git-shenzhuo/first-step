
<template>
    <div class="todo-content">
    <!-- <table class="table mt-3">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">待办事项</th>
          <th scope="col">预期时间</th>
          <th scope="col">是否完成</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,idx) in uncomplist" :key="idx">
          <th scope="row">{{idx+1}}</th>
          <td>{{item.title}}</td>
          <td>{{item.date}}</td>
          <td>{{item.done?'是':'否'}}</td>
          <td>
            <div class="btn-group btn-group-sm">
              <button class="btn btn-outline-primary" @click="complete(item.id)">完成</button>
              <button class="btn btn-outline-danger" @click="del(item.id)">删除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table mt-3">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">完成事项</th>
          <th scope="col">完成时间</th>
          <th scope="col">是否完成</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,idx) in complist" :key="idx">
          <th scope="row">{{idx+1}}</th>
          <td>{{item.title}}</td>
          <td>{{item.date}}</td>
          <td>{{item.done?'是':'否'}}</td>
          <td>
            <div class="btn-group btn-group-sm">
              <button class="btn btn-outline-primary">查看</button>
              <button class="btn btn-outline-danger" @click="del(item.id)">删除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table> -->




    <!-- 把tabel自定义为组件 ==============================-->
    <!-- <todouncomplete :uncomplist='uncomplist' :complete='complete' :del='del'></todouncomplete>
    <todocomplete :complist='complist' :complete='complete' :del='del'></todocomplete> -->

    <!-- 使用一个组件，使具有复用性 =============================-->
    <tododatalist :list='uncomplist' :complete='complete' :del='del'></tododatalist>
    <tododatalist :list='complist' :complete='complete' :del='del'></tododatalist>

    <div class="status">总共：{{todolist.length}}，待办：{{uncomplist.length}}，完成:{{complist.length}}</div>
  </div>
</template>

<script>

// 引入组件
import todocomplete from './todocomplete.vue'
import todouncomplete from './todouncomplete.vue'
import tododatalist from './todoDatalist.vue'



export default {
    // props 接收父元素传过来的数据
    props:['todolist','complete','del'],
    // 计算拿过来
    computed: {
        complist(){
            return this.todolist.filter(item=>item.done)
        },
        uncomplist(){
            return this.todolist.filter(item=>!item.done)
        }
    },
    components:{
      todocomplete,
      todouncomplete,
      tododatalist
    }
}
</script>

<style>

</style>
