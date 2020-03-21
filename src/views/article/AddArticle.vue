<template>
  <div class="article">
   
    <div class="main-content">
      <div class="part">
        <span>author</span>
        <input type="text" v-model="author" />
      </div>
      <div class="part">
        <span>time</span>
        <input type="text" v-model="time" />
      </div>
      <div class="part">
        <span>types</span>
        <input type="text" v-model="type" />
      </div>
      <div class>
        <span>title</span>
        <el-input type="textarea" v-model="title" autosize placeholder="请输入内容" />
      </div>
      <div>
        <span>bcImgUrl</span>
        <el-input type="textarea" v-model="bcImgUrl" autosize placeholder="请输入内容" />
      </div>
      <div>
        <span>description</span>
        <el-input type="textarea" v-model="description" autosize placeholder="请输入内容" />
      </div>
      <div>
        <span>Introduction</span>
        <el-input type="textarea" v-model="introduction" autosize placeholder="请输入内容" />
      </div>
      <div>
        <span>content</span>
        <textarea
          id="content"
          v-model="content"
          style="min-height:1rem;width:100%;"
          v-on:keyup="compile()"
        ></textarea>
        <!-- <el-input v-on:keyup="compile()" type="textarea" v-model="content" autosize placeholder="请输入内容"  /> -->
      </div>
      <el-button class="add-btn" @click="addArticle" type="success" size="medium">添加</el-button>
    </div>
    <div id="result"></div>
  </div>
</template>

<script>
import showdown from "showdown";
import axios from "axios";
import url from "@/service.config.js";
import { MessageBox } from "element-ui";
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['userInfo'])
  },
  data() {
    return {
      type: "",
      author: "",
      time: "",
      title: "",
      bcImgUrl: "",
      introduction: "",
      content: "",
      description: "",
      articleList: ""
    };
  },
  created() {
    if(JSON.stringify(this.userInfo) === "{}"){
      this.$router.push('/')
    }
  },
  methods: {
    /* zhuanhuan() {
      var content = this.articleList.content;
      var converter = new showdown.Converter();
      var html = converter.makeHtml(content);
      document.getElementById("contents").innerHTML = html;
    }, */
    compile() {
     
      /* var text = document.getElementById("content").value; */
      var text = document.getElementById("content").value;
      var converter = new showdown.Converter();
      var html = converter.makeHtml(text);
      document.getElementById("result").innerHTML = html;
    },
    get() {
      var converter = new showdown.Converter();
      converter.setOption("tasklists", true);
      //支持显示table，默认false
      converter.setOption("tables", true);
      /* underline */
      converter.setOption("tablesHeaderId", true);
      /* headerLevelStart */
      converter.setOption("headerLevelStart", true);
      converter.setOption("underline", true);
      //支持图片大小设置，默认为false
      converter.setOption("parseImgDimensions", true);
      this.test = converter.makeHtml(this.datalist);
      document.getElementById("markdown").innerHTML = this.test;
    },
    addArticle() {
      console.log(this.type);
      axios({
        url: url.addArticle,
        method: "post",
        data: {
          content: this.content,
          title: this.title,
          types: this.type,
          author: this.author,
          time: this.time,
          bcImgUrl: this.bcImgUrl,
          Introduction: this.introduction,
          description: this.description
        }
      })
        .then(res => {
          if (res.data.code == 200) {
            this.content = "";
            this.title = "";
            this.author = "";
            this.time = "";
            this.bcImgUrl = "";
            this.description = "";
            this.Introduction = "";
            this.content = "";
            setTimeout(() => {
              this.$router.push("/articleList");
            }, 2000);
          }
        })
        .catch(() => {
          MessageBox.alert("添加失败");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.article {
  margin-left: 1rem;
  padding: 0.1rem;
  font-size: 16px;
  margin-top: 60px;
}
.part {
  margin-bottom: 10px;
  display: flex;
  span {
    width: 0.6rem;
  }
}
.add-btn{
    margin-left: 40%;
}
</style>