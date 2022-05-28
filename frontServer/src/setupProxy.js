const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {

    app.use(
        '/test',
        createProxyMiddleware({
            target: backend,
            changeOrigin: true,
        })
    );

};