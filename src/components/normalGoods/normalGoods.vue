<template>
  <div class="">
    <a href="">
      <div class="home-card-goods">
        <img :src="img" alt="" class="home-card-goods-img" />
        <div class="home-card-goods-info">
          <p class="home-card-goods-title">
            {{ title }}
          </p>

          <div class="home-card-goods-tags">
            <span class="home-card-goods-tag cf-goods-vouchers"
              >卷 {{ vouchers }}</span
            >
            <span class="home-card-goods-tag cf-goods-ret-money"
              >返 {{ retMoney }}</span
            >
          </div>

          <div class="home-card-goods-rebate">
            <div class="home-card-rebate-money">
              到手价
              <span>¥{{ money }}</span>
            </div>
            <div class="home-card-rebate-sumary">
              <span class="home-card-rebate-through">
                价格:{{ realMoney }}
              </span>
              <p class="home-card-rebate-sales">
                <span>月销量{{ sales }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "NormalGoods",
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
@import "./normalGoods.less";
</style>
