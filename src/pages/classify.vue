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
            v-for="(item, index) in categories"
            :key="item.id"
            class="item"
            @click="onClickItem(index, item)"
            :class="{current: index === current}">
            {{ item.name }}
          </div>
        </scroll-view>
        <scroll-view class="right-content" scroll-y scroll-with-animation="true" style="height: 100%">
          <div class="right-header-wrap" v-if="categoryGoods.length > 0">
            <image class="header-img" src="https://img30.360buyimg.com/mcoss/jfs/t14326/60/276010902/48321/b37641e8/5a28eb8cNaa81d806.jpg"/>
          </div>
          <div
            class="category-content"
            v-if="categoryGoods.length > 0"
            v-for="(good, idx) in categoryGoods"
            :key="idx">
            <h4 class="category-title">{{ good.tag }}</h4>
            <div class="category-list">
              <div
                class="category-item"
                v-for="(item, index) in good.list"
                :key="item.id">
                <image :src="item.url" />
                <p>{{ item.name }}</p>
              </div>
            </div>
          </div>
          <div v-if="categoryGoods.length === 0 && !isLoading" class="no-data-wrap">
            <image src="../static/images/empty.png" />
            <p class="no-data-tip">没有查询到任何数据~</p>
          </div>
        </scroll-view>
      </div>
    </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import api from '../api'

  export default {
    name: "classify",
    data () {
      return {
        windowHeight: 0,
        scrollTop: 0,
        current: 0,
        categories: []
      }
    },
    mounted () {
      this.getWindowHeight()
      this.getCategoryList()
      this.getCategoryGoods('1')
    },
    computed: {
      ...mapState(['categoryGoods', 'isLoading'])
    },
    methods: {
      ...mapActions(['getCategoryGoods']),
      getWindowHeight () {
        let systemInfo = wx.getSystemInfoSync();
        this.windowHeight = systemInfo.windowHeight
      },
      onClickItem (index, item) {
        this.current = index
        this.scrollTop = index * 50
        this.getCategoryGoods(item.category_id)
      },
      async getCategoryList () {
        const result = await api.getCategoryList()
        if (result.code === 0) {
          this.categories = result.data
        }
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
    padding: 10px 10px 0;
    background-color: #fff;
    box-sizing: border-box;
  }
  .right-header-wrap {
    width: 100%;
    height: 90px;
  }
  .header-img {
    width: 100%;
    height: 100%;
  }
  .category-content {
    margin-top: 20px;
  }
  .category-title {
    font-size: 14px;
    color: #333;
    font-weight: 700;
  }
  .category-list {
    padding: 7px 10px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .category-item {
    width: 32%;
    text-align: center;
  }
  .category-item image {
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 auto;
  }
  .category-item p {
    color: #333;
    margin-top: 5px;
    margin-bottom: 15px;
  }
  .no-data-wrap {
    text-align: center;
    margin-top: 50px;
  }
  .no-data-wrap image {
    width: 100px;
    height: 75px;
    display: inline-block;
  }
  .no-data-tip {
    text-align: center;
    font-size: 14px;
    margin-top: 5px;
    color: #666666;
  }
</style>
