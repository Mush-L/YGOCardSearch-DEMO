<template>
  <div class="edit">
    <!-- 右侧单卡 -->
    <div class="sicard">
      <!-- 隐藏框，更新单卡信息。非必要内容。 -->
      <!-- <input v-model="sig" hidden />
      <input v-model="sigtype" hidden /> -->
      <!-- 存放单卡 -->
      <div :class="sigtype">
        <scard :cname="sig"></scard>
      </div>
      <!-- 添加卡片 -->
      <el-form :inline="true" :model="cardSetIn" class="demo-form-inline">
        <!-- 输入卡名 -->
        <el-form-item label="卡名">
          <el-input
            v-model="cardSetIn.cardName"
            placeholder="例如: [冲浪检察官]"
          ></el-input>
        </el-form-item>
        <!-- 卡片类型 -->
        <el-form-item label="类型">
          <el-cascader
            v-model="cardSetIn.cardType"
            :options="cardSetIn.cardOp"
            :props="{ expandTrigger: 'hover' }"
          ></el-cascader>
        </el-form-item>
        <!-- 按钮：添加卡片 -->
        <el-form-item>
          <el-button type="primary" @click="setInCard">添加卡片</el-button>
        </el-form-item>
      </el-form>
      <div class="saveDeck">
        <!-- 保存卡组 -->
        <el-button type="primary" @click="saveFile">保存卡组</el-button>
        <el-button type="primary" @click="saveToLocal">保存为文件</el-button>
      </div>
    </div>

    <!-- 以下是卡组演示部分 -->
    <div class="decks">
      <!-- 主卡组 -->
      <div class="maindeck">
        <div class="deckmeta">
          <span class="title">主卡组</span>
          <span class="or">怪兽:{{ mainCount[0] }} 魔法:{{ mainCount[1] }} 陷阱:{{ mainCount[2] }}</span>
        </div>
        <el-divider content-position="right">
          <i class="el-icon-edit-outline"></i>
        </el-divider>
        <!-- 遍历主卡组 -->
        <el-row>
          <el-col :span="3" v-for="card in mdeck" :key="card.cname">
            <div
            @click="clickToChange(card.cname, card.type)" 
            @contextmenu.prevent="(e)=>{
                    x_index = e.screenX;
                    y_index = e.screenY;
                    cIndex = card.index;
                    cType = card.type;
                    wctp = 'mdeck';
                    showMenu = true;
                }">
              <card :cname="card.cname"  :class="card.type" ></card>
            </div>
          </el-col>
        </el-row>
        <!--右键的打开的-->
        <right-menu :x="x_index"
          :y="y_index" 
          :showMenu="showMenu"
          @close="closeMenu"
          @open="openDetail"
          @del="delCard"
          @update="updateCard">
        </right-menu>
      </div>
      <!-- 额外卡组 -->
      <div class="otherdeck">
        <div class="deckmeta">
          <span class="title">额外卡组</span>
          <span class="or">
            融合:{{ otherCount[0] }} 同调:{{ otherCount[1] }} 超量:{{ otherCount[2] }} 连接:{{ otherCount[3] }}
          </span>
        </div>
        <el-divider content-position="right">
          <i class="el-icon-edit-outline"> </i>
        </el-divider>
        <!-- 遍历额外卡组 -->
        <el-row>
          <el-col :span="3" v-for="card in odeck" :key="card.cname">
            <div
            @click="clickToChange(card.cname, card.type)" 
            @contextmenu.prevent="(e)=>{
                    x_index = e.screenX;
                    y_index = e.screenY;
                    cIndex = card.index;
                    cType = card.type;
                    wctp = 'odeck';
                    showMenu = true;
                }">
              <card :cname="card.cname"  :class="card.type" ></card>
            </div>
          </el-col>
        </el-row>
        <!--右键的打开的菜单-->
        <right-menu :x="x_index"
          :y="y_index" 
          :showMenu="showMenu"
          @close="closeMenu"
          @open="openDetail"
          @del="delCard"
          @update="updateCard">
        </right-menu>
      </div>
      <!-- 副卡组 -->
      <div class="sidedeck">
        <div class="deckmeta">
          <span class="title">副卡组</span>
          <span class="or"> 怪兽:{{ sideCount[0] }} 魔法:{{ sideCount[1] }} 陷阱:{{ sideCount[2] }} </span>
        </div>
        <el-divider content-position="right">
          <i class="el-icon-edit-outline"> </i>
        </el-divider>
        <!-- 遍历副卡组 -->
        <el-row>
          <el-col :span="3" v-for="card in sdeck" :key="card.cname">
            <div 
            @click="clickToChange(card.cname, card.type)" 
            @contextmenu.prevent="(e)=>{
                    x_index = e.screenX;
                    y_index = e.screenY;
                    cIndex = card.index;
                    cType = card.type;
                    wctp = 'sdeck';
                    showMenu = true;
                }">
              <card :cname="card.cname" :class="card.type" ></card>
            </div>
          </el-col>
        </el-row>
        <!--右键的打开的菜单-->
        <right-menu :x="x_index"
          :y="y_index" 
          :showMenu="showMenu"
          @close="closeMenu"
          @open="openDetail"
          @del="delCard"
          @update="updateCard">
        </right-menu>
      </div>
    </div>
    <!-- 卡组展示结束 -->
  </div>
</template>

<script>
import Card from "../../components/card.vue";
import Scard from "../../components/scard.vue";
// 放弃使用 Axios，直接引入 json 算了，md
import deckFile from "../../assets/card_res/deck.json";
import FileSaver from "file-saver";
import rightMenu from '../../components/rightmenu.vue';

export default {
  components: { Card, Scard, rightMenu },
  name: "Edit",

  props: {
    sig: {
      type: String,
      default: "点击卡片获取信息",
    },
    sigtype: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      // 三个卡组的数据
      mainCount: [20, 18, 2],
      otherCount: [8, 0, 3, 4],
      sideCount: [4, 6, 5],
      // 存放三种的卡组
      mdeck: [],
      odeck: [],
      sdeck: [],
      // 理论上是卡组整合成的 Json
      cardArr: {},
      // 表单同步的信息，用于添加卡片
      cardSetIn: {
        cardName: "",
        cardType: [],
        cardOp: [
          {
            value: "maind",
            label: "主卡组",
            children: [{ value: "CDmoc", label: "怪兽卡" }, { value: "CDmac", label: "魔法卡" },{ value: "CDtrc", label: "陷阱卡" }]
          },
          {
            value: "otherd",
            label: "额外卡组",
            children: [ { value: "CDOyc", label: "融合怪兽" }, { value: "CDOtc", label: "同调怪兽" }, { value: "CDOxc", label: "超量怪兽" }, { value: "CDOlc", label: "连接怪兽" }],
          },
          {
            value: "sided",
            label: "副卡组",
            children: [{ value: "CDmoc", label: "怪兽卡" }, { value: "CDmac", label: "魔法卡" },{ value: "CDtrc", label: "陷阱卡" }]
          },
        ],
      },
      // 右击事件需要的信息
      x_index: 0,
      y_index: 0,
      // 卡片 index 和类型，插入删除时候有用。
      cIndex: 0,
      cType: 0,
      // 传入哪种卡组，做判断
      wctp: "",
      showMenu: false,
    };
  },

  methods: {
    // 点击卡片事件，设置 sig 信息
    clickToChange(name, type) {
      this.sig = name;
      this.sigtype = type;
    },

    // 提交表单，新增卡片
    setInCard() {
      // 验证卡名是否为空
      if(this.cardSetIn.cardName===""){
        this.$alert('卡名不可为空', { confirmButtonText: '确定'});
        return false;
      }
      // 设置传入的卡片类型 cType，方便计数增加
      this.cType = this.cardSetIn.cardType[1];
      this.typeToNum();
      // 根据不同的 type 加入不同的数组
      if(this.cardSetIn.cardType[0]==="maind"){
        // 验证卡组是否上限
        if(!this.checkDeckCount(this.mdeck,60)) return false;
        // 调用增加数组的函数
        this.addMdeck(this.findDeckIndex(this.mdeck)+1, this.cardSetIn.cardName, this.cardSetIn.cardType[1]);
      }else if(this.cardSetIn.cardType[0]==="otherd"){
        if(!this.checkDeckCount(this.odeck, 15)) return false;
        this.addOdeck(this.findDeckIndex(this.odeck)+1, this.cardSetIn.cardName, this.cardSetIn.cardType[1]);
      }else if(this.cardSetIn.cardType[0]==="sided"){
        if(!this.checkDeckCount(this.sdeck, 15)) return false;
        this.addSdeck(this.findDeckIndex(this.sdeck)+1, this.cardSetIn.cardName, this.cardSetIn.cardType[1]);
      }else{
        this.$alert('类型不可为空', { confirmButtonText: '确定'});
        return false;
      }
      this.$message({
        message: '卡片加入成功！',
        type: 'success'
      });
    },

    // 右键菜单事件
    //关闭回调  
    closeMenu(state){
      console.log('关闭')
      this.showMenu = state;
    },
     //打开详情回调            
    openDetail(){
      console.log('编辑')
    },
    //删除回调          
    delCard(){
      // 先把类型换成数字
      this.typeToNum();
      if(this.wctp==="mdeck"){
        this.delMdeck(this.cIndex);
      }
      if(this.wctp==="odeck"){
        this.delOdeck(this.cIndex);
      }
      if(this.wctp==="sdeck"){
        this.delSdeck(this.cIndex);
      }
      this.$message({
        message: '卡片删除成功！',
        type: 'success'
      });
    },
    //编辑回调          
    updateCard(){
      console.log('编辑')
    },

    // 获取 json 方法
    // getDecksList () {
    //   let cur="/card_res/deck.json";
    //   this.axios.get("../../assets"+cur).then((res) => {
    //     deckRes = res;
    //   });

    //   console.log(deckRes);
    // },

    // 卡组导入 json 方法，就赋值
    deToDeck() {
      this.mdeck = deckFile.mdeck;
      this.odeck = deckFile.odeck;
      this.sdeck = deckFile.sdeck;
    },

    //  查找数组最后一位的 index 值
    findDeckIndex(deck){
      // 如果憨批删完了，数组长度为0
      if(deck.length===0){
        return 0;
      }
      return deck[deck.length-1].index;
    },
    // 找到type对应的值
    typeToNum(){
      if(this.cType==="CDmoc") this.cType = 0;
      if(this.cType==="CDmac") this.cType = 1;
      if(this.cType==="CDtrc") this.cType = 2;
      if(this.cType==="CDOyc") this.cType = 0;
      if(this.cType==="CDOtc") this.cType = 1;
      if(this.cType==="CDOxc") this.cType = 2;
      if(this.cType==="CDOlc") this.cType = 3;
    },

    // 将卡片信息写入数组
    addMdeck(index, cname, type) {
      // push 数组，加入卡片
      this.mdeck.push({ "index": index, "cname": cname, "type": type });
      // 调整计数
      this.mainCount[this.cType] += 1;
    },
    // 额外卡组，内容同上
    addOdeck(index, cname, type) {
      this.odeck.push({ "index": index, "cname": cname, "type": type });
      this.otherCount[this.cType] += 1;
    },
    // 副卡组，内容同上
    addSdeck(index, cname, type) {
      this.sdeck.push({ "index": index, "cname": cname, "type": type });
      this.sideCount[this.cType] += 1;
    },
    // 将卡片信息从数组删除数组
    delMdeck(index) {
      this.delItem(index, this.mdeck)
      this.mainCount[this.cType] -= 1;
    },
    delOdeck(index) {
      this.delItem(index, this.odeck)
      this.otherCount[this.cType] -= 1;
    },
    delSdeck(index) {
      this.delItem(index, this.sdeck)
      this.sideCount[this.cType] -= 1;
    },
    // 删除数组指定值
    delItem(key, list){
      for (var i=0; i<list.length; ++i) {
        if (list[i].index === key) {
          list.splice(i, 1)
        }
      }
    },
    // 卡组数量验证
    checkDeckCount(whichdeck, num){
      if(whichdeck.length>=num){
          this.$alert('该卡组不可超过'+num+'张', { confirmButtonText: '确定'});
          return false;
        }
        return true;
    },

    // 保存 web 的本地
    saveFile() {
      // 先设置一下 cardArr，组装一下
      this.cardArr.mdeck = this.mdeck;
      this.cardArr.odeck = this.odeck;
      this.cardArr.sdeck = this.sdeck;
      // 将其写入本地储存（网页的本地储存），以 json 的形式
      const data = JSON.stringify(this.cardArr);
      window.localStorage.setItem("deckJson", data);
      // 打印至控制台，放心，你看不到的，全是报错
      // console.log(JSON.parse(window.localStorage.getItem('arr')))
      this.$message({
        message: '卡组保存成功！',
        type: 'success'
      });
    },
    // 保存至本地 json
    saveToLocal() {
      this.saveFile();
      // 通过浏览器下载保留 json
      // const data = JSON.stringify(this.cardArr)
      const data = JSON.stringify(this.cardArr);
      const blob = new Blob([data], { type: "" });
      FileSaver.saveAs(blob, "deck.ydk");
      console.log("666");
    },
  },
  created() {
    // this.getDecksList()
    this.deToDeck();
    // this.saveFile();
  },
  mounted() {
  },
};
</script>

<style scoped>
.sicard {
  width: 30%;
  margin: 0 0 0 10%;
  position: fixed;
  left: 60%;
}
.decks {
  width: 60%;
}
.or {
  font-weight: lighter;
  font-size: 14px;
  float: right;
  padding-top: 20px;
}
.saveDeck{
  width: 100%;
  text-align: center;
}
</style>