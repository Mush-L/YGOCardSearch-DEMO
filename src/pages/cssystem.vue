<template>
  <el-container id="CSApp" style="height: 100%">
      <el-aside class="aside">
        <navbar id="nav"></navbar>
      </el-aside>

    <el-main id="main">
      <!-- 可以写入 transition 实现进入/离开动画 -->
      <transition name="component-fade" mode="out-in">
        <router-view></router-view>
      </transition>

      <footer class="footer">
        <p>© 2021<a href="https://www.ourocg.cn/" target="_blank" class="footer">YGO CardSearch</a></p>
      </footer>
    </el-main>
  </el-container>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
};
</script>

<style>
#CSApp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#main {
  margin-left: 15%;
  position: relative;
  /* background: #ffffff; */
}
.aside {
  width: 20%;
  position: fixed;
  z-index: 100;
  overflow: hidden;
}
.footer {
  font-size: 10px;
  text-align: center;
  text-decoration: none;
  color: #000;
  clear: both;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
