<template>
  <div class="header-warpper">
    <div class="header-top-banner">
      <a href=""></a>
    </div>
    <div class="header-top-nav-wrap">
      <div class="header-top-nav jh-container">
        <div class="header-nav-left">
          <ul>
            <li>
              亲，请登录
              <span class="iconfont iconxiangxia2"></span>
            </li>
            <li>免费注册</li>
          </ul>
        </div>
        <div class="header-nav-right">
          <ul>
            <li>我的订单</li>
            <li>关注微信</li>
            <li>新手教程</li>
            <li>帮助中心</li>
            <li>下载客户端</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header-main">
      <div class="header-content jh-container">
        <div class="header-logo">
          <!-- logo -->
          <img src="http://placehold.it/310x110" alt="" />
        </div>
        <div class="header-search">
          <el-input
            placeholder="粘贴淘宝天猫商品标题或关键字开始购物"
            class="input-with-select"
            v-model="input1"
          >
            <template #append>
              <el-button icon="el-icon-search"></el-button>
            </template>
          </el-input>
        </div>
        <div class="header-main-banner">
          <!-- advertising  -->
          <img src="http://placehold.it/310x110" alt="" />
        </div>
      </div>
    </div>

    <div class="header-tab-content">
      <div class="header-tabs jh-container">
        <!-- <router-link to="/battle" class="header-tab-item">战旗模式</router-link> -->
        <!-- <router-link t o="/cardset" class="header-tab-item">套牌胜率</router-link> -->

        <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="首页" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="限时超返" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="卷上返" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="9块9" name="fourth">定时任务补偿</el-tab-pane>
          <el-tab-pane label="淘宝返利" name="fourth">定时任务补偿</el-tab-pane>
          <el-tab-pane label="商城返利" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs> -->
        <ul>
          <li class="active"><router-link to="/"> 首页</router-link></li>
          <li><a>限时超返</a></li>
          <li><a>卷上返</a></li>
          <li><a>9块9</a></li>
          <li><a>淘宝返利</a></li>
          <li><router-link to="/mall"> 商城返利</router-link></li>
        </ul>
      </div>
    </div>
    <div class="header-second-nav">
      <ul class="nav jh-container">
        <li class="all nav-item active">
          <a href="javascript:void(0)">全部</a>
        </li>
        <li class="nav-item"><a href="javascript:void(0)">女装</a></li>
        <li class="nav-item"><a href="javascript:void(0)">男装</a></li>
        <li class="nav-item"><a href="javascript:void(0)">内衣</a></li>
        <li class="nav-item"><a href="javascript:void(0)">数码家电</a></li>
        <li class="nav-item"><a href="javascript:void(0)">食品</a></li>
        <li class="nav-item"><a href="javascript:void(0)">美妆个护</a></li>
        <li class="nav-item"><a href="javascript:void(0)">母婴</a></li>
        <li class="nav-item"><a href="javascript:void(0)">鞋包配饰</a></li>
        <li class="nav-item"><a href="javascript:void(0)">家居家装</a></li>
        <li class="nav-item"><a href="javascript:void(0)">运动户外</a></li>
      </ul>
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
  created() {},
};
</script>

<style lang="less">
@import "./Header.less";
</style>
