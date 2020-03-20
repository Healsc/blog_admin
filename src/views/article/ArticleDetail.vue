<template>
  <div class="article">
    <div class="part">
      <span>author</span>
      <span>{{articleDetail.author}}</span>
      <input v-model="author" type="text" placeholder="请输入修改后内容" />
      <el-button @click="updataAuthor(articleDetail.author,author)" type="success" size="mini">保存</el-button>
    </div>
    <div class="part">
      <span>time</span>
      <span>{{articleDetail.time}}</span>
      <input type="text" v-model="time" placeholder="请输入修改后内容" />
      <el-button @click="updataTime(articleDetail.time,time)" type="success" size="mini">保存</el-button>
    </div>
    <div class="part">
      <span>types</span>
      <span>{{articleDetail.types}}</span>
      <input v-model="types" type="text" placeholder="请输入修改后内容" />
      <el-button @click="updataTypes(articleDetail.types,types)" type="success" size="mini">保存</el-button>
    </div>

    <div class="long-part">
      <span>title</span>
      <p>{{articleDetail.title}}</p>
      <el-input type="textarea" v-model="title" autosize placeholder="请输入更改后内容" />
      <el-button @click="updataTitle(articleDetail.title,title)" type="success" size="mini">保存</el-button>
    </div>
    <div class="long-part">
      <span>bcImgUrl</span>
      <p>{{articleDetail.bcImgUrl}}</p>
      <el-input type="textarea" v-model="bcImgUrl" autosize placeholder="请输入更改后内容" />
      <el-button
        @click="updataBcImgUrl(articleDetail.bcImgUrl,bcImgUrl)"
        type="success"
        size="mini"
      >保存</el-button>
    </div>
    <div class="long-part">
      <span>description</span>
      <p>{{articleDetail.description}}</p>
      <el-input type="textarea" v-model="description" autosize placeholder="请输入更改后内容" />
      <el-button
        @click="updatadescription(articleDetail.description,description)"
        type="success"
        size="mini"
      >保存</el-button>
    </div>
    <div class="long-part">
      <span>Introduction</span>
      <el-input type="textarea" v-model="Introduction" autosize placeholder="请输入更改后内容" />
      <el-button
        type="success"
        @click="updataIntroduction(articleDetail.Introduction,Introduction)"
        size="mini"
      >保存</el-button>
    </div>
    <div class="long-part">
      <span>content</span>
    
    <p>{{articleDetail.content}}</p>
      <p id="before-content"></p>
      <textarea
        id="content"
        v-model="content"
        style="min-height:1rem;width:100%;"
        v-on:keyup="compile()"
      ></textarea>
      <!--  <el-input type="textarea" @keyup="compile" v-model="content" autosize placeholder="请输入更改后内容" /> -->
      <el-button type="success" @click="updataContent(articleDetail.content,content)" size="mini">保存</el-button>
    </div>

    <div id="result"></div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
import showdown from "showdown";
export default {
  data() {
    return {
      articleDetail: "",
      id: this.$route.params.id,
      author: "",
      time: "",
      types: "",
      title: "",
      bcImgUrl: "",
      description: "",
      Introduction: "",
      content: ""
    };
  },
  methods: {
    beforeCompile() {
      let text = this.articleDetail.content;
      var converter = new showdown.Converter();
      var html = converter.makeHtml(text);
      document.getElementById("before-content").innerHTML = html;
    },
    compile() {
      /* var text = document.getElementById("content").value; */
      var text = document.getElementById("content").value;
      var converter = new showdown.Converter();
      var html = converter.makeHtml(text);
      document.getElementById("result").innerHTML = html;
    },
    getArticleDetail() {
      axios({
        url: url.getArticleDetail,
        method: "get",
        params: {
          id: this.id
        }
      }).then(res => {
        this.articleDetail = res.data;
        this.beforeCompile();
      });
    },
    updataIntroduction(before, after) {
      axios({
        url: url.updataIntroduction,
        method: "post",
        data: {
          before: before,
          after: after,
          id: this.id
        }
      }).then(() => {
        this.getArticleDetail();
        this.Introduction = "";
      });
    },
    updataAuthor(before, after) {
      axios({
        url: url.updataAuthor,
        method: "post",
        data: {
          id: this.id,
          before: before,
          after: after
        }
      })
        .then(() => {
          this.author = "";
          this.getArticleDetail();
        })
        .catch(err => {
          console.log(err);
        });
    },
    updataTime(before, after) {
      axios({
        url: url.updataTime,
        method: "post",
        data: {
          before: before,
          after: after,
          id: this.id
        }
      })
        .then(() => {
          this.time = "";
          this.getArticleDetail();
        })
        .catch(err => {
          console.log(err);
        });
    },
    updataTypes(before, after) {
      axios({
        url: url.updataTypes,
        method: "post",
        data: {
          before: before,
          after: after,
          id: this.id
        }
      }).then(() => {
        this.types = "";
        this.getArticleDetail();
      });
    },
    updataTitle(before, after) {
      axios({
        url: url.updataTitle,
        method: "post",
        data: {
          before: before,
          after: after,
          id: this.id
        }
      }).then(() => {
        this.title = "";
        this.getArticleDetail();
      });
    },
    updataBcImgUrl(before, after) {
      axios({
        url: url.updataBcImgUrl,
        method: "post",
        data: {
          before: before,
          after: after,
          id: this.id
        }
      }).then(() => {
        this.bcImgUrl = "";
        this.getArticleDetail();
      });
    },
    updatadescription(before, after) {
      axios({
        url: url.updatadescription,
        method: "post",
        data: {
          before: before,
          after: after,
          id: this.id
        }
      }).then(() => {
        this.getArticleDetail();
        this.description = "";
      });
    },
    updataContent(before, after) {
      axios({
        url: url.updataContent,
        method: "post",
        data: {
          before: before,
          after: after,
          id: this.id
        }
      }).then(() => {
        this.content = "";
        document.getElementById("result").innerHTML = "";
        this.getArticleDetail();
      });
    }
  },
  created() {
    this.getArticleDetail();
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.article {
  margin-left: 1rem;
  padding: 0.1rem;
}
.part {
  margin-bottom: 10px;
  display: flex;
  span {
    width: 1rem;
  }
  input {
    width: 1.2rem;
  }
}
.long-part {
  margin-bottom: 20px;
  span {
    font-size: 16px;
    font-weight: 600;
  }
}
#before-content {
  margin-top: 30px;
  margin-bottom: 30px;
}
#result {
  margin-bottom: 30px;
}
</style>