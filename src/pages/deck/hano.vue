<template>
  <div class="hano">
    <!-- 右侧单卡 -->
    <div class="sicard">
      <!-- 隐藏框，更新单卡信息 -->
      <!-- <input v-model="sig" hidden/>
      <input v-model="sigtype" hidden/> -->
      <div :class="sigtype">
        <scard :cname="sig"></scard>
      </div>
    </div>
    <div class="decks">
      
    <!-- 主卡组 -->
    <div class="maindeck">
      <div class="deckmeta">
        <span class="title">主卡组</span>
        <span class="or">怪兽:{{ m1 }} 魔法:{{ m2 }} 陷阱:{{ m3 }}</span>
      </div>
      <el-divider content-position="right">
        <i class="el-icon-edit-outline"></i>
      </el-divider>
      <!-- 遍历卡组 -->
      <el-row>
        <el-col :span="3" v-for="card in mdeck" :key="card.cname">
          <div @click="oc(card.cname, card.type)">
            <card :cname="card.cname" :class="card.type" ></card>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 额外卡组 -->
    <div class="otherdeck">
      <div class="deckmeta">
        <span class="title">额外卡组</span>
        <span class="or">
          融合:{{ o1 }} 同调:{{ o2 }} 超量:{{ o3 }} 连接:{{ o4 }}
        </span>
      </div>
      <el-divider content-position="right">
        <i class="el-icon-edit-outline"> </i>
      </el-divider>
      <!-- 遍历卡组 -->
      <el-row>
        <el-col :span="3" v-for="card in odeck" :key="card.cname">
          <div @click="oc(card.cname, card.type)">
            <card :cname="card.cname" :class="card.type" ></card>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 副卡组 -->
    <div class="sidedeck">
      <div class="deckmeta">
        <span class="title">副卡组</span>
        <span class="or"> 怪兽:{{ s1 }} 魔法:{{ s2 }} 陷阱:{{ s3 }} </span>
      </div>
      <el-divider content-position="right">
        <i class="el-icon-edit-outline"> </i>
      </el-divider>
      <!-- 遍历卡组 -->
      <el-row>
        <el-col :span="3" v-for="card in sdeck" :key="card.cname">
          <div @click="oc(card.cname, card.type)">
            <card :cname="card.cname" :class="card.type" ></card>
          </div>
        </el-col>
      </el-row>
    </div>
    </div>

  </div>
</template>

<script>
import Card from "../../components/card.vue";
import Scard from '../../components/scard.vue';

export default {
  components: { Card, Scard },
  name: "Hano",
  props: {
    sig: {
      type: String,
      default: "卡片信息",
    },
    sigtype: {
      type: String,
      default: "",
    }
  },
  methods:{
    oc(name, type){
      this.sig = name;
      this.sigtype = type;
    }
  },
  watch:{
  },
  data() {
    return {
      m1: 20, m2: 18, m3: 2,
      o1: 8, o2: 0, o3: 3, o4: 4,
      s1: 4, 2: 6, s3: 5,

      mdeck: [
        { "cname": "坏星坏兽 席兹齐埃鲁", "type": "CDmoc" },{ "cname": "电子天龙头", "type": "CDmoc" },{ "cname": "电子龙", "type": "CDmoc" },{ "cname": "电子龙", "type": "CDmoc" },{ "cname": "电子龙", "type": "CDmoc" },
        { "cname": "银河战士", "type": "CDmoc" },{ "cname": "银河战士", "type": "CDmoc" },{ "cname": "灰流丽", "type": "CDmoc" },{ "cname": "灰流丽", "type": "CDmoc" },{ "cname": "灰流丽", "type": "CDmoc" },
        { "cname": "电子龙核", "type": "CDmoc" },{ "cname": "电子龙核", "type": "CDmoc" },{ "cname": "电子龙核", "type": "CDmoc" },{ "cname": "电子龙·次代星", "type": "CDmoc" },{ "cname": "电子龙·次代星", "type": "CDmoc" },
        { "cname": "电子龙芯", "type": "CDmoc" },{ "cname": "电子龙芯", "type": "CDmoc" },{ "cname": "电子龙芯", "type": "CDmoc" },{ "cname": "增殖的G", "type": "CDmoc" },{ "cname": "增殖的G", "type": "CDmoc" },
        { "cname": "禁忌的一滴", "type": "CDmac" },{ "cname": "禁忌的一滴", "type": "CDmac" },{ "cname": "禁忌的一滴", "type": "CDmac" },{ "cname": "墓穴的指名者", "type": "CDmac" },{ "cname": "墓穴的指名者", "type": "CDmac" },
        { "cname": "电子修理工厂", "type": "CDmac" },{ "cname": "机械复制术", "type": "CDmac" },{ "cname": "机械复制术", "type": "CDmac" },{ "cname": "机械复制术", "type": "CDmac" },{ "cname": "电子紧急呼救", "type": "CDmac" },
        { "cname": "电子紧急呼救", "type": "CDmac" },{ "cname": "电子紧急呼救", "type": "CDmac" },{ "cname": "力量结合", "type": "CDmac" },{ "cname": "三战之才", "type": "CDmac" },{ "cname": "三战之才", "type": "CDmac" },
        { "cname": "鹰身女妖的羽毛扫", "type": "CDmac" },{ "cname": "超载融合", "type": "CDmac" },{ "cname": "超载融合", "type": "CDmac" },{ "cname": "电子溢出", "type": "CDtrc" },{ "cname": "无限泡影", "type": "CDtrc" }
      ],

      odeck: [
        { "cname": "嵌合巨舰龙", "type": "CDOyc" },{ "cname": "嵌合要塞龙", "type": "CDOyc" },{ "cname": "凶饿毒融合龙", "type": "CDOyc" },{ "cname": "捕食植物 犀角龙", "type": "CDOyc" },{ "cname": "召唤兽 埃律西昂", "type": "CDOyc" },
        { "cname": "嵌合狂暴龙", "type": "CDOyc" },{ "cname": "嵌合狂暴龙", "type": "CDOyc" },{ "cname": "召唤兽 梅尔卡巴", "type": "CDOyc" },{ "cname": "电子龙·无限", "type": "CDOxc" },{ "cname": "电子龙·新星", "type": "CDOxc" },
        { "cname": "电子龙·新星", "type": "CDOxc" },{ "cname": "电子龙·凯旋", "type": "CDOlc" },{ "cname": "电子龙·凯旋", "type": "CDOlc" },{ "cname": "机壳守护神 路径灵", "type": "CDOlc" },{ "cname": "转生炎兽 独角兔", "type": "CDOlc" }
      ],

      sdeck: [
        { "cname": "原始生命态 尼比鲁", "type":"CDmoc" },{ "cname": "恐龙摔跤手·潘克拉新角龙", "type":"CDmoc" },{ "cname": "恐龙摔跤手·潘克拉新角龙", "type":"CDmoc" },{ "cname": "增殖的G", "type":"CDmoc" },{ "cname": "超融合", "type":"CDmac" },
        { "cname": "超融合", "type":"CDmac" },{ "cname": "电子修理工厂", "type":"CDmac" },{ "cname": "红色重启", "type":"CDtrc" },{ "cname": "红色重启", "type":"CDtrc" },{ "cname": "红色重启", "type":"CDtrc" },
        { "cname": "闪电风暴", "type":"CDmac" },{ "cname": "闪电风暴", "type":"CDmac" },{ "cname": "闪电风暴", "type":"CDmac" },{ "cname": "天龙雪狱", "type":"CDtrc" },{ "cname": "天龙雪狱", "type":"CDtrc" }
      ],
    };
  },
  
};
</script>

<style scoped>
.sicard{
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
</style>