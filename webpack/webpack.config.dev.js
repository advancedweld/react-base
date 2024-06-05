/*
 * @Author: xiangshangzhi
 * @Date: 2022-07-20 12:42:23
 * @FilePath: \react-base\webpack\webpack.config.dev.js
 */
// 合并规则

const isProductionMode = process.env.NODE_ENV === 'production';

const { merge } = require('webpack-merge');
// 导入基础配置
const { baseConfig } = require('./webpack.config.base');
module.exports = merge(baseConfig, {
  // 环境设置：开发环境
  mode: 'development',
  // 便于开发调试 这里开启source-map模式
  devtool: 'source-map',
  // webpack-dev-server 的一下配置，webpack-dev-server 会提供一个本地服务(serve)
  devServer: {
    // host
    host: '0.0.0.0',
    // 端口
    port: 3003,
    // 热更新
    hot: true,
    // 启动时打开浏览器
    open: true,
    // 路由返回index.html'，避免出现404
    historyApiFallback: true,
    // https://github.com/chimurai/http-proxy-middleware/tree/v2.0.6#http-proxy-middleware-options
    proxy: [
      {
        router: {
          'integration.localhost:3000': 'http://localhost:8001', // host only
          'staging.localhost:3000': 'http://localhost:8002', // host only
          'localhost:3000/api': 'http://localhost:8003', // host + path
          '/rest': 'http://localhost:8004', // path only
        },
      },
    ],
    open: {
      target: 'http://localhost:3003',
    },
  },
});
