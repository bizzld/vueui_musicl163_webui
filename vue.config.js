const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: false,
  //关闭严格模式
  lintOnSave: false,
  //跨域问题
  devServer: {
    open: true, //是否自动弹出浏览器页面
    port: '80',
    https: false, //是否使用https协议
    proxy: {
      '/': {
        target: 'http://cloud-music.pl-fe.cn/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
      }
    }
  }
})