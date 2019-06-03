arr=JSON.parse(sessionStorage.getItem("gameplays"));//获得储存值
console.log(arr);
// ds=JSON.parse(sessionStorage.getItem("death"));
// console.log(ds);
// kl=JSON.parse(sessionStorage.getItem("killer"));
// console.log(kl);
// pe=JSON.parse(sessionStorage.getItem("peo"));
// console.log(pe);
$(function(){
    // $("#back").click(function () {
    //     window.location="../js-3/js-3.html"
    // });
    $("#back").click(function () {
        if (window.confirm('要返回查看身份页面？')) {
            // sessionStorage.clear();
            window.location = "../js-3/js-3.html"
        } else {
            return false;//return false：在大多数情况下,为事件处理函数返回false,可以防止默认的事件行为，
            //js中return false作用一般是用来取消默认动作 / 阻止提交表单 / 阻止继续执行下面的代码。
            //这里用的意思就是阻止浏览器执行默认行为
        }
    })
//点击返回游戏页面
    $("#image-jump").click(function () {
        if (window.confirm('兄弟,你是要退出游戏么？')) {
            // sessionStorage.clear();
            window.location = "../js-2/js-2.html"
        } else {
            return false;//return false：在大多数情况下,为事件处理函数返回false,可以防止默认的事件行为，
            //js中return false作用一般是用来取消默认动作 / 阻止提交表单 / 阻止继续执行下面的代码。
            //这里用的意思就是阻止浏览器执行默认行为
        }
    })
});

$("#checkNum").click(function () {
    window.location="../js-5/js-5.html";
});
//生成杀人的盒子
function test() {
    for (var i=0;i<arr.length;i++){
        let html=(` <div class="box">
        <div class="lg-box">
            <div class="center-num">${arr[i]}</div>
            <div class="sm-num">${i+1}号</div>
    </div>`)
        $("main").append(html);
    }
}
test();

//开始游戏，将生成初始天数为什么要放在法官日志页面呢，因为法官日志页面跳转到法官日志页面的同事需要有天数的对象
//这个需要提前生成传递，现在我们将对象传递到下一个页面
var day=1.0;
console.log(day)
sessionStorage.setItem("DAY",JSON.stringify(day));

