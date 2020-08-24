// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV == 'gh-pages' ? '/Catji/' : '/',
    devServer: {
        overlay: { // 让浏览器 overlay 同时显示警告和错误
            warnings: true,
            errors: true
        },
        host: "localhost",
        port: 8080, // 端口号
        open: false, //配置自动启动浏览器
        hotOnly: true, // 热更新
        proxy: {
            '/api': {
                target: 'http://myweb1008.xyz:12340/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': 'api'
                }
            }
        }
    },
}
