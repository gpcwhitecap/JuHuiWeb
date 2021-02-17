<template>
  <div class="jh-footer">
    <div class="jh-footer-main jh-container">
      <div class="jh-footer-list">
        <dl class="jh-footer-item">
          <dt>关于我们</dt>

          <dd>
            <a>关于聚惠购</a>
          </dd>

          <dd>
            <a>关注微信</a>
          </dd>

          <dd>
            <a>用户协议</a>
          </dd>

          <dd>
            <a>隐私协议</a>
          </dd>
        </dl>

        <dl class="jh-footer-item dib">
          <dt>帮助中心</dt>

          <dd>
            <a>新手指南</a>
          </dd>

          <dd>
            <a>关于返利</a>
          </dd>
        </dl>

        <dl class="jh-footer-item dib qr-footer">
          <dt>客户端下载</dt>
          <dd>
            <a class="jh-scan" target="_blank"
              ><img
                src="//img.alicdn.com/tps/TB1pjAHPXXXXXc_XFXXXXXXXXXX-238-323.png"
                width="119"
                height="162"
                alt="手机一淘"
            /></a>
          </dd>
        </dl>

        <dl class="jh-footer-item dib">
          <dt>优惠导航</dt>

          <dd>
            <a target="_blank">品牌特卖</a>
          </dd>

          <dd>
            <a target="_blank" title="限时闪购">限时闪购</a>
          </dd>
        </dl>

        <dl class="jh-footer-item dib">
          <dt>商家合作</dt>

          <dd>
            <a target="_blank" title="报名入口">报名入口</a>
          </dd>
        </dl>
      </div>
      <div class="jh-link">
        <div class="jh-link-list dib-wrap">
          友情链接:
          <a target="_blank" class="dib">阿里巴巴集团</a>

          <a target="_blank" class="dib">淘宝网</a>

          <a target="_blank" class="dib">阿里巴巴集团</a>

          <a target="_blank" class="dib">淘宝网</a>
          <a target="_blank" class="dib">阿里巴巴集团</a>

          <a target="_blank" class="dib">淘宝网</a>
          <a target="_blank" class="dib">阿里巴巴集团</a>

          <a target="_blank" class="dib">淘宝网</a>
          <a target="_blank" class="dib">阿里巴巴集团</a>

          <a target="_blank" class="dib">淘宝网</a>
          <a target="_blank" class="dib">阿里巴巴集团</a>

          <a target="_blank" class="dib">淘宝网</a>
          <a target="_blank" class="dib">阿里巴巴集团</a>

          <a target="_blank" class="dib">淘宝网</a>
          <a target="_blank" class="dib">阿里巴巴集团</a>

          <a target="_blank" class="dib">淘宝网</a>
          <a target="_blank" class="dib">阿里巴巴集团</a>

          <a target="_blank" class="dib">淘宝网</a>
        </div>
        <div class="jh-copyright">
          Copyright&nbsp;©&nbsp;2010-2017&nbsp;jh.COM&nbsp;版权所有
        </div>
        <p>
          增值电信业务经营许可证：<a
            target="_blank"
            href="http://beian.miit.gov.cn?spm=1002.8274268.2699127.37.1fd92c349fJIx2"
            data-spm-anchor-id="1002.8274268.2699127.37"
            >浙B2-20080224</a
          >
        </p>
        <div
          style="
            width: 300px;
            margin: 0 auto;
            padding: 5px 0 20px 0;
            text-align: center;
          "
        >
          <a
            target="_blank"
            href="http://idinfo.zjamr.zj.gov.cn/bscx.do?spm=1002.8274268.2699127.38.1fd92c349fJIx2&amp;method=lzxx&amp;id=3301843301002003002431"
            data-spm-anchor-id="1002.8274268.2699127.38"
          >
            <img
              style="height: 20px; margin-right: 2px"
              src="https://gw.alicdn.com/tfs/TB1HxCbreL2gK0jSZPhXXahvXXa-65-70.gif"
            />
          </a>
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?spm=1002.8274268.2699127.39.1fd92c349fJIx2&amp;recordcode=33010002000093"
            style="
              display: inline-block;
              text-decoration: none;
              height: 20px;
              line-height: 20px;
            "
            data-spm-anchor-id="1002.8274268.2699127.39"
          >
            <img
              style="float: left; height: 20px"
              src="https://gw.alicdn.com/tfs/TB1jwakrbH1gK0jSZFwXXc7aXXa-20-20.png"
              data-spm-anchor-id="1002.8274268.2699127.i0.1fd92c349fJIx2"
            />
            <p
              style="
                float: left;
                height: 20px;
                line-height: 20px;
                margin: 0px 0px 0px 5px;
              "
            >
              浙公网安备 33010002000093号
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {},
  data() {
    return {
      cf_data: [
        {
          img: 'http://placehold.it/210x210/',
          title: 'XXXXXXXXXXXXXXXXXXX',
          vouchers: 200,
          ret_money: 0.99,
          money: 500.99,
          real_money: 30,
          sales: 9985,
        },
      ],
    };
  },
  created() {},
};
</script>
<style lang="less">
@import "./footer.less";
</style>
