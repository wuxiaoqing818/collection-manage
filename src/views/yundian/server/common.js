import axios from '@assets/js/axios.js';

const publicInterface = {
    // 图片上传
    publicItemImageUpload(params) {
        return axios.getAxios('post', '/item-manage/item-image-upload.do', params);
    },
    // 导出地址跳转
    publicExportLink(params) {
        return axios.getAxios('get', '/coupon/export-manager.do', params);
    },
}

export default publicInterface;