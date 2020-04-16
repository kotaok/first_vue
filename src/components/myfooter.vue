<template>
<div>
  <div class="footer-link">
    <a href="https://github.com/kotaok" target="_blank"><font-awesome-icon :icon="['fab','github']" size="2x" color="#ffffff"/></a>
    <a href="https://qiita.com/lemon_melon" target="_blank"><font-awesome-icon :icon="['fas','search']" size="2x" color="#ffffff"/></a>
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
  margin-top: 40px;
  padding: 70px 0px;
  background-color: #030065;
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
  font-family: brandon-grotesque, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  color: #ffffff;
}

.faicon {
  font-size: 30px;
  color: aliceblue;
}



</style>