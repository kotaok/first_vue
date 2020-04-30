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
        <p>主な使用言語/フレームワークなど:{{ dialoglang }}</p>
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
import Items from '../assets/works_data.json'
export default {
  data: function() {
    return {
      items: Items,
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
  transition: opacity 0.5s;
}

.v-enter, .v-leave-to {
  opacity: 0;
}

.list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #efefef;
  width: 100%;
  margin: auto;
  margin-top: 50px;
  padding-top: 30px;
}

.item {
  width: 500px;
  height: 375px;
  margin: 20px 20px 100px;
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
  box-shadow: 0 0 30px rgba(0,0,0,0.2);
  transform: translateY(-10px);
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

.el-card__body {
  height: 100px;
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