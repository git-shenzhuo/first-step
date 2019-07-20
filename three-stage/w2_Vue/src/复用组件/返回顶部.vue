<template>
    <div :style='{display:isdisplay}' @click='scrollTo'></div>
</template>

<script>
export default {
    data() {
        return {
            // winheight:window.innerHeight,
            isdisplay:"none"
        }
    },
    // 挂载完成，监听页面滚动事件
    mounted() {
        window.addEventListener('scroll', this.scrollTop, true);
    },
    methods:{
        scrollTop(){
            // let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            let scrollTop = window.scrollY;
            // 得到屏幕高度
            let winheight = window.innerHeight;
            console.log(scrollTop);
            if(scrollTop > winheight){
                this.isdisplay = 'block' 
            }else{
                this.isdisplay = 'none'
            }
        },
        scrollTo(){
            // window.scrollTo(0,0);
            let scrollTop = window.scrollY;
            let keep = Math.floor(scrollTop / 50);
            let itme = setInterval(()=>{
                scrollTop = scrollTop - keep;
                window.scrollTo(0,scrollTop)
                if(scrollTop < 0){clearInterval(itme)}
            },10)
        },
        destroyed() {
            window.removeEventListener('scroll',this.scrollTop)
        },
    },
}
</script>

<style>
    div{
        width: 50px;
        height: 50px;
        background-color: pink;
        position: fixed;
        right: 20px;
        bottom: 20px;
    }
</style>