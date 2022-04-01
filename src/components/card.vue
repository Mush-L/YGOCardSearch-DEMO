<template>
  <div class="cardborder">
    <div class="cardimg">
      <img :src="csrc" style="width: 100%" />
    </div>
    <div class="cardname">
      {{ cname }}
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
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

<style>
.cardborder {
  width: 90%;
  height: 125px;
  display: block;
  border: 1px solid rgb(3, 73, 73);
  margin-bottom: 5%;
}
.cardimg {
  margin: 12%;
}
.cardname {
  font-size: 13px;
  text-align: center;
  margin-bottom: 5%;
}
.CDmoc{
  background: chocolate;
}
.CDmac{
  background: forestgreen;
}
.CDtrc{
  background: palevioletred;
}
.CDOyc{
  background: rebeccapurple;
}
.CDOtc{
  background: rgb(231, 231, 231);
}
.CDOxc{
  background: dimgrey;
}
.CDOlc{
  background: steelblue;
}
/* .CDmoc :hover{
  background: chocolate;
}
.CDmac :hover{
  background: forestgreen;
}
.CDtrc :hover{
  background: palevioletred;
}
.CDOyc :hover{
  background: rebeccapurple;
}
.CDOtc :hover{
  background: rgb(231, 231, 231);
}
.CDOxc :hover{
  background: dimgrey;
}
.CDOlc :hover{
  background: steelblue;
} */
</style>
