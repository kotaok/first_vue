<template>
  <div class="block">
    <h1 class="title">Works</h1>
    <p>これまでに製作した作品</p>
    <myworks></myworks>
  </div>
</template>

<script>
import myworks from './works'
export default {
  components: {
    myworks
  },
  data: function() {
    return {
      show: true
    };
  }
};

</script>

<style>
  .v-enter-active, .v-leave-active {
    transition: opacity .5s;
  }
  .v-enter, .v-leave-to {
    opacity: 0;
  }
</style>