<template>
  <div class="top_block">
    <h2 class="index-text" data-aos="fade-right">WORKS</h2>
    <div class="block">
      <el-carousel indicator-position="outside" :height="carousel_height">
        <el-carousel-item v-for="photo of gallery" :key="photo.path">
          <img :src="photo.path" class="works_img">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      gallery: [
        {path: '/img/develop.jpg'},
        {path: '/img/face.png'},
        {path: '/img/webrain.png'},
        {path: '/img/portfolio_image.png'}
      ],
      carousel_height: "500px"
    }
  },
  methods: {
    handleResize: function() {
      if(window.innerWidth <= 600) {
        this.carousel_height = "270px"
      }
      else {
        this.carousel_height = "500px"
      }
    }
  },
  created: function() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed: function() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style>
.works_img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>