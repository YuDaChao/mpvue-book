<template>
    <div class="load-more">
      <image src="../static/images/loadding.gif" />
      <p class="msg">{{ message }}</p>
    </div>
</template>

<script>
  export default {
    name: "loadMore",
    props: {
      show: {
        type: Boolean,
        default: false
      },
      message: {
        type: String,
        default: '加载中'
      }
    }
  };
</script>

<style scoped>
  .load-more {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .load-more image {
    width: 18px;
    height: 18px;
  }
  .msg {
    font-size: 15px;
    color: #999;
    margin-left: 5px;
  }
</style>
