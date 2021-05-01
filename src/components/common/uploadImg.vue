<template>
  <div class="upload-img">
    <el-upload
      class="uploader"
      :action="uploadUrl"
      v-loading="loading"
      element-loading-text="上传中..."
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <el-image 
        v-if="defaultImgUrl" 
        class="image" 
        :style="{
          'height': defaultHeight ? defaultHeight : '2rem'
        }" 
        :src="defaultImgUrl" 
        fit="contain"></el-image>
      <i 
        v-else 
        class="el-icon-plus uploader-icon"
        :style="{
          'width': defaultWidth ? defaultWidth : '4rem',
        }"
      >
        <span>{{text}}</span>
        <span>{{tips}}</span>
      </i>
      <el-button type="text" @click.stop="reset(imgType)">重置</el-button>
    </el-upload>
  </div>
</template>

<script>
import { config_data } from '../../assets/js/config.js'
export default {
  name: 'uploadImg',
  props: {
    type: {
      type: String
    },
    text: {
      type: String
    },
    tips: {
      type: String
    },
    imgType: {
      type: String
    },
    defaultHeight: {
      type: String
    },
    defaultWidth: {
      type: String
    },
    imageUrl: {
      type: String
    },
    defaultUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      loading: false,
      uploadUrl: config_data.uploadUrl,
      defaultImgUrl: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.defaultImgUrl = this.imageUrl
      console.log(this.imageUrl)
    }, 2000);
  },
  methods: {
    handleAvatarSuccess(res) {
      console.log(res)
      if(res.result == 'success') {
        this.defaultImgUrl = res.imageUrl
        this.loading = false
        this.bindPageChange(this.imgType, this.defaultImgUrl)
      } else {
        this.loading = false
        this.$message.error('上传图片失败')
      }
    },
    beforeAvatarUpload(file) {
      this.loading = true
      var testmsg = /^image\/(jpeg|png|jpg|gif)$/.test(file.type)
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!testmsg) {
        this.loading = false
        this.$message.error('上传图片格式不对!')
      }
      if (!isLt2M) {
        this.loading = false
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return testmsg && isLt2M
    },
    reset(type) {
      this.defaultImgUrl = this.defaultUrl
      this.bindPageChange(type, this.defaultImgUrl)
    },
    bindPageChange(type, val) {
      let params = { type, val }
      if(this.type == 'default') {
        this.$bus.emit('defaultChange', params)
      } else {
        this.$emit('uploadImgUrl', params)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.upload-img {
  display: flex;
  // width: 100%;
  align-items: center;
  justify-content: center;
  .uploader {
    .el-upload {
      .uploader-icon {
        font-size: 0.16rem;
        color: #22A5FB;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        border: 1px dashed #E5E5E5;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;

        span {
          font-size: 0.14rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(159, 159, 159, 1);
          line-height: 0.2rem;
          margin-left: 0.14rem;
        }

        &:hover {
          border-color: #409EFF;
        }
      }
    }

    .image {
      height: auto;
      display: block;
    }
  }

  button {
    font-size: 0.14rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(34, 165, 251, 1);
    line-height: 20px;
    float: right;
    padding: 0;
  }
}
</style>
