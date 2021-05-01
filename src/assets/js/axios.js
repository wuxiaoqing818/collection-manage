import axios from "axios";
import { config_data } from "./config.js";
import { Loading, Message } from "element-ui";

let loadingRequestCount = 0;
let loadingInstance; //创建Loading 的实例
const showLoading = () => {
  if (loadingRequestCount === 0) {
    // element的服务方式 target 我这边取的是表格 项目是后台系统 每个页面都有表格 类似整个表格loading 和在表格配置v - loading一样的效果，这么做是全局实现了，不用每个页面单独去v - loading
    loadingInstance = Loading.service({ 
      target: ".el-table"
    });
  }
  loadingRequestCount++;
};

const hideLoading = () => {
  if (loadingRequestCount <= 0) return;
  loadingRequestCount--;
  if (loadingRequestCount === 0) {
    // Vue.$nextTick(() => {//以服务的方式调用的 Loading 需要异步关闭
    loadingInstance.close();
    // });
  }
};
const obj = {
  getAxios: (type, url, params, header,loadingParams = true) => {
    // 请求拦截进来调用显示loading效果 loadingParams
    // console.log(type, url, params, loadingParams)
    if (loadingParams) {
      // console.log(type, url, params, loadingParams)
      showLoading();
    }
    // 请求头

    //axios的请求拦截器
    axios.interceptors.request.use(
      config => {
        var ssId = sessionStorage.getItem("sessionId")
          ? sessionStorage.getItem("sessionId")
          : "";
        //这里是请求前的操作，可以执行其它自定义任务，例如进行请求前的一些操作。
        //例如：在请求前有一个加载loading状态,这里借用element ui Loading方法
        config.timeout = config_data.timeout; //设置超时时间
        config.headers["sessionId"] = ssId; //请求头
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      response => {
        if (loadingParams) {
          setTimeout(() => {
            hideLoading();
          }, 200);
        }
        if (
          response.data == "NEEDED_LOGIN" &&
          config_data.editorType == "jifen"
        ) {
          process.env.NODE_ENV === "production"
            ? (window.location.href = config_data.jfLoginUrl)
            : "";
        } else if (
          response.data == "NEEDED_LOGIN" &&
          config_data.editorType == "yundian"
        ) {
          process.env.NODE_ENV === "production"
            ? (window.location.href = config_data.http_url + "/login.do")
            : "";
        } else {
          switch (response.data.result) {
            case "error":
              Message({
                showClose: true,
                message: response.data.errorMsg ? response.data.errorMsg : "请求出错!",
                type: "error"
              });
              break;
            default:
              return response;
          }
        }
      },
      error => {
        setTimeout(() => {
          hideLoading();
        }, 200);
        return Promise.reject(error);
      }
    );
    if (type == "get") {
      // params = utility.qs(params);
      return new Promise((resolve, reject) => {
        axios({
          method: "get",
          url: config_data.http_url + url + params,
          headers: {
            'Access-Control-Allow-Origin':  '*'
          }
        })
          .then(response => {
            resolve(response);
          })
          .catch(err => {
            reject(err);
          });
      }).catch(e => {
        console.log(e);
      });
    } else {
      return new Promise((resolve, reject) => {
        axios({
          url: config_data.http_url + url,
          headers: header?header:{
            // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            // 'Content-Type':'application/json;charset=UTF-8'
          },
          method: "post",
          responseType: "text",
          data: params
        })
          .then(response => {
            resolve(response);
          })
          .catch(err => {
            reject(err);
          });
      }).catch(e => {
        console.log(e);
      });
    }
  }
};

export default obj;
