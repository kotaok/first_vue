<template>
  <div>
    <p class="text" id="my-skill-top">DEVELOP</p>
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

.main-skill div h1{
  margin: 10px 0px;
  font-size: 20px;
}

.main-skill div {
  margin: 100px 0px;
}

.main-skill div p {
  width: 40%;
  margin: auto;
}

#my-skill-top {
  font-size: 45px;
  padding: 110px 0px;
  background-color: rgb(0, 0, 97);
  color: azure;
}

@media screen and (max-width: 600px) {
  #my-skill-top {
    font-size: 30px;
    padding: 40px 0px;
  }

  .main-skill div p {
    width: 75%;
    margin: auto;
  }
}
</style>