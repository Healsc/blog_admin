<template>
  <div class="works">
    <div class="part">
      <span>标题</span>
      <el-input v-model="title" type="textarea" autosize placeholder="请输入" />
    </div>
    <div class="part">
      <span>时间</span>
      <el-input v-model="time" type="textarea" autosize placeholder="请输入" />
    </div>
    <div class="part">
      <span>描述</span>
      <el-input v-model="description" type="textarea" autosize placeholder="请输入" />
    </div>
    <div class="part">
      <span>地址</span>
      <el-input v-model="url" type="textarea" autosize placeholder="请输入" />
    </div>
    <div class="part">
      <span>图片</span>
      <el-input v-model="bcurl" type="textarea" autosize placeholder="请输入" />
    </div>
    <el-button @click="addWork()" class="btn" type="success" size="medium ">添加</el-button>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
//import { MessageBox } from "element-ui";
import { Message } from "element-ui";
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(['userInfo'])
    },
    created(){
        if(JSON.stringify(this.userInfo) === "{}"){
            this.$router.push('/')
        }
    },
  data() {
    return {
      title: "",
      time: "",
      description: "",
      url: "",
      bcurl: ""
    };
  },
  methods: {
    addWork() {
      axios({
        url: url.addWork,
        method: "post",
        data: {
          title: this.title,
          time: this.time,
          description: this.description,
          url: this.url
        }
      })
        .then(res => {
          if (res.data.code == 200) {
            Message({
              type: "success",
              message: "添加成功!"
            });
            this.title = "";
            this.time = "";
            this.description = "";
            this.url = "";
            setTimeout(()=>{
                this.$router.push('/worksList')
            },1000)
          }
        })
        .catch(() => {
          Message({
            type: "info",
            message: "添加失败!"
          });
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
.part {
  margin-bottom: 20px;
}
.btn {
  margin-left: 2.4rem;
}
</style>