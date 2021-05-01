<template>
  <div class="manage_page fillcontain">
    <el-row style="height: 100%;">
      <el-col :span="4" style="min-height: 100%; background-color: #1e282c;">
        <el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>首页
          </el-menu-item>
          <el-submenu index="practice">
            <template slot="title">
              <i class="el-icon-document"></i>指令/手机号/日期时间
            </template>
            <el-menu-item index="practice">vue自定义指令/手机号344布局</el-menu-item>
            <el-menu-item index="d32">日期区间合并</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-plus"></i>倒计时/秒杀
            </template>
            <el-menu-item index="canvas1">倒计时/css3</el-menu-item>
            <el-menu-item index="canvas2">活动列表秒杀</el-menu-item>
            <el-menu-item index="canvasBanner">canvas绘制海报</el-menu-item>
            <el-menu-item index="canvasBannerPage">canvas绘制海报页面</el-menu-item>
            <el-menu-item index="html2canvas">html2canvas</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-star-on"></i>正则
            </template>
            <el-menu-item index="regular">正则</el-menu-item>
            <el-menu-item index="encryption">加密</el-menu-item>
            <!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-edit"></i>自动化导入
            </template>
            <el-menu-item index="requireContext">/自动化导入</el-menu-item>
            <el-menu-item index="vueEdit">待定</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-setting"></i>待定
            </template>
            <el-menu-item index="adminSet">待定</el-menu-item>
            <!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-warning"></i>待定
            </template>
            <el-menu-item index="explain">待定</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    defaultActive: function() {
      return this.$route.path.replace("/", "");
    }
  },
  mounted() {}
};
</script>


<style lang="scss">
.fillcontain {
    width:100%;
    height:100%;
}
.el-menu {
  background: #1e282c;
}
.el-menu:hover {
  background: #1e282c;
}
.el-submenu__title {
  color: hsla(0, 0%, 100%, 0.65);
}
.el-submenu__title:hover {
  background-color: #1e282c;
  color: #fff;
}

.el-menu-item.is-active {
  color: #fff;
  background-color: #20a0ff;
}
.el-menu-item:hover {
  background: #1e282c;
  color: #fff;
}
.el-menu-item.is-active:hover {
  color: #fff;
  background-color: #20a0ff;
}
.el-menu-item {
  color: hsla(0, 0%, 100%, 0.65);
}
.el-submenu:hover,
.el-submenu.is-opened:hover {
  background: #1e282c;
}
</style>
