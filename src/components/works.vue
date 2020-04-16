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
          width="100%" height="200px"
        >
        <h4>{{ item.name }}</h4>
        <p>{{ item.text }}</p>
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
  width: 100%;
  margin: auto;
}

.item {
  width: 35%;
  height: 350px;
  margin: 30px 10px;
  border: solid 1px #eaeaea;
  transition: all 200ms ease;
}

.item h4, .item p {
  margin: 0px;
  padding: 10px;
}

.item h4 {
  font-size: 20px;
}

.item p {
  font-size: 15px;
  color: #797C80;
}

.item:hover {
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
  opacity: 0.5;
}

.item img {
  object-fit: cover;
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
    width: 75%;
    height: 100%;
    margin: 30px 10px;
  }

  .item h4, .item p {
    margin: 0px;
    padding: 10px;
    text-align: left;
  }

  .item h4 {
    font-size: 18px;
  }

  .item p {
    font-size: 15px;
    color: #797C80;
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