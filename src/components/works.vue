<template>
  <div id="demo">
    <transition-group tag="div" class="list" appear>
      <div class="item" stagger="70" v-for="item of items" v-bind:key="item.name">
        <img 
          :src="item.path" 
          :alt="item.name" 
          @click="
          dialogVisible = true,
          dialogname = item.name,
          dialogtext = item.text"
          width="100%" height="200px"
        >
      </div>
    </transition-group>
    <div>
    <el-dialog
      :title="dialogname"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>{{ dialogtext }}</span>
    </el-dialog>
  </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        { name: 'slackbot',path: '/img/slackbot.png',text:'PythonのSlackBotライブラリを使って開発した翻訳Bot'},
        { name: 'portfolio_ver1',path: '/img/kotaportfolio.png',text: 'HTMLとCSSの練習を兼ねて製作した最初のポートフォリオ'},
        { name: 'webrain',path: '/img/webrain.png',text: 'Node.js/Express,Firebaseを使って開発した「ブレインストーミング」のアイデアを出し合えるチャットアプリ'},
        { name: 'kashiwa',path: '/img/kashiwa.png',text: '通学しているN高柏キャンパスのホームページ開発'},
        { name: 'portfolio_ver2',path: '/img/portfolio_2.png',text: 'Vue.jsを使って開発した新しいポートフォリオ'}
      ],
      dialogVisible: false,
      dialogname: "test",
      dialogtext: "test",
    };
  },
  methods: {
    handleClose(done) {
      done();
    }
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

.list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 65%;
  margin: auto;
}

.item {
  width: 35%;
  height: 100%;
  border: solid 1px #c4c4c4;
  margin: 30px 10px;
}

.item img {
  object-fit: cover;
}


</style>