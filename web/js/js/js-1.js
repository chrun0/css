// function changecolor() {
//     x=document.getElementById("aaa");
//     a=parseInt(Math.random()*16).toString(16);
//     b=parseInt(Math.random()*16).toString(16);
//     c=parseInt(Math.random()*16).toString(16);
//     x.style.background = "#" +a +b +c;
// }
function changecolor() {
    var x=document.getElementsByClassName("box");//找到元素
    var a=parseInt(Math.random()*16).toString(16);//随机获取颜色
    var b=parseInt(Math.random()*16).toString(16);//随机获取颜色
    var c=parseInt(Math.random()*16).toString(16);//随机获取颜色
    x[parseInt(Math.random()*9)].style.background = "#" +a +b +c;//点击上面三个样式整合成一个样式进行改变
    x[parseInt(Math.random()*9)].style.background = "#" +a +b +c;
    x[parseInt(Math.random()*9)].style.background = "#" +a +b +c;
}
