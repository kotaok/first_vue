<template>
<div class="about-block">
  <p><font-awesome-icon :icon="['far','calendar-alt']" size="2x"/></p>
  <p class="text">これまでの活動</p>
  <div>
  <el-timeline :reverse="reverse">
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      >
      <el-avatar :src="activity.image" :size="150"></el-avatar>
      <el-card>
        <p class="activity-text">{{activity.content}}</p>
        <p>{{activity.timestamp}}</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
  </div>
</div>
  
</template>
<script>
export default {
  data: function() {
    return {
      reverse: false,
      activities: [{
        content: 'プログラミングの学習を開始',
        timestamp: '2019年6月',
        image: '/img/history_1.png'
      }, {
        content: 'ITパスポート 合格',
        timestamp: '2019年12月',
        image: '/img/develop.jpg'
      }, {
        content: 'ポートフォリオの作成',
        timestamp: '2019年12月',
        image: '/img/history_3.png'
      }, {
        content: 'ポートフォリオv2作成',
        timestamp: '2020年4月',
        image: '/img/history_6.png'
      },{
        content: 'AtCoder Algorithm Rating400到達',
        timestamp: '2020年6月',
        image: '/img/develop.jpg'
      }, {
        content: '応用情報技術者試験 合格',
        timestamp: '2023年12月',
        image: '/img/develop.jpg'
      },{
        content: 'AtCoder Algorithm Rating800到達',
        timestamp: '2023年12月',
        image: '/img/develop.jpg'
      }, ]
    };
  }
}
</script>
<style scoped> 
.history-block {
  width: 70%;
  margin: auto;
  margin-top: 200px;
}

.el-timeline-item {
  padding-bottom: 35px;
}

.activity-text {
  font-size: 18px;
}

.el-avatar--icon {
  margin-bottom: 35px;
}

</style>