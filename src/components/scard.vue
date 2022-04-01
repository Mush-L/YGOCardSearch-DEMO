<template>
  <div class="scard">
    <div class="cimg">
      <img :src="csrc" style="width: 100%" />
    </div>
    <div class="cname">
      {{ cname }}
    </div>
  </div>
</template>

<script>
export default {
  name: "scard",
  props: {
    cname: String,
  },

  data() {
    return {
      csrc: require("../assets/token.png"),
    };
  },
};
</script>

<style scoped>
.card {
  width: 90%;
  height: 125px;
  display: block;
  margin-bottom: 5%;
}
.cimg {
  margin: 12%;
}
.cname {
  font-size: 50px;
  text-align: center;
  margin-bottom: 5%;
}
</style>
