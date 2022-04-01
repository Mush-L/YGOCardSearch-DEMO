<template>
  <div class="cardsea">
    <div class="mainSearch">
      <el-input v-model="cardName" placeholder="关键字" style="width: 50%;"></el-input>
      <!-- 查询按钮-->
      <div class="formSearch">
        <router-link to="/card_search">
          <el-button class="btLeft" @click="open1"> 高级搜索 </el-button>
        </router-link>
        <el-button class="btLeft2" type="primary" @click="onSearch">查询</el-button>
      </div>
    </div>
    <!-- https://www.ygo-sem.cn/Cards/S.aspx?q=%E5%8C%97%E6%9E%81%E5%A4%A9%E7%86%8A -->
    <div class="resultShow">
        <iframe style="overflow: hidden;  border:none; margin-top: -172px; margin-left: -180px;" 
          :src="url" 
          width="100%" height="600px"></iframe>
      </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      countUrl: "https://www.ygo-sem.cn/Cards/S.aspx?q=",
      url: "",

      cardName: "",
    };
  },
  created() {},
  methods: {
    onSearch() {
      this.url = this.countUrl+this.cardName;
      console.log("submit!");
    },

    open1() {
      this.$message({
        message: '进入高级搜索',
        type: 'success'
      });
    },
  },
};
</script>


<style scoped>
html,
body {
  height: 100%;
}
.ifTable {
  width: 50%;
  border: 0;
  align-items: center;
}
.mainSearch{
  margin: 5% 0 0 0;
  text-align:  center;
}
.formSearch {
  margin: 10px 0 0 0;
}
.resultShow {
  margin: 20px 0 0 140px;
  width: 90%;
  height: 500px;
  overflow: hidden;
}
.iframeView{
  /* width: 600px; height: 800px; */
  overflow: hidden; 
  border:none;
  margin-top: -120px;
}
.btLeft {
  margin-left: 30%;
}
.btLeft2 {
  margin-left: 5%;
}
</style>