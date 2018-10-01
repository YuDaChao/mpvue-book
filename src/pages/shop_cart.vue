<template>
    <div class="shop-cart-wrap">
      <div class="shop-cart-list">
        <div class="shop-cart-item" v-for="(good, index) in carts" :key="good.id">
          <i
            class="icon iconfont icon-check"
            :class="good.checked ? 'check' : 'uncheck'"
            @click="handleCheckGood(good)"></i>
          <div class="cart-good-info">
            <image class="cart-img" :src="good.url" />
            <div class="cart-good-desc">
              <div class="good-name">{{ good.name }}</div>
              <div class="good-size">
                <span>藏青花纹49, 175/92A/L</span>
              </div>
              <div class="good-price">
                <span class="price">
                  <em>¥</em>
                  <span>{{ good.price }}</span>
                </span>
                <span class="number-ope">
                  <span class="decrement" @click="handleDecrementCount(good, false)">
                     <i class="icon iconfont icon-jian" :class="{'count-one': good.count === 1 ? true : false}"></i>
                  </span>
                  <span class="count">{{ good.count }}</span>
                  <span class="increment" @click="handleIncrementCount(good, true)">
                     <i class="icon iconfont icon-tianjia"></i>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-fixed">
        <div class="cart-fixed-content">
          <div class="check-all" @click="handleCheckAll">
            <i class="icon iconfont icon-check uncheck" :class="isCheckAll ? 'check' : 'uncheck'"></i>
            <span>全选</span>
          </div>
          <div class="cart-body">
            <div class="cart-total">
              <div class="total">
                <span class="total-txt">总计:</span>
                <span class="total-price">
                  <em>¥</em>{{ totalMoney }}
                </span>
              </div>
              <div class="jiesuan" :class="{'jiesuan-disabled': disabledSettleBtn}">
                去结算
                <span class="cart-total-count">({{ settleCount }}件)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shop-cart" v-show="carts.length === 0">
        <image class="empty-cart-img" src="../static/images/empty_cart.png" />
        <div class="empty-cart-tip">购物车空空如也，去逛逛吧～</div>
      </div>
    </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'

  export default {
    name: "shop_cart",
    computed: {
      ...mapState(['carts']),
      ...mapGetters([
        'isCheckAll',
        'disabledSettleBtn',
        'settleCount',
        'totalMoney']),
      ...mapMutations({
        checkGood: 'SET_CHECK_GOOD'
      })
    },
    methods: {
      handleCheckGood (good) {
        // this.checkGood(good)
        this.$store.commit('SET_CHECK_GOOD', { good })
      },
      // 全选 / 取消全选
      handleCheckAll () {
        this.$store.commit('SET_CHECK_ALL', this.isCheckAll)
      },
      // 修改商品数量
      handleCartCount (good, isAddCount) {
        this.$store.commit('SET_GOOD_COUNT', { good, isAddCount })
      },
      // 减数
      handleDecrementCount (good, isAddCount) {
        good.count > 1 && this.handleCartCount(good, isAddCount)
      },
      // 加数
      handleIncrementCount (good, isAddCount) {
        this.handleCartCount(good, isAddCount)
      }
    }
  };
</script>

<style scoped>

  .shop-cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    border-top: 1px solid #f7f7f7;
  }

  .shop-cart-item .icon-check {
    flex: 0 0 40px;
    font-size: 25px;
    color: #999999;
    margin-top: -30px;
  }

  .shop-cart-item .icon-check.uncheck {
    color: #e5e5e5;
  }

  .shop-cart-item .icon-check.check {
    color: #f10215;
  }

  .check-all .icon-check.uncheck {
    color: #e5e5e5;
  }

  .check-all .icon-check.check {
    color: #f10215;
  }

  .shop-cart-item .cart-good-info {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }

  .cart-good-info image {
    flex: 0 0 70px;
    margin-right: 10px;
  }

  .cart-good-info .cart-good-desc {
    flex: 1;
  }

  .good-name {
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .good-size {
    border: 1px solid #f1f1f1;
    border-radius: 2px;
    padding: 3px;
    margin: 5px 0 8px;
  }

  .cart-img {
    width: 70px;
    height: 70px;
  }

  .good-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .good-price .price {
    color: #f10215;
  }

  .good-price .price span {
   font-size: 16px;
  }

  .number-ope span {
    display: inline-block;
  }

  .number-ope .decrement, .number-ope .increment  {
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: #f5f5f5;
  }

  .number-ope .icon {
    font-size: 14px;
  }

  .icon-jian.count-one {
    color: #e5e5e5;
  }

  .number-ope .decrement {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  .number-ope .increment {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  .number-ope .count {
    margin: 0 1px;
    width: 40px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 15px;
    background-color: #f5f5f5;
  }

  .shop-cart {
    text-align: center;
    margin-top: 50px;
  }
  .empty-cart-img {
    width: 110px;
    height: 85px;
    display: inline-block;
  }
  .empty-cart-tip {
    text-align: center;
    font-size: 16px;
    margin-top: 5px;
    color: #666666;
  }

  .cart-fixed {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 46px;
    background-color: #fff;
    border-top: 1px solid #f5f5f5;
  }

  .cart-fixed-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
  }

  .check-all {
    text-align: center;
  }
  .check-all .icon-check {
    font-size: 25px;
    line-height: 1;
  }

  .check-all span {
    font-size: 10px;
    color: #999999;
  }

  .cart-total {
    display: flex;
    align-items: center;
  }

  .total {
    margin-right: 10px;
  }

  .total .total-txt {
    font-size: 16px;
    margin-right: 3px;
  }
  .total .total-price {
    color: #f10215;
    font-size: 14px;
  }

  .jiesuan {
    height: 100%;
    width: 100px;
    text-align: center;
    line-height: 46px;
    background-color: #f10215;
    font-size: 16px;
    color: #fff;
  }

  .jiesuan .cart-total-count {
    font-size: 10px;
  }

  .jiesuan-disabled {
    background-color: #7f7f7f;
    color: #e5e5e5;
  }

</style>
