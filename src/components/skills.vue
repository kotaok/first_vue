<template>
  <div class="skill-block">
    <transition-group tag="div" class="list" appear>
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
        { name: 'HTML&CSS', value: 4, summary: 'このサイトのような、ある程度のレイアウトであれば実装可。'},
        { name: 'JavaScript', value: 2.5, summary: '基礎的な知識は理解。'},
        { name: 'C++', value: 2, summary: '競プロで使用。基本的なSTLは理解。'},
        { name: 'Python', value: 1.5, summary: '基本文法は理解。SlackBotの開発経験あり。'},
        { name: 'PHP', value: 1.5, summary: '基礎的な知識は理解。'},
        { name: 'Node.js/Express', value: 2.5, summary: 'チャットwebアプリケーションの開発経験あり。'},
        { name: 'Vue.js', value: 3, summary: 'UIフレームワークを使用した開発、シンプルなSPAの実装経験あり。'},
        { name: 'Git', value: null, summary: '開発に困らない程度は理解。'},
        { name: 'Firebase', value: null, summary: 'Firebase Auth、Realtime databaseの使用経験あり。'},
        { name: 'heroku', value: null, summary: ''},
        { name: 'VSCode', value: null, summary: null},
        { name: 'VirtualBox', value: null, summary: null},
        { name: 'vagrant', value: null, summary: null}
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
  margin: 18px 0px;
}

.skill-title {
  font-family: acumin-pro, sans-serif;
  font-weight: 400;
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
  padding: 5px;
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
    margin: 15px 0px;
    border-bottom: solid 1px #efefef;
  }

  .skill-title {
    padding: 5px 0px;
  }
}

</style>