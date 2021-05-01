<template>
  <div class="login">
    jifen-login
    <el-image :src="obj.url" alt srcset></el-image>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        src1:
          "https://cdn.inmuu.com/beta/services/app/banner/tw/15/5b-D5b-D55u05pKt6Ze0.png",
        src2:
          "https://s.tuwenzhibo.com/image/png/20210408/102313/FhwxmDtRcad-fkUsSd-QagtGNRHg7736.png",
        url: ""
      }
    };
  },
  computed: {},
  mounted() {
    setTimeout(() => {
      this.obj.url = this.obj.src2;
    }, 3000);
  }
};
</script>


<style lang="scss">
</style>
