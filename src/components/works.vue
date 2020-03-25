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
          dialogtext = item.text,
          dialoglang = item.lang"
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
      <span class="dialogtext">{{ dialogtext }}</span>
      <p>{{ dialoglang }}</p>
    </el-dialog>
  </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        { name: 'slackbot',path: '/img/slackbot.png',text:'PythonのSlackBotライブラリを使って開発した翻訳Bot。', lang: "主な使用言語/フレームワークなど: Python、Slack API"},
        { name: 'portfolio_ver1',path: '/img/kotaportfolio.png',text: 'HTMLとCSSの練習を兼ねて製作した最初のポートフォリオ。cssのflexboxを学び、レスポンシブ対応のレイアウトを構成できた。', lang: "主な使用言語/フレームワークなど: HTML・CSS、JavaScript"},
        { name: 'webrain',path: '/img/webrain.png',text: '「ブレインストーミング」のアイデアを出し合えるチャットアプリ。「N予備校 Webアプリケーションコンテスト2019冬」提出作品', lang: "主な使用言語/フレームワークなど:Node.js/Express、Firebase Authentication、Realtimedatabase"},
        { name: 'kashiwa',path: '/img/kashiwa.png',text: '通学しているキャンパスのホームページ。', lang: "主な使用言語/フレームワークなど:PHP"},
        { name: 'portfolio_ver2',path: '/img/portfolio_2.png',text: 'Vue.jsを使って開発した新しいポートフォリオ。', lang: "主な使用言語/フレームワークなど:Vue.js"}
      ],
      dialogVisible: false,
      dialogname: "test",
      dialogtext: "test",
      dialoglang: "test",
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
  transition: all 200ms ease;
}

.item img:hover {
  opacity: 0.5;
}

.dialogtext {
  font-size: 20px;
  color: #000;
}


</style>