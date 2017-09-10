/**
 * Created by Administrator on 2017/9/9.
 */
const path = require('path');
const webpack=require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');//用于将 CSS 从主应用程序中分离

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].bundle.js'//
    },
    module: {
        rules: [
            {
                test: /\.css$/,//["style-loader", "css-loader"]
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: "css-loader"
                })
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
            , {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // 指定公共 bundle 的名称。将公共模块分离出来 防止重复
        }),
        new HtmlWebpackPlugin({
            title: "Production"
        }),
        new ExtractTextPlugin("styles.css")
    ]
}
//    "build": "webpack",
//    "watch": "webpack --progress --watch",
//    "start": "webpack-dev-server --open",
// "start": "webpack-dev-server --open --config webpack.dev.js",
//     "build": "webpack --config webpack.prod.js",
//     "server": "node ./bin/server.js",
//     "test": "echo \"Error: no test specified\" && exit 1"