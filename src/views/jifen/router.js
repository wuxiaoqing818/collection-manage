import Vue from "vue";
import Router from "vue-router";
// import api from "./server/common";
// import store from "../../store/index";
Vue.use(Router);
var jifenRoutes = [
  {
    path: "/",
    name: "home",
    redirect: "/home",
    component: () => import("./pages/page.vue"),
    meta: {
      requireAuth: true,
      title: "导航"
    },
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("./pages/home.vue"),
        meta: {
          requireAuth: true,
          title: "首页"
        }
      },
      {
        path: "/practice",
        name: "practice",
        component: () => import("./pages/practice.vue"),
        meta: {
          requireAuth: true,
          title: "练习"
        }
      }
    ]
  },
  
  
 
 
  
     
    

     
   
  

 
 
 
 
  
 

];

const vueRouter = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  mode: "hash",
  routes: jifenRoutes
});

// // 路由前置导航守卫
// vueRouter.beforeEach((to, from, next) => {
//   console.log('router,jifen')
//   // 根据路由元信息设置文档标题
//   if (to.meta.title) {
//     document.title = to.meta.title;
//   }
//   const url = window.location.href;
//   if(url.indexOf('shopNick=') != -1) {
//     let shopNick = '?shopNick=' + url.match(/shopNick=(\S*)/)[1];
//     api.isLogin(shopNick).then(res => {
//       store.dispatch('handleAcitonsSessionId', res.data.sessionId)
//       sessionStorage.setItem('sessionId', res.data.sessionId)
//       next();
//     })
//   } else {
//     if(process.env.NODE_ENV === "production") {
//       next();
//     } else {
//       if(url.indexOf('activeDirectory') != -1) {
//         next();
//       }else {
//         let shopNick = '?shopNick=mia211314';
//         api.isLogin(shopNick).then(res => {
//           console.log(res)
//           store.dispatch('handleAcitonsSessionId', res.data.sessionId)
//           sessionStorage.setItem('sessionId', res.data.sessionId)
//           next();
//         })
//       }

//     }
//   }
// });

export default vueRouter;
