<template>
    <div class="info">
      <div class="my-header-wrap">
        <div class="my-header">
          <div class="my-header-main">
            <div class="my-header-avatar">
              <image src="http://storage.360buyimg.com/i.imageUpload/d3dd3536333131343439353631373435363030_mid.jpg"/>
            </div>
            <div class="my-header-info">
              <div class="username">
                虞大超
                <image src="../static/images/edit.png" />
              </div>
              <div class="nickname">用户名: 爱你不是说说而已~</div>
            </div>
          </div>
        </div>
      </div>
      <div class="menu-wrap">
        <div class="menu-item">
          <image class="menu-img" src="../static/images/icon_my_02.png"/>
          <div class="menu-content">
            <div class="txt">我的订单</div>
            <i class="icon iconfont icon-xiangyoujiantou"></i>
          </div>
        </div>
        <div class="menu-item">
          <image class="menu-img" src="../static/images/icon_my_04.png"/>
          <div class="menu-content">
            <div class="txt">我的足迹</div>
            <i class="icon iconfont icon-xiangyoujiantou"></i>
          </div>
        </div>
        <div class="menu-item">
          <image class="menu-img" src="../static/images/icon_my_03.png"/>
          <div class="menu-content">
            <div class="txt">我的积分</div>
            <i class="icon iconfont icon-xiangyoujiantou"></i>
          </div>
        </div>
        <div class="menu-item">
          <image class="menu-img" src="../static/images/icon_my_05.png"/>
          <div class="menu-content">
            <div class="txt">我的收藏</div>
            <i class="icon iconfont icon-xiangyoujiantou"></i>
          </div>
        </div>
      </div>
      <div style="margin-top: 10px; border-top: 1px solid #F0F0F0">
        <div class="menu-item">
          <image class="menu-img" src="../static/images/icon_my_06.png"/>
          <div class="menu-content">
            <div class="txt">我的消息</div>
            <i class="icon iconfont icon-xiangyoujiantou"></i>
          </div>
        </div>
        <div class="menu-item">
          <image class="menu-img" src="../static/images/icon_my_07.png"/>
          <div class="menu-content">
            <div class="txt">设置</div>
            <i class="icon iconfont icon-xiangyoujiantou"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "info"
  };
</script>

<style scoped>
  .my-header-wrap {
    margin-bottom: 15px;
    padding: 10px;
    background-color: #fff;
  }
  .my-header {
    position: relative;
    border-radius: 6px;
    background: linear-gradient(90deg,#eb3c3c,#ff7459);
    box-shadow: 0 2px 5px rgba(255,98,98,.4);
  }
  .my-header-main {
    position: relative;
    display: flex;
    align-items: center;
    padding: 25px 15px;
  }
  .my-header-avatar {
    position: relative;
    margin-right: 10px;
    width: 60px;
    height: 60px;
    border: 1px solid hsla(0,0%,100%,.4);
    border-radius: 60px;
    box-shadow: 0 2px 10px rgba(0,0,0,.15);
  }
  .my-header-avatar image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 60px;
  }
  .my-header-info .username {
    font-size: 16px;
    color: #fff;
    font-weight: 400;
  }
  .my-header-info image {
    width: 12px;
    height: 12px;
    display: inline-block;
    margin-left: 5px;
  }
  .my-header-info .nickname {
    color: hsla(0,0%,100%,.7);
    margin-top: 10px;
  }
  .menu-wrap {
    border-top: 1px solid #F0F0F0;
  }
  .menu-item {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 10px 0;
    border-bottom: 1px solid #F0F0F0;
  }
  .menu-content {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }
  .txt {
    flex: 1;
    font-size: 14px;
  }
  .icon-xiangyoujiantou {
    flex: 0 0 15px;
    padding-right: 15px;
  }
  .menu-img {
    width: 21px;
    height: 21px;
    padding: 10px;
  }
</style>
