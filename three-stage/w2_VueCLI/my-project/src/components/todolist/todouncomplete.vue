
<template>
  <div>
    <table class="table mt-3">
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
  </div>
</template>

<script>
export default {
    props:['uncomplist','complete','del']
};
</script>