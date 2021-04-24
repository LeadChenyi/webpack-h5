const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../dist',  // 相当于baseUrl
        openPage:'app.html',     // 启动服务指定打开APP首页
        index:'app.html'         // 主入口也引到该APP首页 http://localhost:8080 等同于 http://localhost:8080/app.html（推荐还是index，便于线上访问）
    }
});