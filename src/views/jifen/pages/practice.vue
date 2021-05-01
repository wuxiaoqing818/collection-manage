<template>
  <div>
    <el-button @click="aaa()">按钮</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: "null",
      b: true
    };
  },
  methods: {
    aaa() {
      alert("111");
    }
  }
};
</script>

<style>
</style>