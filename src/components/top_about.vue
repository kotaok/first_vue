<template>
  <div class="top_block">
    <h2 class="index-text">ABOUT</h2>
      <div class="top_about_block">
        <div class="top_about_profile">
          <h2>kota</h2>
          <p>ものづくりが好きで、1年前からプログラミングを学び始めた高校生です。webのフロントエンドを中心に、競技プログラミングにも取り組んでいます。</p>
        </div>
      </div>
    <el-divider></el-divider>
    <div class="top_about_icon">
      <p class="caption">好きなこと</p>
      <div class="icon_parent">
        <p>フロントエンド開発</p>
        <div class="icon_block">
          <i class="el-icon-monitor"></i>
        </div>
      </div>
      <div class="icon_parent">
        <p>webアプリケーション開発</p>
        <div class="icon_block">
          <i class="el-icon-setting"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.top_block {
  width: 100%;
  margin: auto;
  margin-top: 150px;
  margin-bottom: 50px;
  padding-top: 25px;
  border-top: solid 1px #e6e6e6;
}

.top_about_block {
  display: flex;
  border-radius: 1px;
  background-image: url(/img/backimg.jpg);
  background-size: cover;
}

.top_about_block div {
  width: 25%;
  padding: 10%;
  padding-left: 15%;
  margin: 40px 0px;
  background-color: #08009ad4;
}

.top_about_profile {
  background-color: #ffffff;
}

.top_about_profile h2, .top_about_profile p {
    font-size: 26px;
    color: #e2e2e2;
    text-align: left;
}

.top_about_profile p {
  color: #ffffffc7;
  font-size: 17px;
  letter-spacing: 0.03em;
  margin-bottom: 10px;
}

.top_about_icon {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.icon_parent {
  width: 30%;
  margin: 70px 20px;
}

.top_about_icon div i {
  font-size: 60px;
  margin: 20px 0px;
  color: #375d8a;
}

.top_about_icon div p {
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #1373E6;
}

.icon_block {
  margin: auto;
  padding: 50px 0px;
  border: solid 1px #1373E6;
  border-radius: 5px;
}

.caption {
  font-size: 30px;
  width: 100%;
  margin: 80px 0px 0px 0px;
}

@media screen and (max-width: 600px) {

  .top_about_profile {
    width: 80%;
    margin: 10px 0px;
  }

  .top_about_block div {
    width: 70%;
    padding: 20px 20px;
    margin: 5px;
  }

  .icon_parent {
    width: 100%;
    margin: 20px;
  }

  .top_about_icon div p {
    font-size: 18px;
    font-weight: bold;
  }

  .top_block {
    width: 80%;
  }

  .top_about_profile p {
    font-size: 16px;
    color: #d8d8d8;
  }
}
</style>