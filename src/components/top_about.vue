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
      <div>
        <i class="el-icon-monitor"></i>
        <p>フロントエンド開発</p>
      </div>
      <div>
        <i class="el-icon-setting"></i>
        <p>webアプリケーション開発</p>
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
  width: 70%;
  margin: auto;
  margin-top: 150px;
  margin-bottom: 50px;
  padding-top: 25px;
  border-top: solid 1px #e6e6e6;
}

.top_about_block {
  display: flex;
}

.top_about_block div {
  width: 400px;
  padding: 100px 50px;
  margin: 40px;
}

.top_about_profile {
  background-color: #ffffff;
}

.top_about_profile h2, .top_about_profile p {
  text-align: left;
}

.top_about_profile p {
  font-size: 18px;
}

.top_about_icon {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.top_about_icon div {
  width: 30%;
  margin: 70px 20px;
}

.top_about_icon div i {
  font-size: 55px;
  margin: 20px 0px;
}

@media screen and (max-width: 600px) {

  .top_about_profile {
    width: 80%;
  }

  .top_about_block div {
    width: 100%;
    padding: 10px 20px;
    margin: 10px;
  }

  .top_about_icon div {
    width: 100%;
    margin: 20px;
  }

  .top_about_icon div p {
    font-size: 18px;
    font-weight: bold;
  }


}
</style>