<template>
    <div class="good-detail">
      <div class="good-detail-banner">
        <swiper
          style="height: 322px"
          :indicator-dots="indicatorDots"
          :indicator-active-color="indicatorActiveColor"
          :autoplay="autoplay"
          :circular="circular">
          <swiper-item v-for="(img, index) in banners" :key="index">
            <image :src="img" class="slider-img"/>
          </swiper-item>
        </swiper>
      </div>
      <div class="good-detail-info">
        <div class="good-info-content">
          <div class="good-name">{{ goodDetail.name }}</div>
          <div class="good-info-footer">
            <div class="good-price">
              <em>¥</em>
              <span>{{ goodDetail.price }}</span>
            </div>
            <div class="follow">
              <i class="icon iconfont icon-jushoucang"></i>
              <span>关注</span>
            </div>
          </div>
        </div>
        <div class="youhui">
          <div class="day-7">
            <i class="icon iconfont icon-7"></i>
            <span>七天退换货</span>
          </div>
          <div class="mian">
            <i class="icon iconfont icon-mian"></i>
            <span>免运费</span>
          </div>
        </div>
      </div>
      <div class="good-comment-wrap">
        <div class="good-comment-content">
          <div class="good-comment-header">
            <div class="comment-num">评价(413)</div>
            <div class="good-comment">
              <span class="text">好评度</span>
              <span class="count">98%</span>
              <i class="icon iconfont icon-xiangyoujiantou"></i>
            </div>
          </div>
          <div class="comment-tags">
            <span class="tag">面料柔和 1</span>
            <span class="tag">质量不错 4</span>
          </div>
          <!-- 评论内容 -->
          <div class="comment-item">
            <div class="comment-user">
              <div class="user-info">
                <i class="icon iconfont icon-wodejuhuasuan avatar"></i>
                <span>b***231u</span>
              </div>
              <div>* * * * *</div>
            </div>
            <div class="comment-desc">衣服质量不错，发货速度很快</div>
            <div class="comment-good-info">
              墨绿色; XL建议115-125斤
            </div>
          </div>
          <div class="comment-item">
            <div class="comment-user">
              <div class="user-info">
                <i class="icon iconfont icon-wodejuhuasuan avatar"></i>
                <span>b***231u</span>
              </div>
              <div>* * * * *</div>
            </div>
            <div class="comment-desc">衣服质量不错，发货速度很快</div>
            <div class="comment-good-info">
              墨绿色; XL建议115-125斤
            </div>
          </div>
          <div class="comment-item">
            <div class="comment-user">
              <div class="user-info">
                <i class="icon iconfont icon-wodejuhuasuan avatar"></i>
                <span>b***231u</span>
              </div>
              <div>* * * * *</div>
            </div>
            <div class="comment-desc">衣服质量不错，发货速度很快</div>
            <div class="comment-good-info">
              墨绿色; XL建议115-125斤
            </div>
          </div>
          <div class="comment-item">
            <div class="comment-user">
              <div class="user-info">
                <i class="icon iconfont icon-wodejuhuasuan avatar"></i>
                <span>b***231u</span>
              </div>
              <div>* * * * *</div>
            </div>
            <div class="comment-desc">衣服质量不错，发货速度很快</div>
            <div class="comment-good-info">
              墨绿色; XL建议115-125斤
            </div>
          </div>
          <div class="comment-item">
            <div class="comment-user">
              <div class="user-info">
                <i class="icon iconfont icon-wodejuhuasuan avatar"></i>
                <span>b***231u</span>
              </div>
              <div>* * * * *</div>
            </div>
            <div class="comment-desc">衣服质量不错，发货速度很快</div>
            <div class="comment-good-info">
              墨绿色; XL建议115-125斤
            </div>
          </div>
          <div class="comment-item">
            <div class="comment-user">
              <div class="user-info">
                <i class="icon iconfont icon-wodejuhuasuan avatar"></i>
                <span>b***231u</span>
              </div>
              <div>* * * * *</div>
            </div>
            <div class="comment-desc">衣服质量不错，发货速度很快</div>
            <div class="comment-good-info">
              墨绿色; XL建议115-125斤
            </div>
          </div>
        </div>
      </div>
      <div class="fixed-footer">
        <div class="footer-content">
          <div class="home">
            <i class="icon iconfont icon-home"></i>
            <span>首页</span>
          </div>
          <div class="home">
            <i class="icon iconfont icon-wodefankui"></i>
            <span>客服</span>
          </div>
          <div class="home cart" @click="gotoCart">
            <i class="icon iconfont icon-gouwuche">
              <span class="cart-num" v-if="cartLen > 0">{{ cartLen }}</span>
            </i>
            <span>购物车</span>
          </div>
          <div class="add-cart" @click="handleAddCart">加入购物车</div>
          <div class="buy">立即购买</div>
        </div>
      </div>
    </div>
</template>

<script>
  import { mapGetters, mapState, mapActions } from 'vuex'
  export default {
    name: "good_detail",
    data () {
      return {
        banners: [
          "http://sujiefs.com/upload/images/20180423/201804231129566901221.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231129496116208.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231129523760822.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231129547510059.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231129454571221.jpg"
        ],
        indicatorDots: true,
        indicatorActiveColor: "#fff",
        autoplay: true,
        circular: true
      }
    },
    mounted () {
    },
    computed: {
      ...mapGetters(['cartLen']),
      ...mapState(['goodDetail'])
    },
    methods: {
      ...mapActions(['addCart']),
      gotoCart () {
        wx.switchTab({
          url: '/pages/shop_cart'
        })
      },
      handleAddCart () {
        this.addCart(this.goodDetail)
      }
    }
  };
</script>

<style scoped>
  .good-detail-banner .slider-img {
    width: 375px;
    height: 375px;
  }
  .good-detail-info {
    background-color: #fff;
  }
  .good-info-content {
    padding: 10px;
    border-bottom: 1px solid #f5f5f5;
  }
  .good-info-content .good-name {
    font-size: 16px;
    line-height: 2;
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .good-info-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .good-info-content .good-price {
    color: #f10215;
  }
  .good-info-content .good-price em {
    font-size: 16px;
    display: inline-block;
  }
  .good-info-content .good-price span {
    margin-left: 2px;
    font-size: 18px;
    font-weight: 700;
  }
  .follow {
    padding-right: 15px;
  }
  .icon-jushoucang {
    font-size: 18px;
    text-align: center;
    line-height: 1;
  }
  .follow span {
    font-size: 10px;
  }
  .youhui {
    display: flex;
    padding: 6px 10px;
    background-color: #fafbfc;
  }
  .youhui i {
    color: #f10215;
    display: inline-block;
    vertical-align: middle;
  }
  .youhui span {
    margin-left: 3px;
  }
  .youhui .mian {
    margin-left: 15px;
  }

  .good-comment-wrap {
    margin-top: 10px;
    padding-bottom: 56px;
    background-color: #fff;
  }
  .good-comment-content {
    margin: 0 10px;
  }
  .good-comment-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0 10px;
  }
  .comment-num {
    position: relative;
    padding-left: 10px;
    font-size: 13px;
    font-weight: 500;
  }
  .comment-num::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 4px;
    height: 12px;
    background-color: #f10215;
  }
  .good-comment .icon-xiangyoujiantou {
    display: inline-block;
    vertical-align: middle;
    font-size: 10px;
    color: #333;
  }
  .good-comment .count {
    margin: 0 4px;
    color: #F1393A;
  }
  .comment-tags {
    padding-bottom: 10px;
    border-bottom: 1px solid #f5f5f5;
  }
  .comment-tags .tag {
    display: inline-block;
    min-width: 70px;
    height: 25px;
    padding: 2px 4px;
    line-height: 25px;
    text-align: center;
    border-radius: 22px;
    background-color: #ECF5FD;
    margin-right: 8px;
  }


  .comment-item {
    padding: 8px 0 5px;
    border-bottom: 1px solid #f5f5f5;
  }
  .comment-user {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .comment-user .avatar {
    display: inline-block;
    margin-right: 4px;
  }
  .comment-desc {
    font-size: 14px;
    line-height: 25px;
  }
  .comment-good-info {
    color: #999999;
  }

  .fixed-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 56px;
    background-color: #f7f7f7;
    border-top: 1px solid #f5f5f5;
  }
  .footer-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .home {
    flex: 1;
    text-align: center;
  }
  .home .icon {
    display: block;
    font-size: 18px;
  }
  .home span {
    color: #666;
  }
  .home.cart .icon-gouwuche{
    position: relative;
  }
  .home.cart .cart-num{
    position: absolute;
    right: 13px;
    display: inline-block;
    font-size: 8px;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    text-align: center;
    line-height: 10px;
    background-color: #f10215;
    color: #fff;
  }
  .add-cart, .buy {
    flex: 2;
    height: 100%;
    line-height: 56px;
    text-align: center;
    color: #fff;
    font-size: 16px;
  }
  .add-cart {
    background-color: #f17649;
  }
  .buy {
    background-color: #f10215;
  }

</style>
