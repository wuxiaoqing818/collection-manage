// 大转盘接口
import axios from '@assets/js/axios.js';


//上传兑换码文件
export const uploaRedeemCode = (parms,header) => {
    return axios.getAxios('post', '/shop-data/redeemCode-upload.do',parms,header)
}
//查询大转盘详情
export const getDrawDetails = (parms) => {
    return axios.getAxios('post', '/conversion/get-big-turntable-info.do',parms)
}
// 保存,修改大转盘
export const addAndUpDraw = (parms) => {
    return axios.getAxios('post', '/conversion/save-new-draw-config.do',parms)
}
// 获取奖励信息
export const getDrawPrize = (parms) => {
    return axios.getAxios('post', '/conversion/get-draw-prize-config-infos.do',parms)
}
// 保存,修改奖励信息
export const addAndUpDrawPrize = (parms) => {
    return axios.getAxios('post', '/conversion/save-drawPrize-config.do',parms)
}
// 删除奖励信息
export const deleteDrawPrize = (parms) => {
    return axios.getAxios('post', '/conversion/del-draw-prize-config-info.do',parms)
}
// 获取抽奖条件
export const getDrawCondition = (parms) => {
    return axios.getAxios('post', '/conversion/get-draw-condition-infos.do',parms)
}
// 保存,修改抽奖条件
export const addAndUpDrawCondition = (parms) => {
    return axios.getAxios('post', '/conversion/save-draw-condition.do',parms)
}
// 删除抽奖条件
export const deleteDrawCondition = (parms) => {
    return axios.getAxios('post', '/conversion/del-draw-condition-info.do',parms)
}
// 判断活动名称是否存在
export const isexistDrawName = (parms) => {
    return axios.getAxios('post', '/conversion/isexist-draw-name.do',parms)
}
// 奖励信息是否已经存在
export const isexistPrizeExist = (parms) => {
    return axios.getAxios('post', '/conversion/get-activity-prize-exist.do',parms)
}
// 获取游戏信息
export const getGame = (parms) => {
    return axios.getAxios('post', '/conversion/get-game-by-type.do',parms)
}