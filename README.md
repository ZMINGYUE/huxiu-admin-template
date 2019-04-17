# huxiu-io

> 这是一个虎嗅的管理平台前端模版框架

## Build Setup

```bash
# Clone project
git clone 

# Install dependencies
npm install

# Serve with hot reload at localhost:9528
npm run dev

# Build for production with minification
npm run build

# Build for production and view the bundle analyzer report
npm run build --report
```

# steps for building this project
1. 新建文件夹并初始化
```shell
npm init
```
2. 新建一些空文件和文件夹大概如下
```shell
.
├── README.md # 介绍一下项目情况
├── UPDATA.md # 记录项目更新
├── build # 将来放构建相关的weback配置文件
├── config #将来放一些全局的配置文件
├── package-lock.json
├── package.json #初始化后产生的文件
├── src #代码主要要放的地方
│   └── main.js #将来的项目入口
└── static #将来放静态文件，此文件夹可映射到根目录，将来放一些robots.txt之类的需要放根目录的文件
```
3. 下载一些跟webpack相关的依赖
```shell
npm i webpack webpack-bundle-analyzer webpack-cli webpack-dev-server webpack-merge -D
npm i friendly-errors-webpack-plugin -D
```
建一个编辑器的配置文件`.editorconfig`,跟我们其它项目都是**一样**的。
建一个git的忽略文件`.gitignore`，配置跟其它的一样，根据不同的项目可有所调整

4. 下载一些可能用到式的依赖,svg那个是因为我的项目的icon会用到svg
```shell
npm i  vue-loader vue-template-compiler url-loader mini-css-extract-plugin node-sass sass-loader css-loader html-webpack-plugin autoprefixer rimraf svg-sprite-loader -D
 npm i postcss-loader -D
```
根目录下新建`.postcssrc.js`文件写一些postcss的配置，目前跟虎嗅项目一样，这个可以根据不同的项目调整

5. eslint相关的一些依赖
```shell
 npm i eslint eslint-config-vue eslint-loader eslint-plugin-html eslint-plugin-vue -D
```
根目录下建eslint的配置文件`.eslintrc.js`配置跟我们做的其它项目是**一样**的，还有一个忽略eslint的配置文件`.eslintignore`，ignore文件根据不同的项目可有所调整

6. babel相关的一些依赖
```shell
npm i @babel/core @babel/plugin-transform-spread @babel/plugin-syntax-dynamic-import @babel/plugin-transform-runtime @babel/preset-env babel-eslint babel-loader -D
```
根目录下建babel的配置文件`.babelrc`,配置目前跟我们其它项目一样，会根据不同的项目有所调整
这两个是在dependencies里的
```shell
 npm i @babel/polyfill @babel/runtime
```
7. 下载一些真正用的到`vue`,`vuex`,`vue-router`, `axios`等等
```shell
 npm i vue vuex vue-router axios
```
8. 建一些新的文件和文件夹，目录结构如下
```shell
.
├── README.md
├── UPDATA.md
├── build
│   ├── utils.js # 构建过程中用到的一些公共方法
│   ├── webpack.base.conf.js # 基础配置
│   ├── webpack.dev.conf.js #开发环境配置
│   └── webpack.prod.conf.js #生产环境配置
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── favicon.ico 
├── package-lock.json
├── package.json
├── postcss.config.js
├── src #项目相关的一些文件
│   ├── App.vue #根节点
│   ├── api #放api相关的一些文件夹
│   ├── assets #放资源
│   ├── components #放公共组件
│   ├── main.js # 入口文件
│   ├── index.html # 模版文件
│   ├── router.js #路由文件
│   ├── styles #放一些样式文件
│   ├── utils #放一些公共的方法
│   └── views #放视图文件
└── static
```
9. 需要的基本上都下载了，下面就是填充这些文件，配置文件的过程，如果有遗漏的库需要下载的会在这里特别说明一下，在哪里用到。
这个项目是打算建一个公共的没有ui基底，供日志系统和后台管理系统使用，一个用`shards-ui` 和 `bootstrap`，一个用`vuetify`，所以这个项目用到的东西是最最基础的，两个项目通用的一些东西。项目配置和结构参考了潘佳辰的admin-template以及我们已经在开发的虎嗅新版PC站
  1）参考潘佳辰的`vue-admin-template`项目，链接会放在最后，在`build`文件夹下要新建`build.js`, `check-version`文件
  ```shell
  npm i chalk semver shelljs -D
  ```
  2）`node-notifier`使用位置在build构建文件夹的uitls.js里
  ```shell
  npm i node-notifier -D
  ```
  3）下载`ora`
  ```shell
  npm i ora -D
  ```
  4）下载`portfinder`
  ```shell
  npm i portfinder -D
  ```
  5）下载`eslint-friendly-formatter`
  ```shell
  npm i eslint-friendly-formatter -D
  ```
  6）下载`js-cookie`
  ```shell
  npm i js-cookie
  ```
  7）补一些生产环境下需要用的webapck的插件,下载`copy-webpack-plugin uglifyjs-webpack-plugin script-ext-html-webpack-plugin optimize-css-assets-webpack-plugin`
  ```shell
  npm i copy-webpack-plugin script-ext-html-webpack-plugin optimize-css-assets-webpack-plugin -D
  ```
  8）`sass-resources-loader`
  ```shell
  npm i sass-resources-loader -D
  ```
  9）`npm i -S core-js@2.5.7` 只有这个版本的才好使
  ```shell
  npm i npm i -S core-js@2.5.7 -D
  ```

10. 参考链接

    [潘佳辰项目地址]: https://github.com/PanJiaChen/vue-admin-template

