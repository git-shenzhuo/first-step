<template>
  <div>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 7" :key="item">
        <h3 class="small">{{ item }}</h3>
        <!-- <img :src="item" alt=""> -->
      </el-carousel-item>
    </el-carousel>  

    <el-row :gutter="20">
      <el-col :span="6" v-for="item in recommed" :key="item.id" @click.native="goto(item.id)">
        <img :src="item.imgurl" alt="" style="width: 100px; height: 100px">
        <h4>{{item.name}}</h4>
        <p class="price"><del>￥：{{(item.price*1).toFixed(2)}}</del><span>￥：{{(item.price*0.8).toFixed(2)}}</span></p>
      </el-col>
    </el-row>
  </div>
</template>

<script>

// 引入插件
import Vue from 'vue'
import {Carousel,CarouselItem} from 'element-ui'
Vue.use(Carousel);
Vue.use(CarouselItem)


export default {
    data() {
        return {
            recommed:[]
        }
    },
    methods: {
      // 点击跳转到详情页，并把商品id传过去
      goto(id){
        this.$router.push({name:'Goods',params:{id}})
      }
    },
    computed: {
      
    },
    async created(){
      let {data} = await this.$axios.get('/goods')
      // console.log(data);
      this.recommed = data.data.slice(0,20);
      // console.log(this.recommed);
      
    }
};
</script>

<style scoped>
    h3{
        text-align: center;
        font-size: 30px;
        color: red
    }
    h4{
      font-size: 14px;
      color: blue
    }
    .price{
      font-size:12px; 
    }
    del{
        color:#999;
    }
    span{
      margin-left:5px;color:#f00;
    }

</style>




