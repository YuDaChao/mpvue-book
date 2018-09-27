<template>
    <div class="shop-cart">
      <image class="empty-cart-img" src="../static/images/empty_cart.png" />
      <div class="empty-cart-tip">购物车空空如也，去逛逛吧～</div>
    </div>
</template>

<script>
  export default {
    name: "shop_cart"
  };
</script>

<style scoped>
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
</style>
