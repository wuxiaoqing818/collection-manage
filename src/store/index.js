import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let hostURL = window.location.host
let getURL = ''
console.log(hostURL)
// 判断当前域名，并且以域名的简写首字母小写拼音命名
switch (hostURL) {
	case 'http://localhost:8080':
		getURL = '8080端口'
	break
	default:
		getURL = ''
}
export default new Vuex.Store({
  state: {
    domainName: getURL, // 判断当前域名
    sessionId: "",
 
  },
  mutations: {
    // 默认

    
  },
  actions: {
    // 默认
 
  },
  modules: {}
});
