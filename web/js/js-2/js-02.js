var a = document.getElementById("player");//玩家总人数
console.log(a);
var b = document.getElementById("slider");//滑块的值
console.log(b)
function on_change() {
    if (a.value >= 4 && a.value <= 18) {//设置方框里面玩家人数范围
        b.value=a.value ;//将玩家总人数赋值给滑块的值，实现动态变化
    } else {
        alert("请输入正确的人数4~18");
        a.value=4;
        b.value=4;
        //人数超出范围的话，弹出警告框，并且将方框和滑块的值重置为4
    }
}
function aroundr() {// 滑块的值改变，运行这个函数
    a.value=b.value;
    //滑块的值改变的话，滑块的值赋值给方框，实现动态变化
}
function minus() {
    a.value--;
    //减的按钮，减掉玩家总人数的值
    if (a.value<4){
        alert("人太少了，玩个毛线");
        a.value=4;
        //人数超出范围的话，弹出警告框，并且将方框和滑块的值重置为4
    } else {
        b.value=a.value;// 将玩家人数赋值给滑轮的值
    }
}
function plus() {
    a.value++;
    //加的按钮，减掉玩家总人数的值，上面的值已经相互关联了，所以方框的值改变，滑块的值也会改变
    if (a.value>18){
        alert("人太多了，玩个锤子");
        a.value=18;
        //人数超出范围的话，弹出警告框，并且将方框和滑块的值重置为18
    } else {
        b.value=a.value;// 将玩家人数赋值给滑轮的值
    }
}
function allocation() {
    // console.log(a.value);
    // var num = a.value /4;
    // document.getElementById("dm").innerHTML=num;
    // var num = a.value;
    // if (num<=4 || num>=18){
    //     //     a.value=4;
    //     //     alert('请输入4-18')
    var arr = a.value;
    if (arr<4){
        arr=4;
    }
    if (arr<=4){
        dm=1;
    }
    else if(arr<=10) {
        dm=2;
    } else if(arr<=15) {
        dm=3;
    } else if(arr<=18) {
        dm=4;
    }
    sm=arr-dm;
    document.getElementById("dm").innerHTML=dm;
    document.getElementById("sm").innerHTML=sm;
}
var e = document.getElementById("Water-people");
var d = document.getElementById("spirit");
function go() {
    console.log(e && d);//打印e和d
    if (e.value!= "" && d.value!="") {
        window.location="../js-3/js-3.html"
    }//value不等于空
    else {
        alert("请输入词组")
    }
}
function shuffle() {
    console.log(sm);
    n = new Array (parseInt(sm)).fill("平民");//填充数组，转换值
    console.log(n);
    m = new Array (parseInt(dm)) .fill("杀手");
    console.log(m);
    var arr=m.concat(n);//数组合并
    console.log(arr);

    function shuffleArray(arr) {
        var arr = arr.slice();
        var len = arr.length;
        var temp, random_index;
        while (len != 0) {
            random_index = Math.round(0 + (len - 1 - 0) * Math.random());
            temp = arr[random_index];
            arr[random_index] = arr[len - 1];
            arr[len - 1] = temp;
            --len;
        }
        console.log(arr);
       // 浏览器存值.
        sessionStorage.setItem("gameplays",JSON.stringify(arr));
 //清除存志.
        // sessionStorage.clear();
        return arr;
    }
shuffleArray(arr);


    // var i = mn.slice(0),t=m.length,x,y;
    // for (t>=0;t--;){
    //     y =Math.floor((t+1),Math.random());
    //     x = [y];
    //     i[x] =[t];
    //     [t] = x;
    // }
    // console.log()
}

// function on_change() {
//     var playNum = parseInt(document.getElementById("player").value);//玩家总人数
//     console.log(playNum);
//     var sliderNum = parseInt(document.getElementById("slider").value);//滑块的值
//     console.log(playNum);
//     if (playNum>= 4 && playNum <= 18) {//设置方框里面玩家人数范围
//         playNum=sliderNum ;//将玩家总人数赋值给滑块的值，实现动态变化
//     } else {
//         alert("请输入正确的人数4~18");
//         playNum=4;
//         sliderNum=4;
//         //人数超出范围的话，弹出警告框，并且将方框和滑块的值重置为6
//     }
// }





















