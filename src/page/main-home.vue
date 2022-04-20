<template>
  <div class="main-home">
    <div class="header">
      <img class="webpack-logo" src="@/assets/svg/webpack-logo.svg" alt="" />
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

<style lang="less">
@blue: #1875e6;
.main-home {
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  .header {
    background: #2b3a42;
    text-align: left;
    padding: 20px;
    & > .webpack-logo {
      height: 40px;
      margin-left: 30px;
    }
  }
  .content {
    height: calc(100vh - 170px);
  }
  .footer {
    height: 80px;
    width: 100%;
  }
}
</style>
