/**
 * Created by Administrator on 2017/9/8.
 */
// import _ from 'lodash';
import "./style.css";
import Icon from  './icon.png';
import Data from './data.xml';
// import printMe from './print.js';
function im() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(_=>{
        var s=_.join(['Hello', 'webpack','I.am xu'], ' ');
        return s;
    }).catch(error=>{
        'An error occurred while loading the component'
    })
}
function component() {
    var ele = document.createElement('div');
    var btn = document.createElement("button");

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    ele.innerHTML = ['Hello', 'webpack'].join("");
    ele.classList.add("hello");
    console.log(Icon);
    var myIcon = new Image();
    myIcon.src = Icon;
    ele.appendChild(myIcon);

    btn.innerHTML = 'Click me and check the console!';

    btn.onclick = e => import(/*webpackChunkName:"print"*/ "./print").then(module => {
        var printMe = module.default;
        printMe();
    });
    ele.appendChild(btn);
    // printMe();
    var d = 0;
    var x = 0;
    console.log(d, d);
    return ele;
}
im().then(s=>{
    console.log(s);
})
// document.body.appendChild(component());
// console.log(module.hot);
let element = component();
document.body.appendChild(element);
// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log('Accepting the updated printMe module!');
//         // printMe();
//         document.body.removeChild(element);
//         element = component();// 重新渲染页面后，component 更新 click 事件处理
//         document.body.appendChild(element);
//     })
//
// }