<template>
  <div id="demo">
    <transition-group tag="div" class="list" appear>
      <div class="item" stagger="70" v-for="item of items" v-bind:key="item.name">
        <img :src="item.path" :alt="item.name" width="100%" height="200px">
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        { name: 'slackbot',path: '/img/slackbot.png'},
        { name: 'portfoliov1',path: '/img/kotaportfolio.png'},
        { name: 'webrain',path: '/img/webrain.png'},
        { name: 'kashiwa',path: '/img/kashiwa.png'}
      ],
    };
  }
};
</script>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity 1s;
}

.v-enter, .v-leave-to {
  opacity: 0;
}

.list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 65%;
  margin: auto;
}

.item {
  width: 35%;
  height: 100%;
  border: solid 1px #c4c4c4;
  margin: 30px 10px;
}

.item img {
  object-fit: cover;
}


</style>