const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  rules: [
    {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
    }
]
})