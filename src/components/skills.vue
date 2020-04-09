<template>
  <div class="skill-block">
    <transition-group tag="div" class="list" appear>
      <div class="skill" stagger="70" v-for="skill of skills" v-bind:key="skill.name">
        <p>{{ skill.name }}
          <el-rate
          v-if="skill.value!=null"
          v-model="skill.value"
          disabled
          show-score
          text-color="#ff9900">
          </el-rate>
        </p>
        <p class="summary">test</p>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      skills: [
        { name: 'HTML&CSS', value: 4},
        { name: 'JavaScript', value: 4},
        { name: 'C++', value: 4},
        { name: 'Python', value: 4},
        { name: 'Node.js/Express', value: 4},
        { name: 'Vue.js', value: 4},
        { name: 'Firebase', value: null},
        { name: 'heroku', value: null},
        { name: 'VSCode', value: null},
        { name: 'VirtualBox', value: null},
        { name: 'vagrant', value: null},
        { name: 'Git', value: null},
        { name: 'GitHub', value: null},
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
  width: 70%;
  margin: 10px 0px;
}

.skill p {
  text-align: left;
  font-size: 18px;
  padding: 5px 35px;
  border-radius: 2px;
  margin: 3px 0px;
}

.summary {
  color: #727272;
}

.skill-block {
  display: flex;
  justify-content: center;
}
</style>