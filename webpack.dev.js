/**
 * Created by Administrator on 2017/9/9.
 */
const merge = require('webpack-merge');

const common = require('./webpack.common.js');
module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins:[]
})