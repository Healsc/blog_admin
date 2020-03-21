<template>
  <div class="works">
    <ul>
      <li  v-for="(item,index) in worksList" :key="index">
        <h3>{{item.title}}</h3>
        <div>
          <span>{{item.time}}</span>
          <span class="btn">
            <el-button @click="goDetail(item._id)" type="success" size="mini">编辑</el-button>
            <el-button @click="delWork(item._id)" type="danger" size="mini">删除</el-button>
          </span>
        </div>
        <p>{{item.description}}</p>
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
      worksList: []
    };
  },
  created() {
    this.getWorksList();
  },
  methods: {
    goDetail(id) {
      this.$router.push(`/worksDetail/${id}`);
    },
    getWorksList() {
      axios({
        url: url.getWorksList,
        method: "get"
      })
        .then(res => {
          this.worksList = res.data;
        })
        .catch(() => {
          MessageBox.alert("获取失败");
        });
    },
    delWork(id) {
      MessageBox.confirm("确定删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          axios({
            url: url.delWork,
            method: "post",
            data: {
              id: id
            }
          }).then(() => {
            this.getWorksList();
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
    }
  }
};
</script>

<style lang="scss" scoped>
.works {
  margin-left: 1rem;
  margin-top: 60px;
  padding: 0.1rem;
  ul {
    li {
      margin-bottom: 20px;
      border-bottom: 1px solid rgba($color: #ddd, $alpha: 0.6);
      .btn {
        /*  margin-right: 1rem; */
        position: absolute;
        right: 1rem;
      }
    }
  }
}
</style>