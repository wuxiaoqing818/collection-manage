const PROJECTS = require("../../../config/projects");
const TYPE = PROJECTS.name;
console.log(TYPE);
var yundian_str = TYPE == "yundian" ? "/yundian" : "/jifen";

var uploadUrl = getUploadUrl(TYPE);

function getUploadUrl(TYPE) {
  var url = "";
  if (TYPE == "jifen") {
    if (process.env.NODE_ENV === "production") {
      url = "/jifen/custom-page/img-upload.do";
    } else {
      url = "/jifen/api/member-card/image-upload.do";
    }
  } else if (TYPE == "yundian") {
    if (process.env.NODE_ENV === "production") {
      url = "/MicroMall-bootstrap/custom-page/img-upload.do";
    } else {
      url = "/yundian/api/custom-page/img-upload.do";
    }
  } else if (TYPE == "jike") {
    url = "/appletsstore/appletsstore-upload.do";
  }
  return url;
}

function switchFunction(key) {
  if (key == "jifen") {
    return "/jifen";
  } else if (key == "jike") {
    return "/jike/api";
  } else if (key == "yundian") {
    return "/yundian/api";
  }
}

export const config_data = {
  http_url:
    process.env.NODE_ENV === "production"
      ? window.location.protocol + "//" + window.location.host + yundian_str
      : switchFunction(TYPE),
  timeout: 60000, //超时时间(毫秒)
  // 积分 1776182607 | 云店 17601056503
  shopId: process.env.NODE_ENV === "production" ? "" : "1776182607",
  uploadUrl,
  predefineColors: [
    "#ff4500",
    "#ff8c00",
    "#ffffff",
    "#ffd700",
    "#90ee90",
    "#00ced1",
    "#1e90ff",
    "#c71585",
    "rgba(255, 69, 0, 0.68)",
    "rgb(255, 120, 0)",
    "hsv(51, 100, 98)",
    "hsva(120, 40, 94, 0.5)",
    "hsl(181, 100%, 37%)",
    "hsla(209, 100%, 56%, 0.73)"
  ],

};
