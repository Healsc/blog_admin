<template>
  <div class="home">
    <div class="container">
      <el-form label-position="left" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="userName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="password" type="password"></el-input>
        </el-form-item>

        <el-form-item class="login">
          <el-button type="primary" @click="loginHandler">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
import { MessageBox } from "element-ui";
import { mapActions } from "vuex";
export default {
  name: "Home",
  components: {},

  data() {
    return {
      labelPosition: "right",
      userName: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["loginAction"]),
    // 登录的处理方法
    loginHandler() {
      axios({
        url: url.loginUser,
        method: "post",
        data: {
          userName: this.userName,
          password: this.password
        }
      })
        .then(res => {
          console.log(res)
          if (res.data.code == 202) {
            MessageBox.alert("用户名错误");
          } else if (res.data.code == 201) {
            MessageBox.alert("密码错误");
          } else if (res.data.code == 200) {
             this.loginAction(res.data.userInfo);
            setTimeout(() => {
              this.$router.push("/aboutMe");
            }, 2000);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
}
.login {
  text-align: center;
}
.home {
  z-index: 999;
  background-color: #000;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
