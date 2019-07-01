//angular方法，第一个参数是模块的名称，第二个人参数是一个数组，用于指定该模块依赖的模块的名称
//若无为空，第三个参数为可选参数，该参数接受第一个方法
// var myApp = angular.module('app',['ngRoute','ngMessages']);
//
//     //)声明AngularJS模块, 并把ngRoute传入AngularJS主模块，所有的结合起来我们就得到了Angular模块
//     //config方法会在模块加载时被执行，主要用于服务器进行配置
// myApp
//     .config(['$routeProvider', function($routeProvider){
//         //用$routeProvider的方式去规定路由的规则.
//         $routeProvider
//             //when(path,route)接受俩个参数，path是string类型，路由路径；route是Object类型，用于配置映射信息，有一个属性
//         // “controller，controllerAs，template，template，templateUrl，resolve”
//             .when('/',{templateUrl:'view1/view1.html'})
//             //当url路径为'/'的时候，将文件'view1/view1.html'注入到index.html里面<div ng-view></div>。
//             .when('/view1',{templateUrl:'view1/view1.html'})
//             .when('/view3',{templateUrl:'view3/view2.html'})
//             .when('/view2',{templateUrl:'view2/view2.html'})
//             .when('/view4',{templateUrl:'view4/view4.html'})
//             .otherwise({redirectTo:'/'});
//     }]);



//，声明AngularJS模块, 并把ui-router传入AngularJS主模块，所有的结合起来我们就得到了Angular模块。
var myApp = angular.module('app',['ui.router','ui.bootstrap','ngMessages','angularFileUpload']);
//这一行声明了把 $stateProvider 和 $urlRouteProvider 路由引擎作为函数参数传入，这样我们就可以为这个应用程序配置路由了.
myApp.config(function ($stateProvider, $urlRouterProvider) {
    //那这一行做什么的呢，如果没有路由引擎能匹配当前的导航状态，
    // 那它就会默认将路径路由至/viewl,即view1/view1.html
    $urlRouterProvider.when("", "/view1");
//作为页面被加载好以后第一个被使用的路由.这就向母版页的子页面，应用程序会首先加载这个view1.html页面。
    $stateProvider
        .state("view1", {
            url: "/view1",
            templateUrl: "view1/view1.html",
})

        .state("view2", {
            url:"/view2",
            templateUrl: "view2/view2.html"
        })
        .state("view2.view3", {
            url:"/view3",
            templateUrl: "view3/view3.html"
            //文件地址
        })
        .state("view2.view4", {
            url:"/view4",
            templateUrl: "view4/view4.html"
        })
        //编辑第一步：新建一个路由，参考：https://www.cnblogs.com/baota/p/6640173.html。

        .state("dogview2.", {
            url:"/view4/:viewid",
            templateUrl: "view4/view4.html"
        })


        .state("view2.welcome", {
        url:"/welcome",
        templateUrl: "view2/welcome.html"
    });

});





















// .state("view2.view4er", {
//     url:"/view4/:id",
//     templateUrl: "view4/view4.html"
// })