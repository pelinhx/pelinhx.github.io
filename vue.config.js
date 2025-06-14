module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio-website/'
    : '/',
  css: {
    extract: {
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    }
  },
  // Add this for more consistent builds
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  }
}