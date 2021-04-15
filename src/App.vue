<template>
  <div>
    <myheader></myheader>
    <div id="nav">
      <router-link to="/" class="navmenu">TOP</router-link>
      <router-link to="/about" class="navmenu">ABOUT</router-link>
      <router-link to="/works" class="navmenu">WORKS</router-link>
    </div>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
    <myfooter></myfooter>
  </div>
</template>

<script>
export default {

}
</script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
import myheader from './components/myheader'
import myfooter from './components/myfooter'


export default {
  name: 'App',
  components: {
    myheader,
    myfooter
  },
  data () {
    return {
    }
  },
  watch: {
    '$route' (newValue,oldValue) {
      this.$nextTick(() => {
        scrollTo(0,600)
      })
    }
  }
}

</script>



<style>

@import url("https://use.typekit.net/eka7tiw.css");
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap');

html,body {
  font-family: 'Noto Sans JP',メイリオ,Osaka,Arial,Verdana
  ,"ＭＳ Ｐゴシック",sans-serif;
  font-weight: 400;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 100;
}

.navmenu {
  font-family: brandon-grotesque, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-weight: bold;
  padding: 20px 35px;
  margin: 0px 5px;
  text-decoration: none;
  color: #22223F;
  border-bottom: solid 2px #22223F;
  background-color: rgba(248, 249, 250, 0.733);
  transition: all 200ms ease;
}

.navmenu:hover {
  border-bottom: solid 2px #030065;
  -webkit-box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  -ms-box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  color: #e2e2e2;
  background-color: #06006d;
}

body {
  margin: 0;
  background-color: #F8F9FA;
}

.v-enter-active, .v-leave-active {
  transition: opacity .3s;
}

.v-enter, .v-leave-to {
  opacity: 0;
}

</style>

