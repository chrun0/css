arr=JSON.parse(sessionStorage.getItem("player"));//获得储存值//不会取浏览器中数组
console.log(arr);

day=JSON.parse(sessionStorage.getItem("DAY"));
console.log(day);//获得初始化天数的对象
console.log(typeof (day));
console.log(parseInt(day));
console.log(typeof (parseInt(day)));

$("#back").click(function () {
    alert("");
    window.location="../js-2/js-02.html";
});


dayText=["零","一","二","三","四","五","六","七","八","九","十"];
dayEnglish=["zero","one-day","two-day","three-day",
    "four-day","five-day","six-day", "seven-day","eight-day"];
console.log(dayText[parseInt(day)]);
console.log( parseInt(day));
console.log( typeof(parseInt(day)));
for(i=1;i <= parseInt(day) ;i++) {
    $("main").append(
        `<div class="day ${dayEnglish[i]}"><div class="dayday">第${dayText[i]}天</div>
             <div class="vote ">
                 <div class="box">
                      <div class="killer-to-kill condition">
            <div class="kill-box">
            杀手杀人
            <div id="f-h" class="triangle"></div></div>
            <img src="img/03.png" height="30" width="30"/>
            
        </div>
                      <div class="killer-to-kill" >
                           <div class="deaderTall">
                                 亡灵发表遗言
                                <div class="triangle"></div>
                           </div>
                            <img src="img/04.png" height="30" width="30"/>
                      </div>
                      <div class="killer-to-kill">
            <div class="liveTall">
            玩家依次发言
            <div class="triangle"></div></div>
        </div>
                      <div class="killer-to-kill State-to-vote">
            <div class="vote-box">
                全名投票
            <div class="triangle"></div>
            </div>
        </div>
                  </div>
             </div>
        </div>`
    );
}


//总在fou循环里面做了一个判断，就是当对象i是草拟吗的时候状态的时候，下面盒子显示的状态是草拟吗对象的状态
for (i=0;i<arr.length;i++){
    //草拟吗就是被杀手杀死的单独的对象。arr[i]是数组下标
    if (arr[i].caonima =="被杀手杀死" ){
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

//杀手杀人，跳转
$(".kill-box").click(function () {
    //toFixed返回 NumberObject 的字符串表示，不采用指数计数法
    //day+0.1 可能会出现1.10000000001；所以用toFixed让它变成保留一位小数的字符串；然后用parseFloat将它变成数字
    day = parseFloat((day+0.1).toFixed(1));
    console.log(day);
    console.log(typeof (day));
    sessionStorage.setItem("DAY",JSON.stringify(day));
    window.location="js-sharen.html";
    //这个不做禁点，是因为点击之后跳转了页面，就等于一次刷新，后面那个禁点能生效。
});

//亡灵发表遗言，弹窗
$(".deaderTall").click(function () {
    if( (day%1).toFixed(1) == "0.2"){
        day = parseFloat((day+0.1).toFixed(1));
        sessionStorage.setItem("DAY",JSON.stringify(day));
        alert("请死掉的SB说话");
        console.log(day);
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

for (i=1;i<parseInt(day);i++){
    var lasttime = dayEnglish[i];//获取对应的css的类的名称
    console.log(lasttime);//打印对应css的类的名称
    console.log("."+ lasttime);//检验$()搜索规则是否标准
    $("."+ lasttime).children(".vote").children(".box").children(".killer-to-kill").children().css("opacity","0.5");
    $("."+ lasttime).children(".vote").children(".box").children(".killer-to-kill").children().off("click");
    $("."+ lasttime).children(".vote").hide();
}
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
        $(this).next(".vote").hide();
    } else {
        $(this).next(".vote").show();
    }
});







