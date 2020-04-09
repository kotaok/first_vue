<template>
  <div class="skill-block">
    <transition-group tag="div" class="list" appear>
      <div class="skill" stagger="70" v-for="skill of skills" v-bind:key="skill.name">
        <p>{{ skill.name }}</p>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      skills: [
        { name: 'HTML&CSS'},
        { name: 'JavaScript'},
        { name: 'C++'},
        { name: 'Python'},
        { name: 'Node.js/Express'},
        { name: 'Vue.js'},
        { name: 'Firebase'},
        { name: 'heroku'},
        { name: 'VSCode'},
        { name: 'VirtualBox'},
        { name: 'vagrant'},
        { name: 'Git'},
        { name: 'GitHub'},
      ],
      color: "#1FA0FF"
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

.skill {
  width: 60%;
  margin: 8px 0px;
}

.skill p {
  text-align: left;
  font-size: 18px;
  padding: 10px 35px;
  border-radius: 2px;
  margin: 3px 0px;
}

.skill-block {
  display: flex;
  justify-content: center;
}
</style>