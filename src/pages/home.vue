<template>
  <div class="swiper-wrap">
    <swiper
      :indicator-dots="indicatorDots"
      :indicator-active-color="indicatorActiveColor"
      :autoplay="autoplay"
      :circular="circular"
      :next-margin="nextMargin">
      <swiper-item v-for="(img, index) in banners" :key="index">
        <image :src="img" class="slider-img" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "home",
    data () {
      return {
        banners: [
          'http://127.0.0.1:8888/banner/201803191442069389248.jpg',
          'http://127.0.0.1:8888/banner/201803191607213912571.jpg',
          'http://127.0.0.1:8888/banner/201803211341067195861.jpg',
          'http://127.0.0.1:8888/banner/201803221353348299896.jpg',
          'http://127.0.0.1:8888/banner/201803221355480509362.jpg',
          'http://127.0.0.1:8888/banner/201803221356007729116.jpg'
        ],
        indicatorDots: true,
        indicatorActiveColor: '#fff',
        autoplay: true,
        circular: true,
        nextMargin: '0px'
      }
    }
  };
</script>

<style scoped>

</style>
