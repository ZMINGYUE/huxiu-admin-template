const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    // 定义程序中打包公共文件的入口文件vendor.js
    vendor: ['vue', 'vue-router', 'vuex', 'axios']
  },

  output: {
    path: path.join(__dirname, './dll'),
    filename: 'vendor.dll.js',
    library: 'vendor_[hash]_lib',
    libraryTarget: 'var'
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, './dll/', 'vendor-manifest.json'),
      name: 'vendor_[hash]_lib',
      context: __dirname
    })
  ]
};