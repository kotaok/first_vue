<template>
  <div class="block">
    <h1 class="title">ABOUT</h1>
    <div class="banner">
      <p>私について</p>
      <i class="el-icon-arrow-down"></i>
    </div>
    <myprofile></myprofile>
    <mainskill></mainskill>
    <div class="about-block">
      <p><font-awesome-icon :icon="['fas','code']" size="2x"/></p>
      <p class="text">言語・フレームワーク、ツールなど</p>
      <myskills></myskills>
      <div>
      <router-link to="/works" class="jump">WORKS<i class="el-icon-right"></i></router-link>
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

.about-block {
  width: 60%;
  margin: auto;
  margin-top: 110px;
  margin-bottom: 40px;
  background-color: #F8F9FA;
  border: solid 2px #ececec;
}

.text {
  width: 80%;
  margin: auto;
  font-size: 20px;
  font-weight: 500;
  margin-top: 50px;
  margin-bottom: 50px;
}


.jump {
  font-family: brandon-grotesque, sans-serif;
  font-weight: 700;
  font-style: normal;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  width: 300px;
  margin: auto;
  padding: 20px 0px;
  margin-top: 60px;
  margin-bottom: 60px;
  border-radius: 50px;
  text-decoration: none;
  letter-spacing: 0.07em;
  color: #ffffff;
  background-color: #212121;
  transition: all 200ms ease;
}

.jump:hover {
  letter-spacing: 0.2em;
  background-color: #06006d;
}

@media screen and (max-width: 600px) {
  .about-block {
    width: 95%;
  }

  .jump {
    font-size: 18px;
    width: 80%;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 30px;
    padding: 16px 10px;
    letter-spacing: 0.07em;
  }
}

</style>