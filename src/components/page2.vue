<template>
  <div class="block">
    <h1 class="title">About</h1>
    <div class="about-block">
      <p>言語・フレームワークなど</p>
      <myskills></myskills>
    </div>
  </div>
</template>

<script>
import myskills from './skills'
export default {
  components : {
    myskills
  }
}
</script>

<style>

.about-block {
  width: 70%;
  margin: auto;
  background-color: #ffffff;
  border: solid 1px #f5f5f5;
  filter: drop-shadow(10px 10px 10px rgba(0,0,0,0.1));
}
</style>