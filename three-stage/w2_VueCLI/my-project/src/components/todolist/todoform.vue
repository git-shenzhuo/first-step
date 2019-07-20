
<template>
  <div class="input-group">
    <input type="text" class="form-control" v-model="text" ref="input">
    <div class="input-group-append">
      <input type="date" class="border" v-model="time">
      <button class="btn btn-success" type="button" @click='addhead'>添加事项</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["add"],
  data(){
    return {
      text:"",
      time:""
    }
  },
  mounted() {
    let da = new Date();
    // 推迟一周七天
    da.setDate(da.getDate()+7);
    // 获取年月日
    let y = da.getFullYear();
    let m = da.getMonth()+1;
    let d = da.getDate();

    // 补零,从后往前取两位
    m = ("0" + m).slice(-2);
    d = ("0" + d).slice(-2);
    this.time = `${y}-${m}-${d}`;
  },
  methods: {
    addhead() {
      if (this.text == "") {
        // 如果input框为空，则获取焦点，结束函数
        return this.$refs.input.focus();
      }
      this.add({
        id: Date.now(),
        title: this.text,
        done: false,
        date: this.time
      })

      // 清空输入框，获取焦点
      this.text = "";
      this.$refs.input.focus();
    }
  }
};
</script>

<style>
</style>
