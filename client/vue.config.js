module.exports = {
    devServer: {
        proxy: {
            '/socket.io/': {
                target: 'http://localhost:3000',
                ws: true
            }
        }
    }
}