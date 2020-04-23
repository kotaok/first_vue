<template>
<div>
  <div class="footer-link-parent">
    <p class="footer-title">LINK</p>
    <div class="footer-link">
      <a href="https://github.com/kotaok" target="_blank"><font-awesome-icon :icon="['fab','github']" size="2x" color="#ffffff"/></a>
      <a href="https://qiita.com/lemon_melon" target="_blank"><font-awesome-icon :icon="['fas','search']" size="2x" color="#ffffff"/></a>
    </div>
  </div>
  <div id="footer">
    <p>©︎2020 kota</p>
  </div>
</div>
</template>

<style>
.footer-link {
  display: flex;
  justify-content: center;
}

.footer-link-parent {
  background-color: #030065;
  padding: 30px 0px;
  margin-top: 40px;
}

#footer {
  padding: 20px 0px;
  background-color: rgb(19, 19, 35);
}

#footer p {
  display: inline;
  margin: 0;
  color: aliceblue;
  margin-left: 50px;
}

.footer-link a {
  display: block;
  width: 5%;
  margin: 0px 10px;
  padding: 30px;
}

.footer-title {
  width: 70%;
  margin: auto;
  font-family: brandon-grotesque, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 30px;
  color: #ffffff;
  text-align: left;
}

.faicon {
  font-size: 30px;
  color: aliceblue;
}



</style>