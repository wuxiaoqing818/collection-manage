import Topcont from "../../components/jifen-cont/topcont";
import Leftcont from "../../components/jifen-cont/leftcont";
import contMain from "@components/jifen-cont/contMain";
export default {
  install: Vue => {
    Vue.component("Topcont", Topcont);
    Vue.component("Leftcont", Leftcont);
    Vue.component("contMain", contMain);
  }
};

// var components = {
//   BlogFooter: "BlogFooter.vue",
//   BlogHeader: "common/BlogHeader.vue",
//   BlogBody: "BlogBody.vue"
// };

// for (let key in components) {
//   //批量引入自定义的组件
//   let val = components[key];
//   Vue.component(key, require("../src/components/" + val).default);
// }
