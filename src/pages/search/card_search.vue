<template>
  <div class="cardSearch">
    <div>
      <el-button plain @click="open1"> 高级搜索 </el-button>
    </div>
    <el-card class="box-card">
      <el-form ref="cards" :model="cards" label-width="80px">
        <el-form-item label="关键字：">
          <el-input v-model="cards.ckey"></el-input>
        </el-form-item>

        <!-- 运用 ui 布局，实现一排放两个 -->
        <el-row>
          <!-- 卡种 -->
          <el-col :span="12">
            <!-- 中文全角占位符 &#12288;  我嫌烦，没用-->
            <el-form-item label="卡　种：">
              <el-select v-model="cards.kinds" placeholder="请选择卡种">
                <el-option
                  label="全部类型"
                  value="allkind"
                  selected
                ></el-option>
                <el-option label="怪兽卡" value="mocard"></el-option>
                <el-option label="魔法卡" value="macard"></el-option>
                <el-option label="陷阱卡" value="trcard"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <!-- 限制 -->
          <el-col :span="12">
            <el-form-item label="限　制：">
              <el-select v-model="cards.forbidden" placeholder="请选择卡牌限制">
                <el-option label="全部卡片" value="allfor"></el-option>
                <el-option label="OCG独有" value="ocg"></el-option>
                <el-option label="TCG独有" value="tcg"></el-option>
                <el-option label="OT通用" value="otcd"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <!-- 星／阶 -->
          <el-col :span="12">
            <el-form-item label="星／阶：">
              <el-input
                v-model="cards.levelRank"
                placeholder="可输入区间如：1-4"
              >
              </el-input>
            </el-form-item>
          </el-col>

          <!-- 刻度 -->
          <el-col :span="12">
            <el-form-item label="刻　度：">
              <el-input v-model="cards.pRank" placeholder="可输入区间如：1-4">
              </el-input>
            </el-form-item>
          </el-col>

          <!-- 攻击力 -->
          <el-col :span="12">
            <el-form-item label="攻击力：">
              <el-input
                v-model="cards.atk"
                placeholder="可输入区间如：1500-2000"
              >
              </el-input>
            </el-form-item>
          </el-col>

          <!-- 防御力 -->
          <el-col :span="12">
            <el-form-item label="防御力：">
              <el-input
                v-model="cards.def"
                placeholder="可输入区间如：1500-2000"
              >
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- LINK 和 LINK 箭头 -->
        <el-row>
          <el-col :span="12">
            <el-form-item label="LINK值：">
              <el-input v-model="cards.link" placeholder="可输入区间如：1-3">
              </el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="连　接：">
              <div id="di3pai">
                <el-row>
                  <el-col :span="8">
                    <el-checkbox-button v-model="ck7" label="↖" border>
                    </el-checkbox-button>
                  </el-col>
                  <el-col :span="8">
                    <el-checkbox-button v-model="ck8" label="↑" border>
                    </el-checkbox-button>
                  </el-col>
                  <el-col :span="8">
                    <el-checkbox-button v-model="ck9" label="↗" border>
                    </el-checkbox-button>
                  </el-col>
                </el-row>
              </div>
              <div id="2pai" style="margin-top: 20px">
                <el-row>
                  <el-col :span="8">
                    <el-checkbox-button v-model="ck4" label="←" border>
                    </el-checkbox-button>
                  </el-col>
                  <el-col :span="8">
                    <el-checkbox-button v-model="ck5" label="○" border disabled>
                    </el-checkbox-button>
                  </el-col>
                  <el-col :span="8">
                    <el-checkbox-button v-model="ck6" label="→" border>
                    </el-checkbox-button>
                  </el-col>
                </el-row>
              </div>
              <div id="1pai" style="margin-top: 20px">
                <el-row>
                  <el-col :span="8">
                    <el-checkbox-button v-model="ck1" label="↙" border>
                    </el-checkbox-button>
                  </el-col>
                  <el-col :span="8">
                    <el-checkbox-button v-model="ck2" label="↓" border>
                    </el-checkbox-button>
                  </el-col>
                  <el-col :span="8">
                    <el-checkbox-button v-model="ck3" label="↘" border>
                    </el-checkbox-button>
                  </el-col>
                </el-row>
              </div>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- 怪兽属性 -->
        <el-form-item label="属　性：">
          <div>
            <el-checkbox-button v-model="光" border>
              <img src="https://static.ourocg.cn/images/attribute/light.png" />
              光
            </el-checkbox-button>
            <el-checkbox-button v-model="地" border>
              <img src="https://static.ourocg.cn/images/attribute/earth.png" />
              地
            </el-checkbox-button>
            <el-checkbox-button v-model="暗" border>
              <img src="https://static.ourocg.cn/images/attribute/dark.png" />
              暗
            </el-checkbox-button>
            <el-checkbox-button v-model="水" border>
              <img src="https://static.ourocg.cn/images/attribute/water.png" />
              水
            </el-checkbox-button>
            <el-checkbox-button v-model="炎" border>
              <img src="https://static.ourocg.cn/images/attribute/fire.png" />
              炎
            </el-checkbox-button>
            <el-checkbox-button v-model="风" border>
              <img src="https://static.ourocg.cn/images/attribute/wind.png" />
              风
            </el-checkbox-button>
            <el-checkbox-button v-model="神" border>
              <img src="https://static.ourocg.cn/images/attribute/divine.png" />
              神
            </el-checkbox-button>
          </div>
        </el-form-item>

        <!-- 魔法、陷阱种类 -->
        <el-form-item label="类　型：">
          <div>
            <el-checkbox-button v-model="装备" border>
              <img src="https://static.ourocg.cn/images/effect/equip.png" />
              装备
            </el-checkbox-button>
            <el-checkbox-button v-model="场地" border>
              <img src="https://static.ourocg.cn/images/effect/field.png" />
              场地
            </el-checkbox-button>
            <el-checkbox-button v-model="速攻" border>
              <img src="https://static.ourocg.cn/images/effect/quickplay.png" />
              速攻
            </el-checkbox-button>
            <el-checkbox-button v-model="仪式" border>
              <img src="https://static.ourocg.cn/images/effect/ritual.png" />
              仪式
            </el-checkbox-button>
            <el-checkbox-button v-model="永续" border>
              <img
                src="https://static.ourocg.cn/images/effect/continuous.png"
              />
              永续
            </el-checkbox-button>
            <el-checkbox-button v-model="反击" border>
              <img src="https://static.ourocg.cn/images/effect/counter.png" />
              反击
            </el-checkbox-button>
            <el-checkbox-button v-model="通常" border>
              <span style="line-height: 22px"> 通常 </span>
            </el-checkbox-button>
          </div>
        </el-form-item>

        <!-- 怪兽种族 -->
        <!-- 试了一下那啥，for 循环，不太行啊 -->
        <!-- 我错了，很行 -->
        <el-form-item label="种　族：">
          <div>
            <el-checkbox-button v-for="race in races" :v-model="race" :key="race.rn" border>{{race.rn}}</el-checkbox-button>
          </div>
        </el-form-item>

        <!-- 其他怪兽字段/关键词 -->
        <el-form-item label="其　他：">
          <div>
            <el-checkbox-button v-for="ot in otms" :v-model="ot" :key="ot.os" border>{{ot.os}}</el-checkbox-button>
          </div>
        </el-form-item>

        <!-- 卡片排序 -->
        <el-form-item label="排　序：">
          <el-select v-model="cards.atz" placeholder="请选择顺序">
            <el-option label="默认顺序" value="moren" selected></el-option>
            <el-option label="从新到旧" value="xinTjiu"></el-option>
            <el-option label="星级从高到低" value="lgTd"></el-option>
            <el-option label="星级从低到高" value="ldTg"></el-option>
            <el-option label="攻击力从大到小" value="atkdTx"></el-option>
            <el-option label="攻击力从小到大" value="atkxTd"></el-option>
            <el-option label="防御力从大到小" value="defdTx"></el-option>
            <el-option label="防御力从小到大" value="defxTd"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSearch">搜索</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: {
        ckey: "",
        kinds: "",
        forbidden: "",
        levelRank: "",
        pRank: "",
        atk: "",
        def: "",
        link: "",
        links: "",
      },

      races:[
        {rn: "水"},{rn: "兽"},{rn: "兽战士"},{rn: "创造神"},{rn: "恐龙"},
        {rn: "幻神兽"},{rn: "龙"},{rn: "天使"},{rn: "恶魔"},{rn: "鱼"},
        {rn: "昆虫"},{rn: "机械"},{rn: "植物"},{rn: "念动力"},{rn: "炎"},
        {rn: "爬虫类"},{rn: "岩石"},{rn: "海龙"},{rn: "魔法师"},{rn: "雷"},
        {rn: "战士"},{rn: "鸟兽"},{rn: "不死"},{rn: "幻龙"},{rn: "电子界"},
      ],

      otms:[
        {os: "通常"},{os: "效果"},{os: "仪式"},{os: "融合"},{os: "同调"},
        {os: "XYZ"},{os: "灵摆"},{os: "连接"},{os: "卡通"},{os: "同盟"},
        {os: "灵魂"},{os: "调整"},{os: "二重"},{os: "反转"},{os: "特招"},
      ]
    };
  },
  created() {
  },
  methods: {
    onSearch() {
      this.$confirm('网站正在搭建，还有很多功能不完善。可以赞助加速网站搭建哦！', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        });
    },
    open1() {
        const h = this.$createElement;
        this.$notify({
          title: '卡查提示',
          message: h('i', { style: 'color: teal'}, '欢迎使用游戏王卡查系统，选择需要的词条进行搜索吧！')
        });
      },
  },
};
</script>


<style src="../../assets/css/cardse.css" scoped>
html,
body {
  height: 100%;
}
</style>