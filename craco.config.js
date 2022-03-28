const path = require('path')

module.exports = {
  // 配置项目的别名
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}
