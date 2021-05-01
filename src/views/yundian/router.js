import Vue from "vue";
import Router from "vue-router";
// import api from '../yundian/server/index';
// import store from "../../store/index";
Vue.use(Router);

var yundianRoutes = [
  {
    path: "/",
    name: "page",
    redirect: "/login",
    component: () => import("./page/page.vue"),
    meta: {
      requireAuth: true,
      title: "导航"
    },
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("./page/login.vue"),
        meta: {
          requireAuth: true,
          title: "登录"
        }
      },

    ]
  },

];

const vueRouter = new Router({
  base: process.env.BASE_URL,
  mode: "hash",
  routes: yundianRoutes
});

// 路由前置导航守卫
vueRouter.beforeEach((to, from, next) => {
  // 根据路由元信息设置文档标题
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (process.env.NODE_ENV === "production") {
    next();
  } else {
    next();
  }
});

export default vueRouter;
