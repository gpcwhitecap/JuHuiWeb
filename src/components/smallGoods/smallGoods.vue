<template>
  <div class="">
    <a href="">
      <div class="jh-home-card-goods">
        <div class="pic">
          <img :src="img" alt="" class="jh-home-card-goods-img" />
        </div>

        <div class="jh-home-card-goods-info">
          <p class="jh-home-card-goods-title">
            {{ title }}
          </p>

          <div class="jh-home-card-goods-tags">
            <span class="jh-home-card-goods-tag cf-goods-vouchers"
              >卷 {{ vouchers }}</span
            >
            <span class="jh-home-card-goods-tag cf-goods-ret-money"
              >返 {{ retmoney }}</span
            >
          </div>

          <div class="jh-home-card-goods-rebate">
            <div class="jh-home-card-rebate-money">
              ¥{{ money }}
              <span class="jh-home-card-sumary">{{ realMoney }}</span>
            </div>
            <!-- <div class="jh-card-rebate-sumary">
                          <p class="jh-card-rebate-through">
                            价格:{{ real_money }}
                          </p>
                          <p class="jh-card-rebate-sales">
                            <span>月销量{{ sales }}</span>
                          </p>
                        </div> -->
            <!-- <div class="cf-goods-button">
                          抢!
                        </div> -->
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "SmallGoods",
  components: {},
  props: {
    img: String,
    title: String,
    vouchers: String,
    retMoney: String,
    money: String,
    realMoney: String,
    sales: String,
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
@import "./smallGoods.less";
</style>