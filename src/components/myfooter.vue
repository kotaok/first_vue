<template>
  <div id="footer">
    <p>©︎2020 kota</p>
    <a href="https://github.com/kotaok" target="_blank"><font-awesome-icon :icon="['fab','github']" size="2x" color="#ffffff"/></a>
    <a href="https://qiita.com/lemon_melon" target="_blank"><font-awesome-icon :icon="['fas','search']" size="2x" color="#ffffff"/></a>
  </div>
</template>

<style>
#footer {
  margin-top: 40px;
  padding: 30px 0px;
  background-color: rgb(34, 34, 63);
}
#footer p {
  display: inline;
  margin: 0;
  color: aliceblue;
  margin-left: 50px;
}

#footer a {
  margin: 0px 10px;
}

.faicon {
  font-size: 30px;
  color: aliceblue;
}



</style>