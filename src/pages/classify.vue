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
        <scroll-view class="right-content" scroll-y scroll-with-animation="true" style="height: 100%">
          <div class="right-header-wrap">
            <image class="header-img" src="https://img30.360buyimg.com/mcoss/jfs/t14326/60/276010902/48321/b37641e8/5a28eb8cNaa81d806.jpg"/>
          </div>
          <div class="category-content">
            <h4 class="category-title">热卖选购</h4>
            <div class="category-list">
              <div class="category-item">
                <image src="https://img13.360buyimg.com/focus/s140x140_jfs/t16828/262/724741631/2535/ba1020b7/5a9fb675N29136079.jpg" />
                <span>早春新品</span>
              </div>
              <div class="category-item">
                <image src="https://img30.360buyimg.com/focus/s140x140_jfs/t16891/72/715748110/3080/182127b5/5a9fb67aN37c4848f.jpg" />
                <span>连衣裙</span>
              </div>
              <div class="category-item">
                <image src="https://img11.360buyimg.com/focus/s140x140_jfs/t18130/206/667191027/4173/bf767ab4/5a9fb67fN3834e3c9.jpg" />
                <span>衬衫</span>
              </div>
              <div class="category-item">
                <image src="https://img20.360buyimg.com/focus/s140x140_jfs/t19471/233/655303672/4619/b23fea4b/5a9fb684Ne1ec9fe8.jpg" />
                <span>T恤</span>
              </div>
              <div class="category-item">
                <image src="https://img10.360buyimg.com/focus/s140x140_jfs/t18343/191/641645855/3307/d3a4e7b4/5a9fb694N13609fcd.jpg" />
                <span>牛仔裤</span>
              </div>
              <div class="category-item">
                <image src="https://img12.360buyimg.com/focus/s140x140_jfs/t19270/200/692436631/4169/b502c81c/5a9fb68eN125c9ddd.jpg" />
                <span>卫衣</span>
              </div>
              <div class="category-item">
                <image src="https://img30.360buyimg.com/focus/s140x140_jfs/t11794/114/2228059199/2529/60e8b474/5a12b21eN10fd877c.jpg" />
                <span>针织衫</span>
              </div>
              <div class="category-item">
                <image src="https://img10.360buyimg.com/focus/s140x140_jfs/t16375/270/2298165642/4388/99ff4997/5a9fb689Nc0bd43f4.jpg" />
                <span>牛仔外套</span>
              </div>
            </div>
          </div>
          <div class="category-content">
            <h4 class="category-title">上装</h4>
            <div class="category-list">
              <div class="category-item">
                <image src="https://img12.360buyimg.com/focus/s140x140_jfs/t13357/141/724977729/3459/e3a3c8e1/5a127ee9Nbc443a5f.jpg" />
                <span>打底衫</span>
              </div>
              <div class="category-item">
                <image src="https://img12.360buyimg.com/focus/s140x140_jfs/t16960/330/672781171/5066/76e6f8c9/5a9fbfdcNc891be87.jpg" />
                <span>短外套</span>
              </div>
              <div class="category-item">
                <image src="https://img14.360buyimg.com/focus/s140x140_jfs/t16126/212/2272437372/3302/c9af3547/5a9fbfa0N591929da.jpg" />
                <span>百搭衬衫</span>
              </div>
              <div class="category-item">
                <image src="https://img12.360buyimg.com/focus/s140x140_jfs/t15313/145/2476673176/2856/879136d7/5a9fc012N86f3fb22.jpg" />
                <span>风衣</span>
              </div>
              <div class="category-item">
                <image src="https://img12.360buyimg.com/focus/s140x140_jfs/t13357/141/724977729/3459/e3a3c8e1/5a127ee9Nbc443a5f.jpg" />
                <span>打底衫</span>
              </div>
              <div class="category-item">
                <image src="https://img12.360buyimg.com/focus/s140x140_jfs/t16960/330/672781171/5066/76e6f8c9/5a9fbfdcNc891be87.jpg" />
                <span>短外套</span>
              </div>
              <div class="category-item">
                <image src="https://img14.360buyimg.com/focus/s140x140_jfs/t16126/212/2272437372/3302/c9af3547/5a9fbfa0N591929da.jpg" />
                <span>百搭衬衫</span>
              </div>
              <div class="category-item">
                <image src="https://img12.360buyimg.com/focus/s140x140_jfs/t15313/145/2476673176/2856/879136d7/5a9fc012N86f3fb22.jpg" />
                <span>风衣</span>
              </div>
            </div>
          </div>
        </scroll-view>
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
  .category-item span {
    color: #333;
    margin-top: 3px;
    margin-bottom: 8px;
  }
</style>
