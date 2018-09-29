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
      <navigator url="" class="nav-item">
        <image src="../static/images/icon_nav_01_new.png" class="nav_icon"/>
        <div class="nav-text">签到有礼</div>
      </navigator>
      <navigator url="" class="nav-item">
        <image src="../static/images/icon_nav_02_new.png" class="nav_icon"/>
        <div class="nav-text">换货专区</div>
      </navigator>
      <navigator url="" class="nav-item">
        <image src="../static/images/icon_nav_03_new.png" class="nav_icon"/>
        <div class="nav-text">特价专区</div>
      </navigator>
      <navigator url="" class="nav-item">
        <image src="../static/images/icon_nav_04_new.png" class="nav_icon"/>
        <div class="nav-text">我要补货</div>
      </navigator>
    </div>
    <div class="activity">
      <div class="title">优惠活动</div>
    </div>
    <!--优惠活动-->
    <navigator url="/pages/good_detail" class="good-item">
      <image class="img" src="../static/images/banner/201803191442069389248.jpg" />
      <div class="good-desc">
        <div class="brand">品牌: 香奈儿</div>
        <div class="year">年份季节: 2018秋季新款</div>
      </div>
    </navigator>
    <navigator url="/pages/good_detail" class="good-item">
      <image class="img" src="../static/images/banner/201803221356007729116.jpg" />
      <div class="good-desc">
        <div class="brand">品牌: 香奈儿</div>
        <div class="year">年份季节: 2018秋季新款</div>
      </div>
    </navigator>
    <navigator url="/pages/good_detail" class="good-item">
      <image class="img" src="../static/images/banner/201803221353348299896.jpg" />
      <div class="good-desc">
        <div class="brand">品牌: 香奈儿</div>
        <div class="year">年份季节: 2018秋季新款</div>
      </div>
    </navigator>
    <!--推荐-->
    <div class="recommend">
      <i class="icon iconfont icon-huo"></i>推荐商品
    </div>
    <!--推荐商品列表-->
    <div class="recommend-goods-wrap">
      <div class="recommend-goods-content">
        <div class="recommend-goods-item" v-for="(good, index) in goodList" :key="index">
          <navigator url="/pages/good_detail">
            <image :src="good.url" />
          </navigator>
          <div class="recommend-good-desc">
            <div class="good-name">{{ good.name }}</div>
            <div class="good-info">
              <span class="new-price"><em>￥</em>{{ good.price }}</span>
              <!--<span class="old-price"><em>￥</em>195</span>-->
              <span class="sale-num">销量{{ good.sale_num }}件</span>
              <i class="icon iconfont icon-gouwuchetianjia"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="load-more-wrap"><load-more :show="showLoadMore" /></div>
  </div>
</template>

<script>
  import api from '../api'
  import LoadMore from '../components/loadMore'
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
        searchBgColor: 'rgba(228, 49, 48, 0)',
        goods: [],
        goodList: [],
        showLoadMore: true
      };
    },
    components: {
      LoadMore
    },
    mounted () {
      this.getGoodList()
    },
    methods: {
      async getGoodList () {
        const result = await api.getGoodList()
        if (result.code === 0) {
          this.goods = result.data
          this.goodList = result.data.slice(0, 5)
        }
      }
    },
    // 监听页面滚动
    onPageScroll (e) {
      let scrollTop = e.scrollTop
      if (scrollTop < 20) {
        this.searchBgColor = 'rgba(228, 49, 48, 0)'
      } else if (scrollTop >= 20 && scrollTop <= 150) {
        this.searchBgColor = 'rgba(228, 49, 48, ' + scrollTop / 150 + ')'
      }
    },
    // 下拉加载
    onReachBottom () {
      this.showLoadMore = true
      setTimeout(() => {
        this.goodList = [...this.goodList, ...this.goods.slice(5, 10)]
        this.showLoadMore = true
      }, 1500)
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
    padding: 5px 30px;
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
    height: 30px;
    border: 1px solid #efefee;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    color: #fff;
    padding-left: 30px;
    line-height: 30px;
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
  }

  .nav-item {
    flex: 1;
    text-align: center;
    padding: 10px 0;
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
    /*height: 160px;*/
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
  .load-more-wrap {
    margin-bottom: 5px;
  }
</style>
