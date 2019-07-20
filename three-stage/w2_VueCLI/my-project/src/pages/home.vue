<template>
    <div>
        <p>{{username}}    {{age}}</p>
        <button @click = 'ages'>涨一岁</button>
    </div>
</template>

<script>

export default{
    data(){
        return {
            username:'laoxie',
            age:16
        }
    },
    methods:{
        ages(){
            this.age = this.age + 1
        }
    }
}

</script>


<style>

</style>
