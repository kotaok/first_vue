<template>
  <div class="block">
    <h1 class="title">ABOUT</h1>
    <myprofile></myprofile>
    <mainskill></mainskill>
    <div class="about-block">
      <p><font-awesome-icon :icon="['fas','code']" size="2x"/></p>
      <p class="text">言語・フレームワーク、ツールなど</p>
      <myskills></myskills>
      <div>
      <router-link to="/page3" class="jump">作品をみる<i class="el-icon-right"></i></router-link>
      </div>
    <router-view></router-view>
    </div>
    <myhistory></myhistory>
  </div>
</template>

<script>
import myskills from './skills'
import myprofile from './myprofile'
import myhistory from './history'
import mainskill from './mainskill'
export default {
  components : {
    myskills,
    myprofile,
    myhistory,
    mainskill
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
  width: 60%;
  margin: auto;
  margin-bottom: 40px;
  background-color: #F8F9FA;
  border: solid 2px #ececec;
}

.text {
  font-size: 20px;
  margin: 50px 0px;
  color: #3F3F3F;
}

.jump {
  display: flex;
  justify-content: center;
  font-weight: bold;
  width: 30%;
  margin: auto;
  padding: 20px 60px;
  margin-top: 60px;
  margin-bottom: 60px;
  text-decoration: none;
  color: #ffffff;
  background-color: #2B2D30;
  transition: all 300ms ease;
}

.jump:hover {
  opacity: 0.7;
}
</style>