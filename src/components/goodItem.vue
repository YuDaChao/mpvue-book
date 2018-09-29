<template>
  <div class="recommend-goods-content">
    <div class="recommend-goods-item" v-for="(good, index) in goodList" :key="index">
      <navigator url="/pages/good_detail">
        <image :src="good.url"/>
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
</template>

<script>
  export default {
    name: "goodItem",
    props: {
      goodList: {
        type: Array,
        default: []
      }
    }
  };
</script>

<style scoped>
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
    height: 200px;
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

  .sale-num {
    color: #999;
  }

  .icon-gouwuchetianjia {
    color: #f10215;
    display: inline-block;
  }
</style>
