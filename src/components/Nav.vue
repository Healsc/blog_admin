<template>
  <div>
    <div class="container">
      <el-col class="nav">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
         
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="$router.push('/articleList')">文章列表</el-menu-item>
              <el-menu-item index="1-2" @click="$router.push('/addArticle')">添加文章</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>作品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1" @click="$router.push('/worksList')">作品列表</el-menu-item>
              <el-menu-item index="2-2" @click="$router.push('/addWork')">添加作品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="3" @click="$router.push('/type')">
            <i class="el-icon-setting"></i>
            <span slot="title">分类管理</span>
          </el-menu-item>
          <el-menu-item index="4" @click="$router.push('/aboutMe')">
            <i class="el-icon-setting"></i>
            <span slot="title">关于</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>
    <div class="header">
      <h1>Admin</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  methods: {
  /*   handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    } */
  },
  props: {}
};
</script>


<style scoped lang="scss">
.container {
  width: 1rem;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: #545c64;
}
.nav {
  margin-top: 0.2rem;
  background-color: #545c64;
  width: .8rem;
}
/* 去掉element-ui导航栏右侧自带的白线 */
.el-menu {
  border-right: 0;
}
.header {
  position: fixed;
  top:0;
  width: 100%;
  background-color: #545c64;
  height: 60px;
  line-height: 60px;
  margin-left: 0.7rem;
  text-align: center;
  z-index: 99;
}
</style>
