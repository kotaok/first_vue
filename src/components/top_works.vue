<template>
  <div class="top_block">
    <h2 class="index-text">WORKS</h2>
    <div class="block">
      <el-carousel indicator-position="outside">
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
        {path: '/img/kotaportfolio.png'},
        {path: '/img/webrain.png'},
        {path: '/img/kashiwa_2.png'},
        {path: '/img/portfolio_image.png'}
      ]
    }
  }
}
</script>

<style>
.works_img {
  object-fit: cover;
}
</style>