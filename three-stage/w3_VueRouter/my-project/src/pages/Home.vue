<template>
  <div>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 7" :key="item">
        <h3 class="small">{{ item }}</h3>
        <!-- <img :src="item" alt=""> -->
      </el-carousel-item>
    </el-carousel>  
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
            img:['../img/g1.jpg','../img/g2.jpg','../img/t1.jpg']
        }
    },
};
</script>

<style scoped>
    h3{
        text-align: center;
        font-size: 30px;
        color: red
    }

</style>




