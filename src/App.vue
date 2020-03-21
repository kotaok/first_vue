<template>
  <div>
    <myheader></myheader>
    <div id="nav">
      <router-link to="/" class="navmenu">Top</router-link>
      <router-link to="/page2" class="navmenu">About</router-link>
      <router-link to="/page3" class="navmenu">Works</router-link>
    </div>
    <router-view></router-view>
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
}

.navmenu {
  font-weight: bold;
  padding: 20px;
  margin: 0px 5px;
  text-decoration: none;
  color: #000000;
  border-radius: 35px 5px 35px 5px;
  transition: all 300ms ease;
}

.navmenu:hover {
  background-color: rgba(207, 233, 236, 0.767);
}

</style>
