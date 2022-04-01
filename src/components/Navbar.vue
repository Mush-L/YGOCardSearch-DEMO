<template>
  <div class="home">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          height="100%"
        >
          <router-link to="/hello">
            <el-menu-item index="hello">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </router-link>

          <el-menu-item index="0" @click.native="logout">
            <i class="el-icon-switch-button"></i>
            <span slot="title">注销</span>
          </el-menu-item>

          <router-link to="/cardsea">
            <el-menu-item index="1">
              <i class="el-icon-search"></i>
              <span slot="title">卡查系统</span>
            </el-menu-item>
          </router-link>

          <el-menu-item index="4" disabled>
            <i class="el-icon-warning-outline"></i>
            <span>卡组详情</span>
          </el-menu-item>

          <!-- 卡组目录 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>卡组分析</span>
            </template>
            <el-menu-item-group>
              <template slot="title">这四个字</template>

              <router-link to="/deck/edit">
              <el-menu-item index="2-1" class="cd" style="min-width: 0px">
                卡组编辑
              </el-menu-item>
              </router-link>

              <router-link to="/deck/hano">
              <el-menu-item index="2-2" class="cd" style="min-width: 0px">
                卡组预设
              </el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>

          <!-- 随机卡片、更新记录 -->
          <el-submenu>
            <template slot="title">
              <i class="el-icon-loading"></i>
              <span>卡片更新</span>
            </template>
            <el-menu-item-group>
              <template slot="title">是四个字</template>
              <router-link to="/card_info">
                <el-menu-item index="1-3" class="cd" style="min-width: 0px">
                  随机卡片
                </el-menu-item>
              </router-link>
              <router-link to="/update_log">
                <el-menu-item index="1-4" class="cd" style="min-width: 0px">
                  更新记录
                </el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>

          <!-- 测试标签页 -->
          <router-link to="/testVue">
            <el-menu-item index="4" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">测试标签</span>
            </el-menu-item>
          </router-link>

          <!-- 底下有一大把无效标签 -->
          <el-menu-item index="4" disabled>
            <span slot="title"> </span>
          </el-menu-item>

          <el-menu-item index="4" disabled>
            <span slot="title"> </span>
          </el-menu-item>

          <el-menu-item index="4" disabled>
            <span slot="title"> </span>
          </el-menu-item>

          <el-menu-item index="4" disabled>
            <span slot="title"> </span>
          </el-menu-item>

          <el-menu-item index="4" disabled>
            <span slot="title"> </span>
          </el-menu-item>

          <el-menu-item index="4" disabled>
            <span slot="title"> </span>
          </el-menu-item>

          <el-menu-item index="4" disabled>
            <span slot="title"> </span>
          </el-menu-item>

          <el-menu-item index="4" disabled>
            <span slot="title"> </span>
          </el-menu-item>

          <el-menu-item index="4" disabled>
            <span slot="title"> </span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    async logout() {
      localStorage.removeItem("login");

      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.tac {
  height: 100%;
  position: relative;
}
a {
  color: white;
  text-decoration: none;
}
</style>