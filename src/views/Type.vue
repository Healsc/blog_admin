<template>
  <div class="type">
    <ul>
      <li v-for="(item,index) in types" :key="index">
        <span class="type-info">{{item.typeName}}</span>

        <el-button class="type-btn" @click="delType(item.typeName)" type="danger" size="mini">删除</el-button>
      </li>
    </ul>
    <div class="add-type">
      <input class="add-type-info" type="text" v-model="addTypeName" />
      <el-button class="add-type-btn" @click="addType()" type="success" size="mini">添加</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
import { MessageBox } from "element-ui";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["userInfo"])
  },
  data() {
    return {
      types: [],
      addTypeName: ""
    };
  },
  created() {
    if (JSON.stringify(this.userInfo) === "{}") {
      this.$router.push("/");
    } else {
      this.getTypes();
    }
  },
  methods: {
    getTypes() {
      axios({
        url: url.getTypes,
        method: "get"
      })
        .then(res => {
          this.types = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    delType(typeName) {
      axios({
        url: url.delType,
        method: "post",
        data: {
          typeName: typeName
        }
      })
        .then(() => {
          this.getTypes();
        })
        .catch(() => {
          MessageBox.alert("删除失败");
        });
    },
    addType() {
      if (!this.addTypeName) {
        MessageBox.alert("请输入");
      } else {
        axios({
          url: url.addType,
          method: "post",
          data: {
            typeName: this.addTypeName
          }
        })
          .then(() => {
            this.addTypeName = "";
            this.getTypes();
          })
          .catch(() => {
            MessageBox.alert("添加失败");
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.type {
  margin-left: 1rem;
  padding: 0.1rem;
  margin-top: 60px;
}
ul {
  li {
    font-size: 16px;
    margin-bottom: 10px;
    display: flex;
    width: 40%;
    border-bottom: 1px solid rgba($color: #ddd, $alpha: 0.6);
    .type-info {
      flex-grow: 1;
    }
  }
}
.add-type {
  display: flex;
  width: 40%;
  background-color: #ddd;
  &-info {
    flex-grow: 1;
  }
}
</style>