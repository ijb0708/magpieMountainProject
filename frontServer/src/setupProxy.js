const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {

    app.use(
        '/test',
        createProxyMiddleware({
            target: "http://localhost:6202",
            changeOrigin: true,
        })
    );

};