<template>
  <div class="hello">
    <img alt="Ygo logo" src="../assets/ygo.png">
    <h1>{{ msg }}</h1>
    <el-row>
      欢迎来到游戏王卡查系统，本系统奉行开源原则，卡片数据均来自
      <a href="https://github.com/moecube/ygopro-database" target="_blank" rel="noopener">游戏王卡牌数据库</a> 。
    </el-row>
    <h3>YGO系列客户端</h3>
    <ul>
      <li><a href="https://github.com/Fluorohydride/ygopro" target="_blank" rel="noopener">YGORro</a></li>
      <li><a href="https://www.pgyer.com/ygomobilecn" target="_blank" rel="noopener">YGOMoblie</a></li>
      <li><a href=" https://github.com/N-Field/ygopro2" target="_blank" rel="noopener">KoishiPro2 iOS</a></li>
    </ul>
    <h3>脚本扩展</h3>
    <ul>
      <li><a href="https://github.com/Fluorohydride/ygopro-core" target="_blank" rel="noopener">脚本处理引擎源码</a></li>
      <li><a href="https://github.com/Fluorohydride/ygopro-scripts" target="_blank" rel="noopener">OCG卡牌脚本实现</a></li>
      <li><a href="https://github.com/zh99998/ygopro-images" target="_blank" rel="noopener">游戏王卡图包</a></li>
      <li><a href="https://github.com/moecube/ygopro-starter-pack" target="_blank" rel="noopener">残局Demo</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
        return {
          msg: "Welcome to Yo-Gi-O Card Search"
        }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  text-align: center;
  color: #2c3e50;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
