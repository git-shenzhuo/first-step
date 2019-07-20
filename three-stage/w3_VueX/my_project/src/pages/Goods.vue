<template>
    <div>
      <img :src="info.imgurl" alt=""> 
      <p><del>￥：{{(info.price*1).toFixed(2)}}</del><span>￥：{{(info.price*0.8).toFixed(2)}}</span></p>
      <el-button type="danger" @click="add2cart">添加到购物车</el-button> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            info:{}
        }
    },
    async created() {
        // 获取传过来的id
        let {id} = this.$route.params;
        // 发起ajax请求，获取商品信息
        let {data} = await this.$axios.get('/goods/' + id)
        this.info = data.data[0]
        console.log(this.info);
        
    },
    methods:{
        add2cart(){
            // 获取购物车信息，判断是否已存在。
            let {commit,state} = this.$store
            let {goodslist} = state
            let {id} = this.info
            let current = goodslist.filter(item=>item.id==id)[0]
            if(current){
                // 如果存在，数量加一
                commit('changeQty',{id:this.info.id,qty:current.qty+1})
            }else{
                // 不存在，添加商品
                commit('add',{qty:1,...this.info})
            }
        }
    },
    computed:{

    }
}
</script>

<style scoped>

</style>
