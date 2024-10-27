<template>
  <div class="skill-block">
    <transition-group tag="div" class="skilllist" appear>
      <div class="skill" v-for="skill of skills" v-bind:key="skill.name">
        <p class="skill-title">{{ skill.name }}
          <el-rate
          v-if="skill.value!=null"
          v-model="skill.value"
          disabled
          show-score
          text-color="#ff9900">
          </el-rate>
        </p>
        <p class="summary" v-if="skill.summary!=null">{{skill.summary}}</p>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      skills: [
        { name: 'HTML&CSS', value: null, summary: null},
        { name: 'JavaScript', value: null, summary: null },
        { name: 'C++', value: null,summary: null },
        { name: 'Python', value: null, summary: null },
        { name: 'Vue.js', value: null, summary: null },
        { name: 'Git', value: null, summary: null },
        { name: 'Firebase', value: null, summary: null },

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
  width: 100%;
  margin: 30px 0px;
}

.skill-title {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 500;
  font-style: normal;
  text-align: left;
  font-size: 19px;
  padding: 5px 35px;
  border-radius: 2px;
  margin: 3px 0px;
  letter-spacing: 0.05em;
}

.summary {
  text-align: left;
  font-size: 18px;
  padding: 5px 35px;
  margin: 3px 0px;
  color: #444444;
}

.skill-block {
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 600px) {
  .skill {
    width: 80%;
    margin: auto;
    margin-bottom: 50px;
    border-bottom: solid 1px #efefef;
  }

  .skill-title {
    padding: 5px 0px;
  }

  .summary {
    font-size: 16px;
    padding: 5px 3px;
  }

}

</style>