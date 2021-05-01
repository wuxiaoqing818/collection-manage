const path = require("path");
const projectName = require("./config/projects");
function resolve(dir) {
  return path.join(__dirname, dir);
}

const Version = new Date().getTime();
module.exports = {
  // outputDir: 'dist',
  outputDir: `dist/${projectName.name}/`,
  chainWebpack: config => {
    // 移除 prefetch 插件
    ["index", "mobdev"].forEach(entryName => {
      config.plugins.delete(`prefetch-${entryName}`);
      config.plugins.delete(`preload-${entryName}`);
    });
    // config.resolve.alias
    //   .set('#', `src/views/${projectName.name}/`) // 定义在每个项目中的src路径
    // // 下面代码是控制public的路径，否则public下的js无法被引用
    // config.plugin('copy')
    //   .use(require('copy-webpack-plugin'), [
    //     [{
    //       from: `src/views/${projectName.name}/`,
    //       to: './',
    //       ignore: []
    //     }]
    //   ])
  },
  configureWebpack: {
    resolve: {
      // 配置解析别名
      alias: {
        "@images": path.resolve(__dirname, "./src/assets/images"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@jifenComponents": path.resolve(__dirname, "./src/views/jifen/components"),
        "@com": path.resolve(__dirname, "./src/components/common"),
        "@server": path.resolve(__dirname, "./src/server"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@VUEX": path.resolve(__dirname, "./src/store/index.js"),
        "@yundianImg": path.resolve(
          __dirname,
          "./src/views/yundian/assets/images"
        ),
        "@jifenImg": path.resolve(__dirname, "./src/views/jifen/assets/images"),
        "@plugin": path.resolve(__dirname, "./src/plugin")
      }
    },
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: 'js/[name].js?v=' + Version,
      chunkFilename: 'js/[name].js?v=' + Version
      // filename: "js/[name].js",
      // chunkFilename: "js/[name].js"
    }
  },
  assetsDir: "./assets",
  devServer: {
    proxy: {
      "/jifen": {
        // target: 'https://crmjifennew.jkcrm.com/jifen', //https://crmjifennew.jkcrm.com/jifen https://jdcrmjifentest.jkcrm.cn/jifen
        target: 'http://yqzjifennew.jkcrm.com/jifen',
        ws: true, // 是否启用websockets
        changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/jifen": ""
        }
      },
      "/jike/api": {
        target: "http://yqzjifennew.jkcrm.com/jifen",
        ws: true, // 是否启用websockets
        changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/jike/api": ""
        }
      },
      "/yundian/api": {
        target: "http://hshop.jkcrm.com/MicroMall-bootstrap",
        ws: true, // 是否启用websockets
        changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/yundian/api": ""
        }
      }
    }
    // overlay: {
    //   warnings: false,
    //   errors: false
    // },
    // lintOnSave: false
  },
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  filenameHashing: false,
  css: {
    sourceMap: true,
    //将组件内css提取到一个单独的css文件
    //是否使用css分离插件 ExtractTextPlugin
    extract: false
    // extract: true,
    //css 添加版本号
    // extract: {
    //   //一种方式，打包后的css 会带版本号，不改变文件名的。
    //   // filename: 'css/[name].css?v=' + Version,
    //   // chunkFilename: 'css/[name].css?v=' + Version
    //   filename: 'css/[name].css',
    //   chunkFilename: 'css/[name].css'
    // }
  },
  pages: {
    index: {
      entry: `src/views/${projectName.name}/main.js`,
      template: `public/index.html`,
      filename: "index.html"
    }
  }
};
