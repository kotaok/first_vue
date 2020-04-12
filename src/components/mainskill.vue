<template>
  <div>
    <div class="banner">
      <h2>DEVELOP</h2>
      <p>開発について</p>
      <i class="el-icon-arrow-down"></i>
    </div>
    <div class="main-skill">
      <div>
        <i class="el-icon-monitor"></i>
        <h1>フロントエンド開発</h1>
        <p>このサイトのコードを書けるレベルで、最近はVue.jsでの開発がマイブームです。スマホ表示の対応なども実装できます。</p>
      </div>
      <div>
        <i class="el-icon-setting"></i>
        <h1>webアプリケーション開発</h1>
        <p>環境構築から開発、heroku等へのデプロイと経験があります。データベース・SQLも、経験は薄いですが触れます。</p>
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
  font-size: 22px;
}

.main-skill div {
  margin: 100px 0px;
}

.main-skill div p {
  width: 40%;
  margin: auto;
  font-size: 18px;
}

.banner {
  padding: 50px 0px;
  background-color: rgb(0, 0, 97);
}

.banner h2 {
  font-family: objektiv-mk1,sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 45px;
  margin: 10px 0px;
  color: #ffffff;
}

.banner p {
  font-size: 20px;
  color: #c1c1c1
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
    margin: auto;
  }

  .banner h2 {
    font-size: 30px;
    margin: 20px 0px;
  }
}
</style>