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
        content: 'ITパスポート合格',
        timestamp: '2019年12月',
        image: '/img/develop.jpg'
      }, {
        content: 'ポートフォリオの作成',
        timestamp: '2019年12月',
        image: '/img/history_3.png'
      }, {
        content: 'チャットwebアプリの開発',
        timestamp: '2020年1月',
        image: '/img/history_4.png'
      }, {
        content: 'ポートフォリオの再作成',
        timestamp: '2020年4月',
        image: '/img/history_6.png'
      }, {
        content: '異能vation プロトタイプ作成',
        timestamp: '2020年6月',
        image: '/img/develop.jpg'
      }]
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