/**
 * 公共js方法
 */

export const utility = {
  /**
   * 将obj对象参数拆分成get请求后的参数
   */
  splitObj: function (obj) {
    obj = JSON.stringify(obj);
    // obj = obj.replace(/\{|\}|\'|\"+/g, '');
    obj = obj.replace(/\{|\}|'|"+/g, '');
    let arr = obj.split(',');
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].replace(/:/g, '=') + '&';
    }
    let str = arr.join('');
    str = str.slice(0, str.length - 1);
    str = '?' + str;
    return str;
  },
  qs: function (json) {
    let str = ''
    for (let key in json) {
      if (json.hasOwnProperty(key)) {
        // if(json[key] == "" || json[key] == null || json[key] == undefined) continue;
        str += key + '=' + json[key] + '&'
      }
    }
    str = str.substr(0, str.lastIndexOf('&'))
    return str
  },
  //计算时间
  fullDate(inputTime) {

    var date = new Date(inputTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
  },
  // 时间戳转 年月日时分秒
  formatDateCommon(v, format) {
    if (!v) {
      return "";
    }
    var dateV = new Date(v);
    var year = dateV.getFullYear();
    var month = dateV.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    var date = dateV.getDate();
    date = date < 10 ? ("0" + date) : date;
    var hour = dateV.getHours();
    hour = hour < 10 ? ("0" + hour) : hour;
    var minute = dateV.getMinutes();
    minute = minute < 10 ? ("0" + minute) : minute;
    var second = dateV.getSeconds();
    second = second < 10 ? ("0" + second) : second;
    var str1 = year + "-" + month + "-" + date
    var str2 = hour + ":" + minute + ":" + second;
    var str3 = month + "-" + date;
    var str
    if ("yyyy-MM-dd" == format) {
      str = str1;
    } else if("MM-dd" == format){
      str = str3
    }else{
      str = str1 + " " + str2
    }
    return str;
  },
  //传入图片路径，返回base64
  getBase64(url, callback) {
    //通过构造函数来创建的 img 实例，在赋予 src 值后就会立刻下载图片，相比 createElement() 创建 <img> 省去了 append()，也就避免了文档冗余和污染
    var Img = new Image(), dataURL = '';
    Img.setAttribute("crossOrigin", 'Anonymous') // 解决控制台跨域报错的问题
    Img.src = url + "?t=" + new Date().getTime(); // 处理缓存,fix缓存bug,有缓存，浏览器会报错;
    Img.onload = function () { //要先确保图片完整获取到，这是个异步事件
      var canvas = document.createElement("canvas"), //创建canvas元素
        width = Img.width, //确保canvas的尺寸和图片一样
        height = Img.height;
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d").drawImage(Img, 0, 0, width, height); //将图片绘制到canvas中
      dataURL = canvas.toDataURL('image/jpeg'); //转换图片为dataURL
      callback ? callback(dataURL) : null; //调用回调函数
    };
  },
  //数组去重
  unique(arr) {
    const res = new Map();
    return arr.filter((a) => !res.has(a.id) && res.set(a.id, 1));
  },
}
