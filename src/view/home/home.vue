<template>
  <div>
    <Header></Header>
    <div class="jh-home">
      <div class="jh-home-nav"></div>
      <div class="jh-home-banner">
        <el-carousel>
          <el-carousel-item v-for="item in 4" :key="item">
            <div>
              <img src="http://placehold.it/1920x340" alt="" srcset="" />
            </div>
          </el-carousel-item>
        </el-carousel>
        <img src="http://placehold.it/1920x80/000000/FFFFFF" alt="" srcset="" />
      </div>
      <div class="jh-home-content">
        <div class="jh-container">
          <div class="jh-home-panel">
            <div class="jh-home-panel-title">
              限时超返
              <div class="jh-home-panel-more">更多</div>
            </div>
            <div class="jh-home-panel-content">
              <div class="jh-home-cards">
                <div class="jh-home-card" v-for="item in 6" :key="item">
                  <SmallGoods v-bind="cf_data[0]"></SmallGoods>
                </div>
              </div>
            </div>
          </div>

          <div class="jh-white-panel">
            <div class="jh-white-panel-title">限时超返</div>
            <div class="jh-white-panel-content">
              <div class="cf-content jh-row">
                <div class="cf-goods-content" v-for="item in 8" :key="item">
                  <HotGoods v-bind="cf_data[0]"></HotGoods>
                </div>
              </div>
            </div>
          </div>

          <div class="jh-home-goods">
            <div class="home-goods-superrebate">
              <h1 class="category">
                <a href="">
                  <span class="name">女装</span
                  ><span class="desc">品牌特卖</span>
                </a>
              </h1>
              <ul>
                <li class="home-goods-content" v-for="item in 8" :key="item">
                  <NormalGoods v-bind="cf_data[0]"></NormalGoods>
                </li>
              </ul>
              <div class="goods-loading"></div>
              <div class="finish-tag">
                今天的活动就到这里啦~ 记得去看“明日预告”哦！
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../components/Header/Header.vue";
import Footer from "../../components/footer/footer.vue";
import SmallGoods from "../../components/smallGoods/smallGoods.vue";
import NormalGoods from "../../components/normalGoods/normalGoods.vue";
import HotGoods from "../../components/HotGoods/HotGoods.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    SmallGoods,
    NormalGoods,
    HotGoods,
  },
  props: {},
  data() {
    return {
      cf_data: [
        {
          img: "http://placehold.it/210x210/",
          title: "XXXXXXXXXXXXXXXXXXX",
          vouchers: "200",
          retMoney: "0.99",
          money: "500.99",
          realMoney: "30",
          sales: "9985",
        },
      ],
    };
  },
  created() {},
};
</script>
<style lang="less">
@import "./home.less";
</style>