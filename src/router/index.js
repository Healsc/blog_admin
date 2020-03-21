import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/aboutMe",
    name: "AboutMe",
    component: () => import("@/views/AboutMe.vue")
  },
  {
    path: "/type",
    name: "Type",
    component: () => import("@/views/Type.vue")
  },
  {
    path: "/worksList",
    name: "WorksList",
    component: () => import("@/views/works/WorksList.vue")
  },
  {
    path: "/worksDetail/:id",
    name: "WorksDetail",
    component: () => import("@/views/works/WorksDetail.vue")
  },
  {
    path: "/addWork",
    name: "AddWork",
    component: () => import("@/views/works/AddWork.vue")
  },
  {
    path: "/articleList",
    name: "ArticleList",
    component: () => import("@/views/article/ArticleList.vue")
  },
  {
    path: "/articleDetail/:id",
    name: "ArticleDetail",
    component: () => import("@/views/article/ArticleDetail.vue")
  },
  {
    path: "/addArticle",
    name: "AddArticle",
    component: () => import("@/views/article/AddArticle.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
