<template>
  <div id="demo">
    <transition-group tag="div" class="list" appear>
      <div class="item" v-for="item of items" v-bind:key="item.name" 
          @click="
          dialogVisible = true,
          dialogname = item.name,
          dialogtext = item.text,
          dialoglang = item.lang,
          dialogpath = item.path,
          dialoggithub = item.github,
          dialogurl = item.link"
          >
        <img 
          :src="item.path" 
          :alt="item.name" 
          width="100%" height="250px"
        >
        <el-card>
          <p class="item-title">{{ item.name }}</p>
          <p class="item-summary">{{ item.text }}</p>
        </el-card>
      </div>
    </transition-group>
    <div>
    <el-dialog
      :title="dialogname"
      :visible.sync="dialogVisible"
      :fullscreen="true"
      width="30%"
      :before-close="handleClose">
      <div class="dialog-box">
        <div>
          <img :src="dialogpath" :alt="dialogname" class="dialog-image" width="40%" height="30%">
        </div>
        <span class="dialogtext">{{ dialogtext }}</span>
        <p>{{ dialoglang }}</p>
        <div v-if="dialogurl != null" class="dialog-icon">
          <a :href="dialogurl" target="_blank" class="jump">サイトへ移動</a>
        </div>
        <div v-if="dialoggithub != null" class="dialog-icon">
          <a :href="dialoggithub" target="_blank" class="jump">GitHub</a>
        </div>
        <el-button @click="dialogVisible = false"><i class="el-icon-close"></i>閉じる</el-button>
      </div>
    </el-dialog>
  </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        { name: 'Slackbot',path: '/img/slackbot.png',text:'Pythonで開発した翻訳Bot', lang: "主な使用言語/フレームワークなど: Python、Slack API", github: null, link: null},
        { name: 'ポートフォリオ',path: '/img/kotaportfolio.png',text: 'HTMLとCSSで製作した最初のポートフォリオ', lang: "主な使用言語/フレームワークなど: HTML・CSS、JavaScript", github: "https://github.com/kotaok/myportfolio", link: null},
        { name: 'WeBrain',path: '/img/webrain.png',text: '「ブレインストーミング」のアイデアを出し合えるチャットアプリ', lang: "主な使用言語/フレームワークなど:Node.js/Express、Firebase Authentication、Realtimedatabase", github: "https://github.com/kotaok/storm-webrain", link: "https://storm-webrain.herokuapp.com/"},
        { name: '柏キャンパスホームページ',path: '/img/kashiwa.png',text: '通学しているキャンパスのホームページ', lang: "主な使用言語/フレームワークなど:PHP", github: null, link: "http://n-kashiwa.main.jp/"},
        { name: 'ポートフォリオ(New)',path: '/img/portfolio_image.png',text: 'Vue.jsを使って開発した新しいポートフォリオ', lang: "主な使用言語/フレームワークなど:Vue.js", github: "https://github.com/kotaok/first_vue", link: null}
      ],
      dialogVisible: false,
      dialogname: null,
      dialogtext: null,
      dialoglang: null,
      dialogpath: null,
      dialoggithub: null,
      dialogurl: null
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap');
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
  width: 95%;
  margin: auto;
}

.item {
  width: 500px;
  height: 375px;
  margin: 20px;
  transition: all 200ms ease;
  overflow: hidden;
  border-radius: 20px;
}

.item p {
  margin: 0px;
  padding: 5px;
}

.item-title {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 500;
  font-size: 19px;
  text-align: left;
  
}

.item-summary {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #797C80;
  text-align: left;
}

.item:hover {
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
  opacity: 0.5;
}

.item img {
  display: block;
  object-fit: cover;
  transition-duration: 0.3s;
}

.item img:hover {
  transform: scale(1.05);
  transition-duration: 0.3s;
}

.dialogtext {
  font-size: 20px;
  color: #000;
}

.dialog-icon {
  margin: 30px 10px;
}

.dialog-box {
  padding-top: 50px;
  padding-bottom: 50px;
  border-radius: 8px;
  border: solid 1px #E0E1E5;
}


@media screen and (max-width: 600px) {
  .item {
    width: 90%;
    height: 100%;
    margin: 30px 10px;
  }

  .item h4, .item p {
    margin: 0px;
    padding: 10px;
    text-align: left;
  }

  .item-title {
    font-size: 19px;
  }

  .item-summary {
    font-size: 15px;
  }

  .dialog-image {
    width: 100%;
    height: 100%;
  }

  .dialog-box {
    padding: 20px 20px 50px 20px;
  }
}

</style>