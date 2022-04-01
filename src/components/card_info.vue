<template>
  <div id="card">
    <div class="name">{{ name }}</div>

    <div class="card_pic">
      <img alt="card pic" :src="pic_src" />
    </div>
    
    <div class="card_effect">
      <input v-model="effect" hidden/>
      <input v-model="id" hidden/>
      【卡片效果】<br />
      <p v-html="effect"></p>
      <h4>卡片密码：{{ id }}</h4>
    </div>
     <el-button style="margin-top: 20px" type="primary" @click="updateCard">获取卡片</el-button>
  </div>
</template>

<script>
import cardsFile from "../assets/card_res/cards.json";

export default {
  data() {
    return {
      pic_src: require("../assets/ygo.png"),
      // 效果组，完蛋，数据溢出。
      effects: [],

      id: 9012916,
      name: "黑羽龙",
      effect: "调整＋调整以外的怪兽1只以上<br/>①：自己受到效果伤害的场合，作为代替给这张卡放置1个黑羽指示物。<br/>②：这张卡的攻击力下降这张卡的黑羽指示物数量×700。<br/>③：1回合1次，把这张卡的黑羽指示物全部取除，以对方场上1只表侧表示怪兽为对象才能发动。那只对方怪兽的攻击力下降取除的黑羽指示物数量×700，给与对方下降数值的伤害。",
    };
  },
  methods: {
    updateCard(){
      // do{
      //   this.getId();
      // }while(!this.searchCard());
      // 一共11714张卡

      // 根据数组长度获取随机数
      let num = Math.floor(Math.random() * 11715);

      // 根据随机数，获取数组相应位置的卡名、效果
      this.id = this.effects[num].id;
      this.name = this.effects[num].name;
      this.effect = this.effects[num].desc;
    },

    // 根据时间戳获取id
    // getId(){
    //   this.id = (new Date()).valueOf()%100000000;
    // },

    // 根据id获取卡名、效果
    // searchCard(){
    //   for(let i=0; i<this.effects.length; ++i){
    //     if(this.effects[i].id === this.id){
    //       this.name = this.effects[i].name;
    //       this.effect = this.effects[i].desc;
    //       return true;
    //     }
    //   return false;}
    // },

    // 初始化数组
    deToEffect() {
      this.effects = cardsFile.effect;
    },
  },
  created(){
    this.deToEffect();
    this.updateCard();
  },
};
</script>

<style scoped>
#card {
  position: relative;
}
.name {
  font-size: 60px;
  text-align: center;
}
.card_pic {
  margin: 20px 0 0;
  width: 40%;
  position: relative;
  left: -5%;
  float: left;
}
.card_effect {
  position: relative;
  margin: 40px 0 40px;
  width: 40%;
  float: right;
  color: #2c3e50;
}
</style>