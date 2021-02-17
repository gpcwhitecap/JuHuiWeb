<template>
  <div class="">
    <a href="">
      <div class="jh-card-goods">
        <img :src="img" alt="" class="jh-card-goods-img" />
        <div class="jh-card-goods-info">
          <p class="jh-card-goods-title">
            {{ title }}
          </p>

          <div class="jh-card-goods-tags">
            <span class="jh-card-goods-tag cf-goods-vouchers"
              >卷 {{ vouchers }}</span
            >
            <span class="jh-card-goods-tag cf-goods-ret-money"
              >返 {{ retMoney }}</span
            >
          </div>

          <div class="jh-card-goods-rebate">
            <div class="jh-card-rebate-money">¥{{ money }}</div>
            <div class="jh-card-rebate-sumary">
              <p class="jh-card-rebate-through">价格:{{ realMoney }}</p>
              <p class="jh-card-rebate-sales">
                <span>月销量{{ sales }}</span>
              </p>
            </div>
            <div class="cf-goods-button">抢!</div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "HotGoods",
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
</style>
