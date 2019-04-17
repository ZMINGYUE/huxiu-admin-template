const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    // 定义程序中打包公共文件的入口文件vendor.js
    vendor: ['vue', 'vue-router', 'vuex', 'axios']
  },

  output: {
    path: path.resolve(__dirname, "./dll"),
    filename: "[name].js",
    sourceMapFilename: "[name].map",
    pathinfo: true,
    library: '[name]_dll'
  },
  

  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: "[name]_[hash]",
      path: path.join(__dirname, "dll", "manifest.json")
   })
  ]
};