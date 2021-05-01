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
          'height': '88px',
          'width': '288px'

          
        }" 
        :src="defaultImgUrl" 
        >
        </el-image>
      <i 
        v-else 
        class="el-icon-plus uploader-icon"
     
      >
        <span>{{text}}</span>
        <span>{{tips}}</span>
      </i>
      <el-button v-show="close" type="text" @click.stop="reset(imgType)"><i class="el-icon-close"></i></el-button>
    </el-upload>
  </div>
</template>

<script>
import { config_data } from '../../assets/js/config.js'
export default {
  name: 'uploadImg',
  props: {
    defaultImgUrl1:{
      type: String
    },
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
    }
  },
  data() {
    return {
      close:true,
      loading: false,
      uploadUrl: config_data.uploadUrl,
      defaultImgUrl: '',
      default: ''
    }
  },  
  
  
  watch: {
      defaultImgUrl(val,old) {
             console.log(val,old)
             console.log(val)
             console.log(val)
             if(val){
               this.close = true
             }else{
               this.close = false
             }
      }
    },



  created(){
      console.log(this.defaultImgUrl)
  },
  mounted() {
       if(this.defaultImgUrl){
         this.close = true
       }else{
         this.close = false
       }
  },
  methods: {
    handleAvatarSuccess(res) {
      console.log(res)
      if(res.result == 'success') {
        this.defaultImgUrl = res.imageUrl
        this.close = true
        this.loading = false
        this.bindPageChange(this.imgType, this.defaultImgUrl)
      } else {
        this.loading = false
        this.$message.error('上传图片失败')
      }
    },
    beforeAvatarUpload(file) {
      this.loading = true
      var testmsg = /^image\/(jpeg|png|jpg)$/.test(file.type)
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!testmsg) {
        this.$message.error('上传图片格式不对!')
        return
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return testmsg && isLt2M
    },
    reset(type) {
      this.defaultImgUrl = this.default == '' ? '' : this.default
      this.bindPageChange(type, this.imageUrl)
        this.$message.error('图片删除成功!')
             this.close = false

    },
    bindPageChange(type, val) {
      let params = { type, val }
      if(this.type == 'default') {
        this.$bus.emit('defaultChange', params)
      } else {
        this.$emit('uploadImgUrl', params)
      }
    },
  }
}
</script>

<style scoped lang="stylus">
.upload-img {
  display: flex;
  // width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom : 0px;
  margin-top: 0px;
  .uploader {
    .el-upload {
      height: 88px;
     width: 288px;
      margin-left:-150px;
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
          height :88px;
        width :288px;
        margin-top:10px;
        

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
      // margin-left: -150px;

    height: 88px;
    width: 288px;

     
    }
  }

  button {
    font-size: 0.3rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(34, 165, 251, 1);
    line-height: 20px;
    float: right;
    padding: 0;
    position relative;
    top:-89px;
    left:0px;
  }

  
     .el-image__inner{

        height :88px;
        width :288px;

      }

     /deep/ .el-upload--text{
        
        height :88px;
        width :288px;
      }
}
</style>
