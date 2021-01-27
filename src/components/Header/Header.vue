<template>
  <div class="header-warpper">
    <div class="header-top-banner">
      <a href=""></a>
    </div>
    <div class="header-top-nav-wrap">
      <div class="header-top-nav jh-container">
        <div class="header-nav-left">
          <ul>
            <li>马上登陆</li>
            <li>免费注册</li>
          </ul>
        </div>
        <div class="header-nav-right">
          <ul>
            <li>我的订单</li>
            <li>新手教程</li>
            <li>帮助中心</li>
            <li>下载客户端</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header-main">
      <div class="header-content">
        <div class="header-logo">
          <i></i>
          聚惠购
          巨省钱，巨会赚
        </div>
        <div class="header-search">
          <i></i>
          聚惠购
        </div>
        <div class="header-main-banner">
          <i></i>
          聚惠购
        </div>
      </div>
    </div>

    <div class="header-tab">
      <div class="header-link">
        <!-- <router-link to="/battle" class="header-tab-item">战旗模式</router-link> -->
        <!-- <router-link t o="/cardset" class="header-tab-item">套牌胜率</router-link> -->
      </div>

      <div class="header-user">
        <!-- <Avatar :size="32" icon="user"/> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  created() {
    this.$axios({
      type: "get",
      async: false,
      url: "/money/get",
    }).then((res) => {
      console.log(res);
    });
  },
};
</script>

<style lang="less">
  @import './Header.less';
</style>
