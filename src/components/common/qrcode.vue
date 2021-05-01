<template>
  <div class="qrcode">
    <div class="qrcode_content" :id="name"></div>
  </div>
</template>
<script>
import QRcode from "qrcodejs2";
let qrcode = "";
export default {
  name: "qrcode",
  data() {
    return {};
  },
  computed: {
    name: {
      get() {
        let sid = "qrcode";
        if (this.sid) {
          sid = this.sid;
        }
        return sid;
      },
      set(value) {
        this.name = value;
      }
    },
    value: {
      get() {
        let value = "";
        if (this.text) {
          value = this.text;
        }
        return value;
      },
      set(value) {
        this.value = value;
      }
    },
    qrwidth() {
      let width = 0;
      if (this.swidth) {
        width = this.swidth; //370*320/(window.innerWidth)/20
      } else {
        width = 5.33; //250*320/(window.innerWidth)/20
      }
      return width;
    }
  },
  props: {
    sid: {
      type: String
    },
    text: {
      type: String
    },
    swidth: {
      type: Number
    }
  },
  methods: {
    qrcode() {
      console.log("qrcode---------->", qrcode);
      if (qrcode) {
        // qrcode.clear();
        // qrcode.makeCode('new content');
        qrcode = null;
      } else {
        qrcode = new QRcode(this.name, {
          width: (this.qrwidth * 20 * window.innerWidth) / 320,
          height: (this.qrwidth * 20 * window.innerWidth) / 320, // 高度  ,250*320/(window.innerWidth)/20
          text: this.value, // 二维码内容
          image: "",
          correctLevel: QRcode.CorrectLevel.L
          //容错级别，可设置为：(低到高)
          // QRCode.CorrectLevel.L
          // QRCode.CorrectLevel.M
          // QRCode.CorrectLevel.Q
          // QRCode.CorrectLevel.H

          // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
          // background: '#f0f'
          // foreground: '#ff0'
        });
      }
      console.log(qrcode);
    }
  },
  destroyed() {
    // qrcode.clear();
    qrcode = null;
  },
  mounted() {
    // this.qrcode();
    this.$nextTick (function () {
      this.qrcode();
    })
  }
};
</script>
<style lang="less" scoped>
.qrcode .qrcode_content {
  display: flex;
  justify-content: center;
}
</style>