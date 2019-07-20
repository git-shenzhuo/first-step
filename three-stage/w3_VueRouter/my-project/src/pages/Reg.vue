<template>
  <div>
    <h1>免费注册</h1>
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
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
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
      } else {
        //  发起请求查看是否已经注册
        this.$axios.get(`http://localhost:1904/reg/${value}`, {
            // params: {
            //   username: value
            // }
          }).then(({ data }) => {
            if (data.code == 200) {
              callback(new Error("用户名已存在!"));
            } else {
              callback();
            }
          });
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    let checkPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        checkPass: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: checkPass, trigger: "blur" }]
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
          this.$axios.post("http://localhost:1904/reg", {
              username,
              password
            }).then(({data}) => {
              if (data.code == 200) {
                // 注册成功，跳转到登录页，并且不保存注册页消息
                this.$router.replace({ name: "Login" });
              }
            });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
</style>

