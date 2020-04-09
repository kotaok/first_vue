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
        timestamp: '2019年6月'
      }, {
        content: 'ITパスポート合格',
        timestamp: '2019年12月'
      }, {
        content: 'ポートフォリオの作成',
        timestamp: '2019年12月'
      }, {
        content: 'チャットwebアプリの開発',
        timestamp: '2020年1月'
      }, {
        content: 'キャンパスホームページの開発',
        timestamp: '2020年3月'
      }, {
        content: 'ポートフォリオの再作成',
        timestamp: '2020年4月'
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

</style>