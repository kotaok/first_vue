<template>
  <div>
    <div class="banner">
      <p>開発について</p>
      <i class="el-icon-arrow-down"></i>
    </div>
    <div class="main-skill">
      <div>
        <i class="el-icon-monitor"></i>
        <h1>競技プログラミング</h1>
        <p></p>
      </div>
      <div>
        <i class="el-icon-setting"></i>
        <h1>webアプリケーション開発</h1>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.main-skill div i {
  font-size: 55px;
}

.main-skill div h1 {
  margin: 20px 0px;
  font-size: 19px;
}

.main-skill div {
  margin: 100px 0px;
}

.main-skill div p {
  width: 40%;
  margin: auto;
  font-size: 18px;
}

.banner p {
  font-size: 20px;
  color: #272727;
}

.banner i {
  font-size: 27px;
  color: #c1c1c1;
}

@media screen and (max-width: 600px) {
  .banner {
    padding: 30px 0px;
  }

  .main-skill div p {
    width: 75%;
    font-size: 16px;
    margin: auto;
  }
}
</style>