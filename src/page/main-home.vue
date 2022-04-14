<template>
  <div class="main-home">
    <div class="header">
      main Home麻了111--{{ title }}
      <img src="@/assets/img/avatar.png" alt="" />
    </div>
    <div class="content"></div>
    <div class="footer">
      <img src="@/assets/svg/alipay.svg" alt="" />
      <i class="iconfont icon-push"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "测试",
    };
  },
  methods: {},
};
</script>

<style lang="scss">
$blue: #1875e6;
.main-home {
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/img/background.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  .header {
    color: $blue;
    font-size: 20px;
    > img {
      width: 40px;
      height: 40px;
      float: right;
    }
  }
  .content {
    height: calc(100vh - 100px);
  }
  .footer {
    height: 60px;
    width: 100%;
  }
}
</style>
