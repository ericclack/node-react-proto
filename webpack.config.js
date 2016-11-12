var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/client.js'
    ],
    output: {
        path: __dirname,
        filename: '/public/lib/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', 
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
