var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/client.js'
    ],
    output: {
        path: __dirname,
        filename: '/public/lib/bundle.js'
    }
};
