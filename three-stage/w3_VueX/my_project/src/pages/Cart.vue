<template>
  <div>
    <h1>购物车</h1>
    <el-table :data="cartlist" style="width: 100%">
      <el-table-column prop="id" label="#" width="50">
      </el-table-column>
      <el-table-column prop="img" label="商品图片" width="180">
      </el-table-column>
      <el-table-column prop="name" label="商品名称" width="120">
      </el-table-column>
      <el-table-column prop="price" label="商品价格" width="100">
      </el-table-column>
      <el-table-column label="数量" width="180">
        <template slot-scope="scope">
        <el-input-number size="mini" v-model="scope.row.qty" @change="changeQty(scope.row,$event)"></el-input-number>          
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>总价：￥ {{totalPrice.toFixed(2)}}</div>
  </div>
</template>

<script>
import Vue from 'vue'
import {Table,TableColumn,InputNumber,Button} from 'element-ui'
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(InputNumber)
Vue.use(Button)



export default {
  data() {
    return {
      
    };
  },
  methods: {
    // 删除商品
    remove(row){
      this.$store.commit('remove',row.id)
    },
    // 修改数量
    changeQty(row,qty){
      this.$store.commit('changeQty',{id:row.id,qty})
    }
  },
  computed:{
    cartlist(){
      return this.$store.state.goodslist.map((item,idx)=>{
          return {
              idx:idx+1,
              ...item
          }
      })
      // return this.$store.state.goodslist
    },
    // 计算总价
    totalPrice(){
        return this.$store.state.goodslist.reduce((pre,item)=>{
            return pre + item.price*item.qty
        },0)
    }
  }
};
</script>

<style>
</style>
