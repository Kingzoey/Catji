// vue.config.js
module.exports = {
    devServer: {
        overlay: { // 让浏览器 overlay 同时显示警告和错误
            warnings: true,
            errors: true
        },
        host: "localhost",
        port: 8080, // 端口号
        open: false, //配置自动启动浏览器
        hotOnly: true, // 热更新
    }
}
