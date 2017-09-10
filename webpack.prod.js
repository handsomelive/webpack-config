/**
 * Created by Administrator on 2017/9/9.
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const UglifyJSPlugin  = require('uglifyjs-webpack-plugin');
module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    output: {
        // publicPath: "/assets/"
    },
    plugins: [
        // new UglifyJSPlugin()
        // new UglifyJSPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
});