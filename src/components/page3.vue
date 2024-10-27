<template>
  <div class="block">
    <h1 class="title">WORKS</h1>
    <div class="banner">
      <i class="el-icon-arrow-down"></i>
    </div>
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