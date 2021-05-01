import vuex from '@VUEX'
import axios from '@assets/js/axios.js';
// 登录
export const getLogin = (parms) => {
    return axios.getAxios('post', '/simpleLoginSeparate.do',parms)
}
// 获取店铺优惠券
export const getCoupon = (parms) => {
      return axios.getAxios('post', '/conversion/item-manager/get-coupons-by-shop.do',parms)
}
// 获取会员等级相关
export const memberData = (parms) => {
    let QueryURL = '/manage/zero-trial/get-member-rating.do'
    if(vuex.state.domainName=='jd') {
        QueryURL = '/manage/zero-trial/get-member-rating.do'
    }else if (vuex.state.domainName=='jf') {
        QueryURL = '/manage/zero-trial/get-member-rating.do'
    }

    return axios.getAxios('post', QueryURL,parms)
}
// 获取游戏列表
export const gameList = (parms) => {
    return axios.getAxios('post', '/manage/get-award-game-infos.do',parms)
}                                                   
// 根据活动id获取活动详情
export const getActivityDetails = (parms) => {
    return axios.getAxios('post', '/manageseparate/get-activity-info.do',parms)
}
// 根据定义活动获取奖项配置数据
export const getActivityPrize = (parms) => {
    return axios.getAxios('post', '/manage/get-activity-prize.do',parms)
}
// 根据定义活动获取奖项配置数据
export const isActivityName = (parms) => {
    return axios.getAxios('post', '/manage/valid-interact-activity-name.do',parms)
}
// 修改活动
export const UpdateActivity = (parms) => {
    return axios.getAxios('post', '/manageseparate/update-custom-interact-infos.do',parms)
}
// 新增活动
export const AddActivity = (parms) => {
    return axios.getAxios('post', '/manageseparate/save-custom-interact-infos.do',parms)
}

// 获取打榜赢好礼参与活动详情
export const ActivityAttenedDetails = (parms) => {
    return axios.getAxios('post', '/manageseparate/get-activity-attened-details.do',parms)
}
// 获取邀请记录
export const InvitationRecord = (parms) => {
    return axios.getAxios('post', '/manageseparate/get-invitation-record.do',parms)
}
// 获取活动分析
export const ActivityAnalysis = (parms) => {
    return axios.getAxios('post', '/manageseparate/get-activity-data-analysis.do',parms)
}
// 导出
export const getImport = (parms) => {
    return axios.getAxios('post', '/manageseparate/jifen-separate-analysis-export-save.do',parms)
}
// 上传图片
export const uploadImage = (parms,header) => {
    return axios.getAxios('post', '/conversion/plat/image-upload-for-save-addmoney.do',parms,header)
}