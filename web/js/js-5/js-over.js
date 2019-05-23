arr=JSON.parse(sessionStorage.getItem("player"));//获得储存值//不会取浏览器中数组
// console.log(arr);
day=JSON.parse(sessionStorage.getItem("DAY"));
// console.log(day);//获得初始化天数的对象

//放回第一个页面
$("#back").click(function () {
    window.location="../js-2/js-2.html";
});
var civiliansLiving = 0;//声明拼命存活状态
var aliveKiller = 0;//声明杀手存活状态
for(i=0;i<arr.length;i++) {//对数组所有对象，进行判断

    if (arr[i].class=="active"){//筛选出存活的对象

        if(arr[i].name=="平民"){
            civiliansLiving++;
            console.log("剩下贫民人数",civiliansLiving);
        }else{
            aliveKiller++;
            console.log("剩下杀手人数",aliveKiller);
        }
    }
};
$("main").append(
    ` <pre>
剩余玩家：${civiliansLiving + aliveKiller}

                杀手人数：${aliveKiller}

                平民人数：${civiliansLiving}
        </pre>`
);

// dayText=["零","一","二","三","四","五","六","七","八","九","十"];
// //为了使es6加载的页面，开头也是“一、二、三”，就做了一个新的数组，根据天数来将它取出来，
// // 从而显示的是“第一天”“第二天”；而不是“第1天”“第2天”；
// dayEnglish=["zero","one-day","two-day","three-day",
//     "four-day","five-day","six-day", "seven-day","eight-day"];
// //为了是class命名语义化且正规，且方便用jqurey去寻找，也同样用了一个新数组
//
// console.log(dayText[parseInt(day)]);
// console.log( parseInt(day));
// console.log( typeof(parseInt(day)));
// //利用for和es6把他们渲染到html
//
//
// for(i=0;i <arr.length ;i++) {
//     if(arr[i].caonima=="被杀手杀死" && arr[i].day==1 ){
//         console.log(i);
//         $(".state").append(
//             ` <div class="gameday">
//             <p>第${dayText[i]}天</p>
//             <p>晚上：${arr[i].number}号被杀手看上，真实身份是${arr[i].name}</p>
//
//             </div>`);
//     }
//     console.log(i);
//     if(arr[i].caonima=="被全民投票杀死" && arr[i].day==1){
//         console.log(i);
//         $(".state").append(
//             ` <div class="gameday">
//             <p>第${dayText[arr[i].day]}天</p>
//
//              <p>白天：${arr[i].number}号被投票投死，真实身份是${arr[i].name}</p>
//             </div>`);
//     }
// };
dayText=["零","一","二","三","四","五","六","七","八","九","十"];
dayEnglish=["zero","one-day","two-day","three-day",
    "four-day","five-day","six-day", "seven-day","eight-day"];
//天数数的循环
for(i=1;i <= parseInt(day) ;i++){
    $(".state").append(
        ` <div class="gameday ${dayEnglish[i]} ">
            <p>第${dayText[i]}天</p>
            <p class="nightTip"></p>
            <p class="dayTip"></p>
            </div>`);
}

// for(i=0;i <arr.length ;i++){
//     if(arr[i].caonima=="被杀手杀死" && arr[i].day==1 ){
//         $(".gameday").children(".nightTip").append(
//             `<p >${i+1}号被投死，真实身份是${arr[i].name}</p>`
//         )
//     }
// }

for(i=0;i <arr.length ;i++){
    if(arr[i].caonima=="被杀手杀死" ){
        deadTime = arr[i].day;//找出死亡时间了；
            console.log("死亡时间",deadTime);
        var x = dayEnglish[deadTime];//获取对应的css的类的名称
        // console.log(x);//打印对应css的类的名称
        // console.log("."+ x);//检验$()搜索规则是否标准
        $("."+ x).children(".nightTip").append(
            `<p >晚上：${i+1}号被杀死，真实身份是${arr[i].name}</p>`
        )
    }
    if(arr[i].caonima=="被全民投票杀死" ){
        deadTime = arr[i].day;//找出死亡时间了；
        // console.log("死亡时间",deadTime);
        var x = dayEnglish[deadTime];//获取对应的css的类的名称
        // console.log(x);//打印对应css的类的名称
        // console.log("."+ x);//检验$()搜索规则是否标准
        $("."+ x).children(".dayTip").append(
            `<p >白天：${i+1}号被投死，真实身份是${arr[i].name}</p>`
        )
    }
};



$(".to-a-game").click(function () {
    window.location = "../js-2/js-2.html"
});

//点击返回游戏页面
    $("#image-jump").click(function () {
        if (window.confirm('结束游戏？')) {
            // sessionStorage.clear();
            window.location = "../js-2/js-2.html"
        } else {
            return false;//return false：在大多数情况下,为事件处理函数返回false,可以防止默认的事件行为，
            //js中return false作用一般是用来取消默认动作 / 阻止提交表单 / 阻止继续执行下面的代码。
            //这里用的意思就是阻止浏览器执行默认行为
        }
    })
// $(".state").append(
//     ` <div class="gameday">
//             <p>第${dayText[i]}天</p>
//             <p>晚上：${arr[i].number}号被杀手看上，真实身份是${arr[i].name}</p>
//              <p>白天：${arr[i].number}号被投票投死，真实身份是${arr[i+1].name}</p>
//             </div>`

    // `<div class="day ${dayEnglish[i]}"><div class="dayday">第${dayText[i]}天</div>
    //          <div class="vote ">
    //              <div class="box">
    //                   <div class="killer-to-kill condition">
    //         <div class="kill-box but-box">
    //         杀手杀人
    //         <div id="f-h" class="triangle"></div></div>
    //         <img src="img/03.png" height="30" width="30"/>










// for(i=0;i<arr.length;i++) {//对数组所有对象，进行判断
//     if (arr[i].class=="active" && arr[i].name=="平民"){//筛选出存活的对象
//         livepingmin = livepingmin+1;
//         console.log("剩下贫民人数",livepingmin);
//     }
//     if(arr[i].class=="active" && arr[i].name=="杀手"){
//         liveshashou = liveshashou+1;
//         console.log("剩下杀手人数",liveshashou);
//     }
// }
