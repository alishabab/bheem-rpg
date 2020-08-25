'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {

    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
          {
            test: [ /\.vert$/, /\.frag$/ ],
            use: 'raw-loader'
          }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ]

};
