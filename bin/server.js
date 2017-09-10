/**
 * Created by Administrator on 2017/9/8.
 */
const express=require('express');
const webpack=require('webpack');
const webpackDevMiddleware=require('webpack-dev-middleware');

const app=express();
const config=require('../webpack.config');
const compiler=webpack(config);
// console.log(compiler);
app.use(webpackDevMiddleware(compiler,{
    publicPath:config.output.publicPath
}));
app.listen(3000,function () {
    console.log('Example app listening on port 3000!\n');
})