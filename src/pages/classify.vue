<template>
    <div class="classify">
      <!--搜索-->
      <div class="search-wrap">
        <div class="search-content">
          <i class="icon iconfont icon-sousuo"></i>
          <div class="search-input">搜索商品</div>
        </div>
      </div>
      <div class="category" :style="{height: (windowHeight - 48) + 'px'}">
        <scroll-view
          class="left-nav"
          scroll-y
          scroll-with-animation="true"
          :scroll-top="scrollTop"
          style="height: 100%">
          <div
            v-for="(item, index) in category"
            :key="index"
            class="item"
            @click="onClickItem(index)"
            :class="{current: index === current}">
            {{ item }}
          </div>
        </scroll-view>
        <scroll-view class="right-content" scroll-y scroll-with-animation="true" style="height: 100%">right-content</scroll-view>
      </div>
    </div>
</template>

<script>
  export default {
    name: "classify",
    data () {
      return {
        windowHeight: 0,
        scrollTop: 0,
        current: 0,
        category: ['热搜推荐', '手机数码', '女装内衣', '男装内衣', '家用电器', '运动户外',
          '裙子', '裤子', '运动', '护肤', '上衣', '裙子', '裤子', '运动', '护肤', '上衣',
          '裙子', '裤子', '运动', '护肤', '上衣', '裙子', '裤子', '运动', '护肤']
      }
    },
    mounted () {
      this.getWindowHeight()
    },
    methods: {
      getWindowHeight () {
        let systemInfo = wx.getSystemInfoSync();
        this.windowHeight = systemInfo.windowHeight
      },
      onClickItem (index) {
        this.current = index
        this.scrollTop = index * 50
      }
    }
  };
</script>

<style scoped>
  .search-wrap {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    background-color: #fff;
  }

  .search-content {
    display: flex;
    align-items: center;
    padding: 10px 30px;
    border-bottom: 1px solid #f5f5f5;
    border-top: 1px solid #f5f5f5;
  }

  .icon-sousuo {
    position: absolute;
    top: 50%;
    left: 42%;
    color: #888;
    transform: translateY(-50%);
  }

  .search-input {
    flex: 1;
    height: 30px;
    background-color: #f1f1f1;
    border-radius: 30px;
    color: #999;
    padding-left: 30px;
    line-height: 30px;
    text-align: center;
  }
  .category {
    display: flex;
    padding-top: 52px;
    background-color: #f1f1f1;
  }
  .left-nav {
    flex: 0 0 80px;
    background-color: #f1f1f1;
  }
  .left-nav .item {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
  .left-nav .current {
    position: relative;
    font-size: 14px;
    background-color: #fff;
    color: #f10215;
  }
  .left-nav .current::before {
    content: '';
    display: block;
    position: absolute;
    height: 50px;
    width: 3px;
    background-color: #f10215;
    left: 0;
  }
  .right-content {
    flex: 1;
    padding-left: 20px;
    background-color: #fff;
  }
</style>
