
<template>
    <div>
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
    </table> 
    </div>
</template>

<script>
export default {
    props:['complist','complete','del']
}
</script>