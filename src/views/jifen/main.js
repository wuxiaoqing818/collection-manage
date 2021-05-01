import Vue from "vue";
import ElementUI from "element-ui";
import App from "./App.vue";
import store from "../../store";
import router from "./router";
import "@assets/styles/index.scss";
import "@assets/styles/common.css"; // 引入公共的样式
import "./assets/css/font-awesome.min.css";
import echarts from 'echarts' // 引入echarts
import {
  utility
}
from '@assets/js/common'
import VueClipboard from "vue-clipboard2";
import VueQriously from 'vue-qriously' // 二维码
Vue.use(VueQriously)
VueClipboard.config.autoSetContainer = true; // add this line
Vue.use(VueClipboard);
Vue.filter("time", utility.formatDateCommon);
window.console.log();
const on = Vue.prototype.$on
// 防抖处理
Vue.prototype.$on = function (event, func) {
  let timer
  let newFunc = func
  if (event === 'click') {
    newFunc = function () {
      clearTimeout(timer)
      timer = setTimeout(function () {
        func.apply(this, arguments)
      }, 500)
    }
  }
  on.call(this, event, newFunc)
}
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts
//引入接口js文件
import httpServe from "./server/index";
Vue.prototype.$https = httpServe;

import "element-ui/lib/theme-chalk/index.css";
import scroll from "vue-seamless-scroll";
Vue.use(scroll);
import Bus from "../../store/bus";
Vue.use(Bus);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
