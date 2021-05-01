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
      ref="up"
        v-if="defaultImgUrl"
        class="image"
        :style="{
          'height': '143px',
          'width': '320px'
        }"
        :src="defaultImgUrl"
      ></el-image>
    
      <i v-else class="el-icon-plus uploader-icon" @click="upload"   ref="up">
        <span>请添加图片</span>
        <span>{{tips}}</span>
      </i>
      <!-- <el-button v-show="close" type="text" @click.stop="reset(imgType)">
        <i class="el-icon-close"></i>
      </el-button>-->
    </el-upload>
  </div>
</template>

<script>
import { config_data } from "../../assets/js/config.js";
export default {
  name: "uploadImg",
  props: {
    defaultImgUrl1: {
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
      close: true,
      loading: false,
      uploadUrl: config_data.uploadUrl,
      defaultImgUrl: "",
      default: ""
    };
  },

  created() {
    console.log(this.defaultImgUrl);
  },
  mounted() {
    // if (this.defaultImgUrl!=='') {
    //   this.close = true;
    // } else {
    //   this.close = false;
    // }
  },
  methods: {
    handleAvatarSuccess(res) {
      console.log(res);
      if (res.result == "success") {
        this.defaultImgUrl = res.imageUrl;
        this.close = true;
        this.loading = false;

        this.$emit("thg", this.defaultImgUrl);
        this.bindPageChange(this.imgType, this.defaultImgUrl);
        //  this.$emit('event1', this.data1)
      } else {
        this.loading = false;
        this.$message.error("上传图片失败");
      }
    },
    beforeAvatarUpload(file) {
      this.loading = true;
      var testmsg = /^image\/(jpeg|png|jpg)$/.test(file.type);
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!testmsg) {
        this.$message.error("上传图片格式不对!");
        return;
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
        var that  = this
        console.log(that.defaultWidth)
        console.log(that.defaultHeight)
    
      const isSize = new Promise(function(resolve, reject) {
     
        let _URL = window.URL || window.webkitURL;
        let img = new Image();
        img.onload = function() {
          let valid = img.width == that.defaultWidth && img.height == that.defaultHeight;
          // let valid = img.width == 
          valid ? resolve() : reject();
        };
        img.src = _URL.createObjectURL(file);
      }).then(
        () => {
          return file;
        },
        () => {
          // this.$message.error("上传的图片宽高必须是690*380!");
          this.$message.error(`上传的图片宽高必须是${that.defaultWidth} * ${that.defaultHeight}!`);

          return Promise.reject();
        }
      );
      this.loading  = false

      return testmsg && isLt2M  && isSize;
    },
    reset(type) {
      this.defaultImgUrl = this.default == "" ? "" : this.default;
      this.bindPageChange(type, this.imageUrl);
      this.$message.error("图片删除成功!");
      this.close = false;
    },
    bindPageChange(type, val) {
      let params = { type, val };
      if (this.type == "default") {
        this.$bus.emit("uploadImgUrl", params);
      } else {
        this.$emit("uploadImgUrl", params);
      }
    },

    upload(){

    },
  }
};
</script>

<style scoped lang="stylus">
.upload-img {
  display: flex;
  // width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;
  margin-top: 0px;

  .uploader {
    .el-upload {
      height: 88px;
      width: 288px;
      margin-left: -150px;

      .uploader-icon {
        font-size: 0.5rem;
        color: #22A5FB;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        border: 1px dashed #E5E5E5;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width: 320px;
        height: 143px;

        // margin-top: 10px;
        span {
          font-size: 0.14rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(159, 159, 159, 1);
          line-height: 0.2rem;
          margin-left: 0.14rem;
          display: block;
        }

        &:hover {
          border-color: #409EFF;
        }
      }

      .el-icon-plus:before {
        content: '\e6d9';
        margin-top: 28px;
        display: block;
      }
    }

    .el-image__error{
        width 100%;
        height 50%; 
        object-fit: cover;
    }

    .image {
      height: auto;
      display: block;
      width: 320px;
      height: 150px;

      /deep/ .el-image__inner {
    object-fit cover;
    width: 320px;
    height: 143px;
  }

     

      img{
        width 50%;
        height 50%; 
        object-fit: cover;
      }
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
    position: relative;
    top: -139px;
    left: 0px;
  }

 
  /deep/ .el-upload--text {
    width: 320px;
    height: 143px;
    background-color: white;
    margin-top: 10px;
  }
}
</style>














  //  const isSize = new Promise(function(resolve, reject) {
  
  //       let _URL = window.URL || window.webkitURL;
  //       let img = new Image();
  //       img.onload = function() {
  //         let valid = img.width == that.defaultWidth && img.height == that.defaultHeight;
  //         valid ? resolve() : reject();
  //       };
  //       img.src = _URL.createObjectURL(file);
  //     }).then(
  //       () => {
  //         return file;
  //       },
  //       () => {
  //         this.$message.error(`上传的图片宽高必须是${that.defaultWidth} * ${that.defaultHeight}!`);
  //         return Promise.reject();
  //       }
  //     );
  //     this.loading  = false