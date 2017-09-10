/**
 * Created by Administrator on 2017/9/8.
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpack = require("webpack");
console.log(__dirname)
module.exports = {
    entry: {
        app: "./src/index.js"
        // print: "./src/print.js"
    },
    output: {
        // filename: "bundle.js",
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
        // compress: true,
        // port: 8082
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
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
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "Output Mangement",
            // filename:'./dist/index01.html',
            // template:'./dist/index01.html'
        }),
        new UglifyWebpackPlugin()
    ]
}