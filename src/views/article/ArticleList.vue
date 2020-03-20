<template>
  <div class="article">
    <ul>
      <li @click="goDetail(item._id)" v-for="(item,index) in articleList" :key="index">
        <h3>{{item.title}}</h3>
        <div>{{item.types}}</div>
        <div>{{item.time}}</div>
        <div>description:{{item.description}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
export default {
  data() {
    return {
      articleList: [],
      imgUrl:""
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
      }).then(res => {
       // console.log(res);
        this.articleList = res.data;
      }).catch(()=>{

      });
    },
    goDetail(id){
        this.$router.push(`/articleDetail/${id}`)
        console.log(id)
    }
  }
};
</script>

<style lang="scss" scoped>
.article {
  margin-left: 1rem;
  padding: 0 .1rem 0 .1rem;
}
ul{
    li{
        margin-bottom: 20px;
        border-bottom: 1px solid rgba($color: #ddd, $alpha: .8);
    }
    li:hover{
        cursor: pointer;
    }
}
</style>