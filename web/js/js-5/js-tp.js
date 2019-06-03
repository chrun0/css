arr=JSON.parse(sessionStorage.getItem("player"));//获得储存值//不会取浏览器中数组
console.log(arr);
//515
day=JSON.parse(sessionStorage.getItem("DAY"));
console.log(day);
//515


$(function(){
    // $("#back").click(function () {
    //     window.location="../js-4/js-4.html"
    // });
    $("#back").click(function () {
        if (window.confirm('兄弟,你是要返回重开游戏么？')) {
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


//用es6生成杀人的盒子
function test() {
    for (var i=0;i<arr.length;i++){
        let html=(` <div class="box">
        <div class="lg-box ${arr[i].class}">
            <div class="center-num ${arr[i].class}">${arr[i].name}</div>
            <div class="sm-num">${i+1}号</div>
        <img class="knifc" src="img2/03.png" height="17" width="27"/></div>
    </div>`)
        $("main").append(html);
    }
}
test();
$(".knifc").hide();//先把刀隐藏掉
// xxxxx = undefined;
$(".lg-box").click(function () {
    $(".center-num").removeClass("index");//删除平民杀手的赋予的背景颜色
    $(this).children(".center-num").addClass("index");//显示贫民杀手的背景颜色
    $(".knifc").hide();//先点击隐藏
    $(this).children(".knifc").show();//运用逻辑，跟上面点击隐藏一起，点击一个盒子显示，其他盒子隐藏
    x=this;//this就是上面this选中的本身
    return  x;//返回
});

$(".kinging").css("background","#565656");//杀人页面的盒子到投票页面盒子因为已经杀死了要变颜色

$("#checkNum").click(function () {
    var q=$(".lg-box").index(x); //index返回，q是选中盒子对应的数组下标
    console.log(q);
    console.log(arr[q].name );
    if (arr[q].class == "kinging"){
        alert("你瞎么？玩家已经死了");
    }
    else {
        //投票页面投死杀手平民都可以投死的
        arr[q].class = "kinging";//class是改变玩家的生死状态，此时的所有状态有生有死
        arr[q]['caonima'] = "被全民投票杀死";//说明这个是被全民投票杀死
        arr[q]['day'] = parseInt(day);//说明这个杀手是第一天杀死的
        //515
        gameover();
        // day = parseInt(day)+1;
        // sessionStorage.setItem("DAY", JSON.stringify(day));
        //515

        // window.location = "../js-5/js-5.html";//这就是重新跳转到法官台本页面
        sessionStorage.setItem("player", JSON.stringify(arr));//将新的数组上传到浏览器
        // console.log(arr);
    }
});
function gameover() {


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

    // if( civiliansLiving == aliveKiller){
    //     alert("杀手胜利")
    //     window.location = "js-over.html";
    // }
    // if (aliveKiller ==0){
    //     window.location = "js-over.html";
    // }
    switch(true) {
        case civiliansLiving == aliveKiller:
            alert("杀手胜利");
            window.location = "js-over.html";
            break;
        case aliveKiller ==0:
            alert("平民胜利");
            window.location = "js-over.html";
            break;
        case civiliansLiving ==0:
            alert("杀手胜利");
            window.location = "js-over.html";
            break;
        default:
            day = parseInt(day)+1;
            sessionStorage.setItem("DAY", JSON.stringify(day));
            window.location="../js-5/js-5.html";//这就是重新跳转到法官台本页面
    }
}
