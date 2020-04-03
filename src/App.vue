<template>
  <div>
    <myheader></myheader>
    <div id="nav">
      <router-link to="/" class="navmenu">TOP</router-link>
      <router-link to="/page2" class="navmenu">ABOUT</router-link>
      <router-link to="/page3" class="navmenu">WORKS</router-link>
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
}

</script>



<style>

html,body {
font-family:"ヒラギノ角ゴ Pro W3",メイリオ,Osaka,Arial,Verdana
,"ＭＳ Ｐゴシック",sans-serif;
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
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 100;
}

.navmenu {
  font-weight: bold;
  padding: 15px 25px;
  margin: 0px 5px;
  text-decoration: none;
  color: #22223F;
  border-bottom: solid 2px #22223F;
  background-color: rgba(248, 249, 250, 0.733);
  transition: all 300ms ease;
}

.navmenu:hover {
  border-bottom: solid 2px #15d636;
  -webkit-box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  -ms-box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
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

