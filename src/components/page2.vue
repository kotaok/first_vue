<template>
  <div class="block">
    <h1 class="title">About</h1>
    <myprofile></myprofile>
    <div class="about-block">
      <p><font-awesome-icon :icon="['fas','code']" size="2x"/></p>
      <p class="text">言語・フレームワーク、ツールなど</p>
      <myskills></myskills>
      <div id="nav">
      <router-link to="/page3" class="jump">作品をみる</router-link>
      </div>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import myskills from './skills'
import myprofile from './myprofile'
export default {
  components : {
    myskills,
    myprofile
  }
}
</script>

<style>

@keyframes Anime {
0% {
    opacity: 0;
    transform: translateX(50px);
}
100% {
    opacity: 1;
    transform: translateX(0);
}
}

.title {
  animation-name: Anime;
  animation-duration: 1.5s;
}

.about-block {
  width: 70%;
  margin: auto;
  background-color: #F8F9FA;
  border: solid 1px #f5f5f5;
  filter: drop-shadow(10px 10px 10px rgba(0,0,0,0.1));
}

.text {
  font-size: 21px;
}

.jump {
  font-weight: bold;
  padding: 20px 60px;
  margin: 20px 5px;
  text-decoration: none;
  color: #000000;
  background-color: #ffffff;
  border-radius: 6px;
  border: solid 1px #3f3f3f;
  transition: all 300ms ease;
}

.jump:hover {
  background-color: #3f3f3f;
  border: solid 1px #ffffff;
  color: #ffffff;
}
</style>