<template>
  <div id="demo">
    <transition-group tag="div" class="list" appear>
      <div class="item" stagger="70" v-for="item of items" v-bind:key="item.name">
        <p v-if="item.colors==color||color=='all'">{{ item.name }}</p>
      </div>
    </transition-group>
    <button @click="color='red'">red</button>
    <button @click="color='all'">reset</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        { name: 'いちご',colors: 'red'},
        { name: 'りんご',colors: 'red'},
        { name: 'みかん',colors: 'orange'},
        { name: 'スイカ',colors: 'green'},        
        { name: 'メロン',colors: 'green'}   
      ],
      color: "all"
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


</style>