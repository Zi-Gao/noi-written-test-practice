// vue.config.js

process.env.VUE_APP_BUILD_TIME = (new Date()).toString()

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  publicPath: '/', // 部署到github pages
  chainWebpack: config => {
    config.module
      .rule('yaml')
      .test(/\.ya?ml?$/)
      .use('yaml-loader')
      .loader('yaml-loader')
  }
}