const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: config => {
    const CompressionWebpackPlugin = require('compression-webpack-plugin')
    if (process.env.NODE_ENV === 'production') {
      config.plugin('CompressionPlugin').use(
        new CompressionWebpackPlugin({
          test: /\.(js|css)$/,
          threshold: 10240, // 超过10kb的文件就压缩
          deleteOriginalAssets: true, // 不删除源文件
          minRatio: 0.8
        })
      )
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3721', // 这里可以跟随项目实际部署服务器来
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
      },
    }
  } 
})