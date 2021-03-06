//angular方法，第一个参数是模块的名称，第二个人参数是一个数组，用于指定该模块依赖的模块的名称
//若无为空，第三个参数为可选参数，该参数接受第一个方法
var app=angular.module('entry-page',[]);
//)声明AngularJS模块, 并把ngRoute传入AngularJS主模块，所有的结合起来我们就得到了Angular模块
//config方法会在模块加载时被执行，主要用于服务器进行配置
//作用域，可以理解为jsvascript对象
app.controller("todolist",
    //$scope作用域，应用在html识图和控制器之间的纽带
    function ($scope){
        $scope.todo="";
        //添加内容input值
        $scope.list=[];

        $scope.doAdd=function () {
            $scope.list.push(
                { title:$scope.todo,status:false}
            );
            $scope.todo="";
        };

        $scope.removeData=function (a) {
            $scope.list.splice(a,1);
        };



    }
);





// myApp.controller("todolist",function ($scope){
//     $scope.todo="";
//     $scope.list=[1,2,3];
//     $scope.doAdd=function() {
//         alert($scope.list);
//     };
//
// });