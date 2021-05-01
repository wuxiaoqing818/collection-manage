import Vue from "vue";
import ElementUI from "element-ui";
import App from "./App.vue";
import store from "../../store";
import router from "./router";
import "@assets/styles/index.scss";
import "@assets/styles/common.css"; // 引入公共的样式
import "./assets/css/font-awesome.min.css"

import {
  utility
}
from '@assets/js/common'
import VueClipboard from "vue-clipboard2";
import VueQriously from 'vue-qriously' // 二维码
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(VueQriously)
VueClipboard.config.autoSetContainer = true; // add this line
Vue.use(VueClipboard);
Vue.filter("time", utility.formatDateCommon);
window.console.log();

Vue.use(ElementUI);
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
