import axios from '@assets/js/axios.js';
// 新积分接口文件
const integralAnalys = {
    //积分活动汇总分析图表数据
    getCollectChart(params) {
        return axios.getAxios('post', '/analysis/get-activity-summary-chart.do', params)
    },
    //导出
    getExport(params) {
        return axios.getAxios('post', '/analysis/jifen-activity-summary-export-save.do', params)
    },

}

export { integralAnalys };