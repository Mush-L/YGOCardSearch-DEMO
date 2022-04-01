<template>
  <div class="login">
    <div class="login-container">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        autocomplete="on"
        label-position="left"
      >
        <div class="title-container">
          <h3 class="title">登 录</h3>
        </div>

        <div class="ce">
          <el-form-item placeholder="登录账号" prop="username">
            <el-input
              ref="username"
              class="form-c"
              v-model="loginForm.username"
              placeholder="Username"
              name="username"
              type="text"
              tabindex="1"
              autocomplete="on" />
          </el-form-item>

          <el-tooltip
            v-model="capsTooltip"
            content="Caps lock is On"
            placement="right"
            manual>
            <el-form-item prop="password">
              <el-input
                :key="passwordType"
                ref="password"
                class="form-c"
                v-model="loginForm.password"
                :type="passwordType"
                placeholder="Password"
                name="password"
                tabindex="2"
                autocomplete="on"
                @keyup.native="checkCapslock"
                @blur="capsTooltip = false"
                @keyup.enter.native="handleLogin"/>
            </el-form-item>
          </el-tooltip>

          <el-button
            type="primary"
            style="margin-bottom: 30px"
            @click.native.prevent="handleLogin"
            >登录</el-button
          >
        </div>

        <div style="position: relative">
          <div class="tips">
            <span>用户名 : admin</span><br />
            <span>密码 : 自己猜</span>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";

export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码不能少于六位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "admin",
        password: "admin6",
        lockpsw: "admin6",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
      },
      passwordType: "password",
      capsTooltip: false,
    };
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.username === "") {
      this.$refs.username.focus();
    } else if (this.loginForm.password === "") {
      this.$refs.password.focus();
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock(e) {
      const { key } = e;
      this.capsTooltip = key && key.length === 1 && key >= "A" && key <= "Z";
    },

    handleLogin() {
      if(this.loginForm.username==="admin"){
        if(this.loginForm.password===this.loginForm.lockpsw){
            // 用户名和密码正确，设置 localstorage，路由走
            localStorage.setItem("login", "Local");
            this.$router.push({ path: "/hello" });
        }else{
          this.$message('用户名或密码错误！');
        }
      }else{
        this.$message('用户名不符合格式！');
      }
    },
    // getOtherQuery(query) {
    //   return Object.keys(query).reduce((acc, cur) => {
    //     if (cur !== "redirect") {
    //       acc[cur] = query[cur];
    //     }
    //     return acc;
    //   }, {});
    // },
  },
};
</script>

<style scoped>
.login {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: #ff0066;
  background-image: linear-gradient(
    135deg,
    #ff0066 0%,
    #283443 33%,
    #a03333 66%,
    #283443 100%
  );
}
.ce {
  text-align: center;
}
.form-c {
  width: 70%;
}
.login-container {
  width: 40%;
  height: 40%;
  margin: 10% 0 0 30%;
  border: 1px solid white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.title-container {
  position: relative;
}
.title {
  font-size: 48px;
  color: white;
  margin: 10px auto 40px auto;
  text-align: center;
}
.tips {
  font-size: 14px;
  color: lightgray;
  margin-top: 20px;
}
.login-container.el-input {
  display: inline-block;
  height: 47px;
  width: 85%;
}
.login-container.input {
  background: transparent;
  border: 0px;
  -webkit-appearance: none;
  border-radius: 0px;
  padding: 12px 5px 12px 15px;
  color: light_gray;
  height: 47px;
}
</style>