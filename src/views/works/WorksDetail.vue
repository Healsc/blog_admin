<template>
  <div class="works">
    <div>
      <div class="part">
        <h4>标题</h4>
        <h3>{{worksDetail.title}}</h3>
        <el-input v-model="title" type="textarea" autosize placeholder="请输入更改后内容" />
        <el-button @click="updataWorkTitle" type="success" size="mini">保存</el-button>
      </div>

      <div class="part">
        <h4>时间：</h4>
        <div>{{worksDetail.time}}</div>
        <el-input v-model="time" type="textarea" autosize placeholder="请输入更改后内容" />
        <el-button @click="updataWorkTime" type="success" size="mini">保存</el-button>
      </div>

      <div class="part">
        <h4>项目描述：</h4>
        <p>{{worksDetail.description}}</p>
        <el-input v-model="description" type="textarea" autosize placeholder="请输入更改后内容" />
        <el-button @click="updataWorkDescription" type="success" size="mini">保存</el-button>
      </div>

      <div class="part">
        <h4>项目地址：</h4>
        <p>{{worksDetail.url}}</p>
        <el-input v-model="url" type="textarea" autosize placeholder="请输入更改后内容" />
        <el-button @click="updataWorkUrl" type="success" size="mini">保存</el-button>
      </div>
      <div class="part">
        <h4>图片：</h4>
        <ul>
          <li v-for="(item,index) in bcImg" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
export default {
  data() {
    return {
      id: this.$route.params.id,
      worksDetail: "",
      bcImg: "",
      title: "",
      time: "",
      description: "",
      url: ""
    };
  },
  created() {
    this.getWorkDetail();
  },
  methods: {
    getWorkDetail() {
      axios({
        url: url.getWorkDetail,
        method: "get",
        params: {
          id: this.id
        }
      }).then(res => {
        this.worksDetail = res.data;
        if (res.data.images) {
          this.bcImg = res.data.images;
        }
      });
    },
    updataWorkTitle() {
      axios({
        url: url.updataWorkTitle,
        method: "post",
        data: {
          id: this.id,
          info: this.title
        }
      }).then(res => {
        console.log(res);
        this.getWorkDetail();
        this.title = "";
      });
    },
    updataWorkTime() {
      axios({
        url: url.updataWorkTime,
        method: "post",
        data: {
          id: this.id,
          info: this.time
        }
      }).then(() => {
        this.getWorkDetail();
        this.time = "";
      });
    },
    updataWorkDescription() {
      axios({
        url: url.updataWorkDescription,
        method: "post",
        data: {
          id: this.id,
          info: this.description
        }
      }).then(() => {
        this.getWorkDetail();
        this.description = "";
      });
    },
    updataWorkUrl() {
      axios({
        url: url.updataWorkUrl,
        method: "post",
        data: {
          id: this.id,
          info: this.url
        }
      }).then(() => {
        this.getWorkDetail();
        this.url = "";
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.works {
  margin-left: 1rem;
  margin-top: 60px;
  padding: 0.1rem;
}
.time {
  margin-bottom: 20px;
}
.part {
  margin-bottom: 20px;
}
</style>