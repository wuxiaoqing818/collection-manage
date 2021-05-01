import axios from '@assets/js/axios.js';

const common = {
  //登录
  isLogin(params) {
    return axios.getAxios("get", "/api-login.do", params);
  },
  // 获取店铺名
  getShopNick() {
    let params = {
      timeRangeJifen: "7",
      timeRangePhone: "7"
    }
    return axios.getAxios('post', '/home/get-trend-analysis.do', params)
  }
}

export default common
