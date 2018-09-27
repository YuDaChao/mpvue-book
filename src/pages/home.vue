<template>
  <div class="home">
    <!--轮播-->
    <swiper
      :indicator-dots="indicatorDots"
      :indicator-active-color="indicatorActiveColor"
      :autoplay="autoplay"
      :circular="circular"
      :next-margin="nextMargin">
      <swiper-item v-for="(img, index) in banners" :key="index">
        <image :src="img" class="slider-img"/>
      </swiper-item>
    </swiper>
    <!--搜索-->
    <div class="search-wrap" :style="{background: searchBgColor}">
      <div class="search-content">
        <i class="icon iconfont icon-sousuo"></i>
        <div class="search-input">搜索商品</div>
        <div class="message">
          <i class="icon iconfont icon-xiaoxizhongxin"></i>
          <div class="txt">消息</div>
        </div>
      </div>
    </div>
    <!--导航-->
    <div class="nav-list">
      <div class="nav-item">
        <image src="../static/images/icon_nav_01_new.png" class="nav_icon"/>
        <div class="nav-text">签到有礼</div>
      </div>
      <div class="nav-item">
        <image src="../static/images/icon_nav_02_new.png" class="nav_icon"/>
        <div class="nav-text">换货专区</div>
      </div>
      <div class="nav-item">
        <image src="../static/images/icon_nav_03_new.png" class="nav_icon"/>
        <div class="nav-text">特价专区</div>
      </div>
      <div class="nav-item">
        <image src="../static/images/icon_nav_04_new.png" class="nav_icon"/>
        <div class="nav-text">我要补货</div>
      </div>
    </div>
    <div class="activity">
      <div class="title">优惠活动</div>
    </div>
    <!--优惠活动-->
    <div class="good-item">
      <image class="img" src="../static/images/banner/201803191442069389248.jpg" />
      <div class="good-desc">
        <div class="brand">品牌: 香奈儿</div>
        <div class="year">年份季节: 2018秋季新款</div>
      </div>
    </div>
    <div class="good-item">
      <image class="img" src="../static/images/banner/201803221356007729116.jpg" />
      <div class="good-desc">
        <div class="brand">品牌: 香奈儿</div>
        <div class="year">年份季节: 2018秋季新款</div>
      </div>
    </div>
    <div class="good-item">
      <image class="img" src="../static/images/banner/201803221353348299896.jpg" />
      <div class="good-desc">
        <div class="brand">品牌: 香奈儿</div>
        <div class="year">年份季节: 2018秋季新款</div>
      </div>
    </div>
    <!--推荐-->
    <div class="recommend">
      <i class="icon iconfont icon-huo"></i>推荐商品
    </div>
    <!--推荐商品列表-->
    <div class="recommend-goods-wrap">
      <div class="recommend-goods-content">
        <div class="recommend-goods-item">
          <image src="../static/images/goods/1.jpg" />
          <div class="recommend-good-desc">
            <div class="good-name">可福唯瑷 2018秋冬新款长袖连衣裙女韩</div>
            <div class="good-info">
              <span class="new-price"><em>￥</em>135</span>
              <!--<span class="old-price"><em>￥</em>195</span>-->
              <span class="sale-num">销量345件</span>
              <i class="icon iconfont icon-gouwuchetianjia"></i>
            </div>
          </div>
        </div>
        <div class="recommend-goods-item">
          <image src="../static/images/goods/1.jpg" />
          <div class="recommend-good-desc">
            <div class="good-name">汐颜 两件套连衣裙秋装2018针织韩版修</div>
            <div class="good-info">
              <span class="new-price"><em>￥</em>235</span>
              <!--<span class="old-price"><em>￥</em>405</span>-->
              <span class="sale-num">销量1345件</span>
              <i class="icon iconfont icon-gouwuchetianjia"></i>
            </div>
          </div>
        </div>
        <div class="recommend-goods-item">
          <image src="../static/images/goods/1.jpg" />
          <div class="recommend-good-desc">
            <div class="good-name">菲梦伊中长毛衣打底裙秋冬2018新款V领</div>
            <div class="good-info">
              <span class="new-price"><em>￥</em>499</span>
              <!--<span class="old-price"><em>￥</em>798</span>-->
              <span class="sale-num">销量345件</span>
              <i class="icon iconfont icon-gouwuchetianjia"></i>
            </div>
          </div>
        </div>
        <div class="recommend-goods-item">
          <image src="../static/images/goods/1.jpg" />
          <div class="recommend-good-desc">
            <div class="good-name">新款韩版印花字母短款T恤衫</div>
            <div class="good-info">
              <span class="new-price"><em>￥</em>199</span>
              <!--<span class="old-price"><em>￥</em>298</span>-->
              <span class="sale-num">销量245件</span>
              <i class="icon iconfont icon-gouwuchetianjia"></i>
            </div>
          </div>
        </div>
        <div class="recommend-goods-item">
          <image src="../static/images/goods/1.jpg" />
          <div class="recommend-good-desc">
            <div class="good-name">2018女士时尚印花蕾丝长袖打底衫T18C0113</div>
            <div class="good-info">
              <span class="new-price"><em>￥</em>399</span>
              <!--<span class="old-price"><em>￥</em>498</span>-->
              <span class="sale-num">销量45件</span>
              <i class="icon iconfont icon-gouwuchetianjia"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block"></div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data () {
      return {
        banners: [
          "../static/images/banner/201803191442069389248.jpg",
          "../static/images/banner/201803191607213912571.jpg",
          "../static/images/banner/201803211341067195861.jpg",
          "../static/images/banner/201803221353348299896.jpg",
          "../static/images/banner/201803221355480509362.jpg",
          "../static/images/banner/201803221356007729116.jpg"
        ],
        indicatorDots: true,
        indicatorActiveColor: "#fff",
        autoplay: true,
        circular: true,
        nextMargin: "0px",
        searchBgColor: 'rgba(228, 49, 48, 0)'
      };
    },
    mounted () { },
    methods: { },
    onPageScroll (e) {
      let scrollTop = e.scrollTop
      if (scrollTop < 20) {
        this.searchBgColor = 'rgba(228, 49, 48, 0)'
      } else if (scrollTop >= 20 && scrollTop <= 150) {
        this.searchBgColor = 'rgba(228, 49, 48, ' + scrollTop / 150 + ')'
      }
    }
  };
</script>

<style scoped>
  .slider-img {
    width: 375px;
    height: 180px;
  }

  .search-wrap {
    position: fixed;
    top: 0;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    z-index: 99;
  }

  .search-content {
    display: flex;
    align-items: center;
    padding: 0 30px;
  }

  .icon-sousuo {
    position: absolute;
    top: 50%;
    left: 40px;
    color: #fff;
    transform: translateY(-50%);
  }

  .search-input {
    flex: 1;
    height: 25px;
    border: 1px solid #efefee;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    color: #fff;
    padding-left: 30px;
    line-height: 25px;
  }

  .message {
    flex: 0 0 30px;
    text-align: center;
    padding: 0 0 0 15px;
  }

  .icon-xiaoxizhongxin {
    color: #fff;
  }

  .txt {
    color: #fff;
    font-size: 10px;
  }

  .nav-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 10px 0;
  }

  .nav-item {
    flex: 1;
    text-align: center;
  }

  .nav_icon {
    width: 40px;
    height: 40px;
    margin: 0 auto;
  }

  .nav-text {
    text-align: center;
    margin-top: 5px;
  }

  .activity {
    margin-top: 10px;
    background-color: #fff;
  }

  .activity .title {
    position: relative;
    padding: 8px 0 8px 10px;
    font-size: 14px;
  }

  .activity .title::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 9px;
    width: 4px;
    height: 17px;
    background-color: #f10215;
  }

  .good-item {
    margin-top: 10px;
    background-color: #fff;
    padding: 5px 8px 8px;
  }

  .good-item .img {
    width: 100%;
    height: 180px;
  }

  .good-desc {
    margin-top: 8px;
  }
  .recommend {
    background-color: #fff;
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
    padding: 10px 0;
  }
  .icon-huo {
    color: #f10215;
    display: inline-block;
  }
  .recommend-goods-wrap {
    margin: 8px;
  }
  .recommend-goods-content {
    display: flex;
    flex-wrap: wrap;
  }
  .recommend-goods-item {
    background-color: #fff;
    margin-top: 8px;
    margin-right: 8px;
  }
  .recommend-goods-item:nth-child(even) {
    margin-right: 0;
  }
  .recommend-goods-item image {
    width: 175px;
    height: 160px;
  }
  .recommend-good-desc {
    padding: 10px;
  }
  .good-info {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-top: 5px;
  }
  .good-name {
    max-width: 155px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .new-price {
    color: #f10215;
    font-weight: 500;
    font-size: 14px;
  }
  em {
    display: inline-block;
  }
  .old-price {
    color: #999999;
    font-size: 10px;
    text-decoration: line-through;
  }
  .sale-num {
    color: #999;
  }
  .icon-gouwuchetianjia {
    color: #f10215;
    display: inline-block;
  }
  .block {
    height: 20px;
    background-color: #fff;
  }
</style>
