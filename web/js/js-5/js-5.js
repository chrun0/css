arr=JSON.parse(sessionStorage.getItem("player"));//获得储存值//不会取浏览器中数组
console.log(arr);
day=JSON.parse(sessionStorage.getItem("DAY"));
console.log(day);//获得初始化天数的对象
console.log(typeof (day));
console.log(parseInt(day));
console.log(typeof (parseInt(day)));
$(function(){
    // $("#back").click(function () {
    //     window.location="../js-4/js-4.html"
    // });
    $("#back").click(function () {
        if (window.confirm('要返回重开游戏么？')) {
            // sessionStorage.clear();
            window.location = "../js-2/js-2.html"
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
dayText=["零","一","二","三","四","五","六","七","八","九","十"];
//为了使es6加载的页面，开头也是“一、二、三”，就做了一个新的数组，根据天数来将它取出来，
// 从而显示的是“第一天”“第二天”；而不是“第1天”“第2天”；
dayEnglish=["zero","one-day","two-day","three-day",
    "four-day","five-day","six-day", "seven-day","eight-day"];
//为了是class命名语义化且正规，且方便用jqurey去寻找，也同样用了一个新数组
console.log(dayText[parseInt(day)]);
console.log( parseInt(day));
console.log( typeof(parseInt(day)));
//利用for和es6把他们渲染到html
for(i=1;i <= parseInt(day) ;i++) {
    $("main").append(
        `<div class="day ${dayEnglish[i]}"><div class="dayday">第${dayText[i]}天</div>
             <div class="vote ">
                 <div class="box">
                      <div class="killer-to-kill condition">
            <div class="kill-box but-box">
            杀手杀人
            <div id="f-h" class="triangle"></div></div>
            <img src="img/03.png" height="30" width="30"/>
            
        </div>
                      <div class="killer-to-kill" >
                           <div class="deaderTall but-box">
                                 亡灵发表遗言
                                <div class="triangle"></div>
                           </div>
                            <img src="img/04.png" height="30" width="30"/>
                      </div>
                      <div class="killer-to-kill">
            <div class="liveTall but-box">
            玩家依次发言
            <div class="triangle"></div></div>
        </div>
                      <div class="killer-to-kill State-to-vote">
            <div class="vote-box but-box">
                全名投票
            <div class="triangle"></div>
            </div>
        </div>
                  </div>
             </div>
        </div>`
    );
};
//死掉的玩家渲染在相同的位置：
// 原理：通过判断数组里对象的天数属性和死亡属性，将符合条件的对象取出来，然后通过es6将他们渲染到相应的位置。

//总在fou循环里面做了一个判断，就是当对象i是草拟吗的时候状态的时候，下面盒子显示的状态是草拟吗对象的状态
//for循环作用：就是讲数组里的对象，全部判断一遍
for (i=0;i<arr.length;i++){
    //草拟吗就是被杀手杀死的单独的对象。arr[i]是数组下标
    if (arr[i].caonima =="被杀手杀死" ){
        //if作用：先将数组里被杀手杀的的对象筛选出来
        var deadTime=arr[i].day;//获取死亡天数
        var xxx = dayEnglish[deadTime];//获取对应的css的类的名称
        console.log(xxx);//打印对应css的类的名称
        console.log("."+ xxx);//检验$()搜索规则是否标准
        $("."+ xxx).children().children().children(".condition").append(//放到对应CSS下（那天死的，放到那天下）
            `<div style="color: black">${i+1}号被杀死，真实身份是${arr[i].name}</div>`
        );
    }
};
for (i=0;i<arr.length;i++){
    //草拟吗就是被杀手杀死的单独的对象。arr[i]是数组下标
    if (arr[i].caonima =="被全民投票杀死" ){
        var deadTime=arr[i].day;//获取死亡天数
        var xxx = dayEnglish[deadTime];//获取对应的css的类的名称
        console.log(xxx);//打印对应css的类的名称
        console.log("."+ xxx);//检验$()搜索规则是否标准
            $("."+ xxx).children().children().children(".State-to-vote").append(
            `<div style="color: black">${i+1}号被投死，真实身份是${arr[i].name}</div>`
        );
    }
};
//依次点击：
// 原理：引入一个全局变量day，然后在游行进程里没进行一次就+0.1的值；当全民投完成票是day取新的一天。
// 然后每个按钮只有在符合自己的时间时才能被点击，否则就弹窗提示“依次点击”；对过往的点击也通过day判断和qruey的遍历共同使用来禁点；
//杀手杀人，跳转
$(".kill-box").click(function () {
    //toFixed返回 NumberObject 的字符串表示，不采用指数计数法
    //day+0.1 可能会出现1.10000000001；所以用toFixed让它变成保留一位小数的字符串；然后用parseFloat将它变成数字
    day = parseFloat((day+0.1).toFixed(1));
    //原本应该是day=day+0.1，但是js计算不准确，所以先让它 用toFixed转换为字符串，再用parseFloat变成数字
    console.log(day);
    console.log(typeof (day));//判断数据类型
    sessionStorage.setItem("DAY",JSON.stringify(day));//上传数据
    window.location="js-sharen.html";
    //这个不做禁点，是因为点击之后跳转了页面，就等于一次刷新，后面那个禁点能生效。
});
//亡灵发表遗言，弹窗
$(".deaderTall").click(function () {
    if( (day%1).toFixed(1) == "0.2"){
        day = parseFloat((day+0.1).toFixed(1));
        sessionStorage.setItem("DAY",JSON.stringify(day));
        alert("请死掉的SB说话");
        // console.log(day);
        //点击之后禁点，因为后面那个禁点，只对页面刷新有效果。
        // $(".deaderTall").css("opacity","0.5");
        // $(".deaderTall").off("click");
        $(this).css("opacity","0.5");//这里用this来替代".deaderTall"，但是注意去掉双引号。
        $(this).off("click");

    }else {
        alert("你脑子有坑吗，依次点击好吗？")
    }
});
//请玩家发言，弹窗
$(".liveTall").click(function () {
    if( (day%1).toFixed(1) == "0.3"){
        day = parseFloat((day+0.1).toFixed(1));
        alert("请活着的天才说话");
        console.log(day);
        $(this).css("opacity","0.5");
        $(this).off("click");
    }else {
        alert("你脑子有坑吗，依次点击好吗？")
    }

});
//全民投票，跳转
$(".vote-box").click(function () {
    if( (day%1).toFixed(1) == "0.4"){
        day = parseFloat((day+0.1).toFixed(1));
        sessionStorage.setItem("DAY",JSON.stringify(day));
        window.location="js-tp.html";
        //同杀人页面一样，这个也跳转，也刷新，就不用再做一次禁点
    }else {
        alert("你脑子有坑吗，依次点击好吗？")
    }

});
//页面加载的时候，判断禁点；
// if ((day%1).toFixed(1)== "0.2") {//写出为什么放在“杀手杀人，跳转”后面

if ((day%1).toFixed(1) == "0.2") {
    $(".kill-box").css("opacity","0.5");
    $(".kill-box").off("click");
}
//按钮禁点
for (i=1;i<parseInt(day);i++){
    //for循环作用，将目前的day天数之前选择出来
    var lasttime = dayEnglish[i];//获取前几天相对应的class名称，然后通过遍历变色和禁点。
    console.log(lasttime);//打印对应css的类的名称
    console.log("."+ lasttime);//检验$()搜索规则是否标准
    $("."+ lasttime).children(".vote").children(".box").children(".killer-to-kill").children(".but-box").css("opacity","0.5");
    $("."+ lasttime).children(".vote").children(".box").children(".killer-to-kill").children("but-box").off("click");
    $("."+ lasttime).children(".vote").hide();
    //上面是遍历写的，总体这个一个大的循环，主要是为了一天完成跳转页面的禁点事件，还有点击背景颜色转变
};
// //让亡灵发表遗言禁点，
// if ((day%1).toFixed(1) >= "0.3") {
//     $(".deaderTall").css("opacity","0.5");
//     $(".deaderTall").off("click");
// }
//
// //让玩家发言禁点，
// if ((day%1).toFixed(1) >= "0.4") {
//     $(".liveTall").css("opacity","0.5");
//     $(".liveTall").off("click");
// }
//
// if ((day%1).toFixed(1) >= "0.5") {
//     $(".vote-box").css("opacity","0.5");
//     $(".vote-box").off("click");
// }

//第一天显示影藏
$(".dayday").click(function () {
    if ($(this).next(".vote").css("display")=='block'){
        $(this).next(".vote").hide();//显示
    } else {
        $(this).next(".vote").show();//影藏
    }
});
//
// $(".end-game").click(function () {
//     window.location = "js-over.html";
// });


// });
$(".end-game").click(function () {
    window.location = "../js-2/js-2.html"
});
$(".judge").click(function () {
    window.location = "../js-5/js-log.html"
});
