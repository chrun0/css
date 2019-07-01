
// myApp.controller("particulars",
//     function ($scope,$http) {
//
//
//     //请求
//     $http({
//         method:"get",
//         url: "/carrots-admin-ajax/a/article/search",
//         params:{},
//     }).then(
//         function (res) {
//             console.log(res);
//             console.log(res.data)
//             console.log(res.data.data)
//             console.log(res.data.data.articleList)
//             var a=res.data.data.articleList;
//             console.log("寻找数组",a)
//         })
//
//         $scope.list.push(
//             [a]
//         );
// // $scope.but=function () {
// //     $scope.push(
// //         {a}
// //     )
// // }
//
//
//
//     }
//     );

// myApp.filter('statusFilter',function(){
//     return function(status){
//         // if(status===1){
//         // return status="草稿";
//         // }
//         switch (status) {
//             case 1:
//                 status="草稿";
//                 break;
//             case 2:
//                 status="上线";
//                 break;
//         }
//         return status;
//     }
// });



//自定义过滤器,使用module的filler方法,返回一个函数,
//改函数接收输入值,并返回处理后的后果,利用数组的位置
myApp.filter('statusFilter',function(){
    return function(status){
        // if(status===1){
        // return status="草稿";
        // }
        switch (status) {
            case 1:
                status="草稿";
                return status;
            case 2:
                status="上线";
                return status;

            case 3:
                status="草稿";
                return status
        }

    }
});

myApp.filter('typeFilter',function(){
    return function(type){
        switch (type) {
            case 0:
                type="首页";
                break;
            case 1:
                type="职位";
                break;
            case 2:
                type="找精英";
                break;
            case 3:
                type="行业大图";
                break;
        }
        return type;
    }
});
myApp.controller("particulars",
    function ($scope,$http,$state) {

        //时间
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        //请求
        $http({
            method:"get",
            url: "/carrots-admin-ajax/a/article/search",


        }).then(
            function (res) {
                console.log(res);
                console.log(res.data);
                console.log(res.data.data);
                console.log(res.data.data.articleList);
                $scope.list=res.data.data.articleList;
            });
//搜索请求
        $scope.search = function(){
            // changeStartAt
            console.log($scope.startAt);
            if($scope.startAt === undefined || $scope.startAt === null ){
                changeStartAt = null;
            }else
            {
                changeStartAt = $scope.startAt.valueOf();//把时间日期转换为时间戳
            }
            if($scope.endtAt === undefined || $scope.endAt === null){
                changeEndAt = null;
            }else
            {
                changeEndAt = $scope.endAt.valueOf();
            }
            $http({
                method:"get",
                url: "/carrots-admin-ajax/a/article/search",
                params:{
                    // startAt:$scope.startAt.valueOf() ,
                    // endAt:$scope.endAt.valueOf(),
                    startAt:changeStartAt,
                    endAt:changeEndAt,
                    type:$scope.type,
                    status:$scope.status,
                },
            }).then(
                function (res) {
                    console.log(res);
                    console.log(res.data);
                    console.log(res.data.data);
                    console.log(res.data.data.articleList);
                    $scope.list=res.data.data.articleList;
                    console.log( $scope.list)
                })
        };
        //清空请求
        $scope.clean = function(){
            $scope.startAt=null;
            $scope.endAt=null;
            $scope.type=null;
            $scope.status=null;
            $http({
                method:"get",
                url: "/carrots-admin-ajax/a/article/search",
                params:{},
            }).then(
                function (res) {
                    console.log(res);
                    console.log(res.data);
                    console.log(res.data.data);
                    console.log(res.data.data.articleList);
                    $scope.list=res.data.data.articleList;
                    console.log( $scope.list)
                })
        };
        //上线草稿
        $scope.upLine = function(id,status){
            console.log(id,status);
            if(status === 1){
                status=2
            }else if(status === 2){
                status=1
            }
            console.log(status);
            $http({
                method: "PUT",
                url: "/carrots-admin-ajax/a/u/article/status",
                data: {
                    id:id,
                    status:status,
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                transformRequest: function(obj) {
                    var str = [];
                    for (var s in obj) {
                        str.push(encodeURIComponent(s) + "=" + encodeURIComponent(obj[s]));
                    }
                    return str.join("&");
                }
            }).then(
                function (res) {
                    console.log(res);

                    $scope.search()
                });
        };
        //删除
        $scope.delete  = function(a){
            $http({
                method:'DELETE',
                url:'carrots-admin-ajax/a/u/article/'+ a, // + 是拼接字符串，通过url传参
            }).then(
                function (res) {
                    console.log(res);

                    $scope.search()
                });
        };
        //编辑
        //编辑第三步--撰写点击事件内容，发生跳转传参
$scope.compile = function (a) {
    $state.go('view2.dog', {viewid: a})
}

        //编辑第四步--注意在控制器里添加东西



    });


// //编辑第三步--撰写点击事件内容，发生跳转传参
// $scope.compile = function (a) {
//     $state.go('view2.view4er', {id: a});
// }

// //
// 编辑第四步
// myApp.controller("particulars",
//     function ($scope,$http,$state) {










//日期
myApp.controller('DatepickerPopupDemoCtrl', function ($scope) {




    //
    //
    // $scope.clear = function() {
    //     $scope.dt = null;
    // };
    //
    // $scope.inlineOptions = {
    //     customClass: getDayClass,
    //     minDate: new Date(),
    //     showWeeks: true
    // };
//对input的日历最小值和最大值限制
//     $scope.dateOptions = {
//         dateDisabled: disabled,
//         formatYear: 'yy',
//         maxDate: new Date(2020, 5, 22),
//         minDate: new Date(),
//         startingDay: 1
//     };

    // Disable weekend selection
    // function disabled(data) {
    //     var date = data.date,
    //         mode = data.mode;
    //     return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    // }

    // $scope.toggleMin = function() {
    //     $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    //     $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    // };

    // $scope.toggleMin();
// 打开popup，即打开日历（点击则出现）
//     $scope.open1 = function() {
//         $scope.popup1.opened = true;
//     };
//
//     $scope.open2 = function() {
//         $scope.popup2.opened = true;
//     };

    // $scope.setDate = function(year, month, day) {
    //     $scope.dt = new Date(year, month, day);
    // };
//下拉列表的数据（控制日历格式）
//     $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
//     $scope.format = $scope.formats[0];
//     $scope.altInputFormats = ['M!/d!/yyyy'];

//日历默认关闭，即隐藏
    // $scope.popup1 = {
    //     opened: false
    // };
    //
    // $scope.popup2 = {
    //     opened: false
    // };

    // var tomorrow = new Date();
    // tomorrow.setDate(tomorrow.getDate() + 1);
    // var afterTomorrow = new Date();
    // afterTomorrow.setDate(tomorrow.getDate() + 1);
    // $scope.events = [
    //     {
    //         date: tomorrow,
    //         status: 'full'
    //     },
    //     {
    //         date: afterTomorrow,
    //         status: 'partially'
    //     }
    // ];
    //
    // function getDayClass(data) {
    //     var date = data.date,
    //         mode = data.mode;
    //     if (mode === 'day') {
    //         var dayToCheck = new Date(date).setHours(0,0,0,0);
    //
    //         for (var i = 0; i < $scope.events.length; i++) {
    //             var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);
    //
    //             if (dayToCheck === currentDay) {
    //                 return $scope.events[i].status;
    //             }
    //         }
    //     }
    //
    //     return '';
    // }
});




