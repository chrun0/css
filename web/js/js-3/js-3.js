 arr=JSON.parse(sessionStorage.getItem("gameplays"));//获得储存值
// console.log(arr);
// var b = document.getElementById("check-num");//获取一号身份
// var b=$("#checkNum");
//  console.log(b);
//  function f() {
//  }

 // $(function(){
 //     //退出游戏按钮
 //     $('#image-jump').click(function(){
 //         if(confirm('是否退出本轮游戏？')){
 //             sessionStorage.clear();
 //             window.open('..js-2/js-02.html"','_self');
 //             // window.location="..js-2/js-02.html"
 //         }else {
 //             return false;
 //         }
 //     });
     //返回
     // $('#back').click(function(){
     //     // window.open('roleset.html','_self');
     //     if(confirm('返回查看身份？')) {
     //         // sessionStorage.clear();
     //         window.open('roleset.html','_self');
     //     }
     // });
var num=0;
var a=$("#civilian");
// a && arr;
$("#imgno").hide();//隐藏第一张图片
$("#checkNum").click(function () {
    //点击次数
    num=num+1;
    // console.log(num+1-2);
    //查看身份计算
    var test=(num+2)/2;
    // console.log(test);
    var transmit=Math.ceil(test);//向上取整数
    // console.log(transmit);
    //计算数组下标。
    var index=Math.floor(num/2) ;
    // console.log(index);
    if (num%2 ===0){
        $("#imgno").hide();
        $("#imgshow").show();
        $("#circle").text(transmit);
        $("#checkNum").text("查看"+transmit+"号身份");//这个是查看
        $("#civilian").text(arr[index]);
    }else {
        $("#imgno").show();
        $("#imgshow").hide();
        $("#checkNum").text("隐藏身份并传递给"+transmit+"号");
    }
    // if (a && arr){
    //     $("#civilian").text("arr");
    // }else {
    //     $("#civilian").text("杀手");
    // }
    //获取数组长度
    if (num === arr.length*2-1){
        $("#checkNum").text("法官页面");
        storeValue();
    }//数组
    if (num === arr.length*2){
        $("#checkNum").text("法官页面");
        window.location="../js-4/js-4.html";
    }
    // console.log(num);
});
//数组生成对象
function storeValue() {
     var game=[];//空数组
     for (var i=0; i<arr.length; i++){
         game.push({name:arr[i],number:i+1,class:"active"})
     }
     // var death=[[]];//存放每天死的人。
     // var killer=[];//晚上杀掉的杀手。
     // var peo=[];//白天死掉的平民
     //浏览器存值
     sessionStorage.setItem("player",JSON.stringify(game));
     // sessionStorage.setItem("death",JSON.stringify(death));
     // sessionStorage.setItem("killer",JSON.stringify(killer));
     // sessionStorage.setItem("peo",JSON.stringify(peo));
}
 $(function(){
     //点击返回上一个页面
     // $("#back").click(function () {
     //     window.location="../js-2/js-02.html"
     // });
     $("#back").click(function () {
         if (window.confirm('要返回玩家分配页面？')) {
             // sessionStorage.clear();
             window.location = "../js-2/js-02.html"
         } else {
             return false;//return false：在大多数情况下,为事件处理函数返回false,可以防止默认的事件行为，
             //js中return false作用一般是用来取消默认动作 / 阻止提交表单 / 阻止继续执行下面的代码。
             //这里用的意思就是阻止浏览器执行默认行为
         }
     })
//点击返回游戏页面
     $("#image-jump").click(function(){
         if(  window.confirm('兄弟,你是要退出游戏么？')){
             // sessionStorage.clear();
             window.location="../js-2/js-2.html"
         }else {
             return false;//return false：在大多数情况下,为事件处理函数返回false,可以防止默认的事件行为，
             //js中return false作用一般是用来取消默认动作 / 阻止提交表单 / 阻止继续执行下面的代码。
             //这里用的意思就是阻止浏览器执行默认行为
         }
     });
 });
