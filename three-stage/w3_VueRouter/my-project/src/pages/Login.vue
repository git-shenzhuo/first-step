<template>
  <div>
    <h1>用户登录</h1>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="on"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    let validateUsername = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入用户名"));
      } else if (value.lenght < 3) {
        callback(new Error("用户名不能小于3位"));
      } else {
        callback();
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 提交时间
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 解构拿到 username 和 password
          let { username, password } = this.ruleForm;
          //  验证通过，发送请求，保存到后端
          this.$axios
            .get("http://localhost:1904/login", {
              params:{
                    username,
                    password
                }
            })
            .then(({ data }) => {
              if (data.code == 250) {
                alert("用户名或密码错误");
              } else if (data.code == 200) {
                // 保存登录信息  
                localStorage.setItem("Authorization", data.data);
                // 获取目标路径
                let targetPath = this.$route.query.redirectTo;
                this.$router.replace(targetPath ? targetPath : "/home");
              }
            });
        }
      });
    }
  }
};
</script>
<style>
</style>
