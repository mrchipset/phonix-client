module.exports = {
    publicPath: "./",
    outputDir: 'dist',
    devServer: {
      proxy: 'https://phonix.mrchip.info'
    },
    configureWebpack: {
      devtool: 'source-map'
    },

    pluginOptions: {
      electronBuilder: {
          nodeIntegration: true
      }
    },
  }
  
