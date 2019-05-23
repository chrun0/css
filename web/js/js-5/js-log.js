$("#checkNum").click(function () {
    window.location = "../js-5/js-5.html"
});
arr=JSON.parse(sessionStorage.getItem("player"));//获得储存值//不会取浏览器中数组
// console.log(arr);

//生成杀人的盒子
function test() {
    for (var i=0;i<arr.length;i++){
        let html=(` <div class="box">
        <div class="lg-box ${arr[i].class}">
            <div class="center-num ${arr[i].class}">${arr[i].name}</div>
            <div class="sm-num">${i+1}号</div>
    </div>`)
        $("main").append(html);
    }
}
test();
$(".kinging").css("background","#565656");



