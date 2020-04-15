<template>
  <div class="block">
    <h1 class="title">TOP</h1>
    <topabout></topabout>
    <div>
      <router-link to="/page2" class="jump">ABOUT<i class="el-icon-right"></i></router-link>
    </div>
    <router-view></router-view>
    <topworks></topworks>
    <div>
      <router-link to="/page3" class="jump">WORKS<i class="el-icon-right"></i></router-link>
    </div>
    <router-view></router-view>
    <topblog></topblog>
  </div>
</template>

<script>
import topabout from './top_about'
import topworks from './top_works'
import topblog from './top_blog'
export default {
  components: {
    topabout,
    topworks,
    topblog
  }
}
</script>

<style>
.block {
  text-align: center;
}

.title {
  font-size: 20px;
  width: 25%;
  padding: 10px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 50px;
  border: solid 2px #000000;
}

.index-text {
  width: 30%;
  text-align: left;
  padding-bottom: 10px;
  margin-left: 5%;
  border-bottom: solid 2px rgb(17, 17, 104);
}

@media screen and (max-width: 600px) {
  .index-text {
  width: 50%;
}
}


</style>