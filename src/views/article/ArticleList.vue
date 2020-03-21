<template>
  <div class="article">
    <ul>
      <li v-for="(item,index) in articleList" :key="index">
        <h3>{{item.title}}</h3>
        <div>
          {{item.types}}
          <span class="btn">
            <el-button @click="goDetail(item._id)" type="success" size="mini">编辑</el-button>
            <el-button @click="delArticle(item._id)" type="danger" size="mini">删除</el-button>
          </span>
        </div>
        <div>{{item.time}}</div>
        <div>description:{{item.description}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
import { MessageBox } from "element-ui";
import { Message } from "element-ui";
export default {
  data() {
    return {
      articleList: [],
      imgUrl: ""
    };
  },
  created() {
    this.getArticleList();
  },
  methods: {
    getArticleList() {
      axios({
        url: url.getArticleList,
        method: "get"
      })
        .then(res => {
          // console.log(res);
          this.articleList = res.data;
        })
        .catch(() => {});
    },
    delArticle(id) {
      MessageBox.confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios({
            url: url.delArticle,
            method: "post",
            data: {
              id: id
            }
          }).then(() => {
            this.getArticleList();
            Message({
              type: "success",
              message: "删除成功!"
            });
          });
        })
        .catch(() => {
          Message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    goDetail(id) {
      this.$router.push(`/articleDetail/${id}`);
      console.log(id);
    }
  }
};
</script>

<style lang="scss" scoped>
.article {
  margin-left: 1rem;
  padding: 0 0.1rem 0 0.1rem;
  margin-top: 60px;
}
ul {
  li {
    margin-bottom: 20px;
    border-bottom: 1px solid rgba($color: #ddd, $alpha: 0.8);
    .btn {
      position: absolute;
      right: 1rem;
    }
  }
}
</style>