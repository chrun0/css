myApp.controller("view1",
    function ($scope,$http) {
        $scope.user={};
    //写这个就是为了点击登录的时候出现报错
    $scope .login=function () {
        $http({
            method: "POST",
            url: "/carrots-admin-ajax/a/login",
            //用任务的参数不行，可能是因为配置的是后把原来的覆盖了用的是配置好的
            data: {
                name:$scope.user.account,
                pwd:$scope.user.passwords,
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            //transformRequest：函数/函数的数组。转换函数或者一个包含转换函数的数组。
            // 转换函数获取http请求体和请求头，并且返回他们的转换版（通常是序列化）
            //简单讲通常当我们输入用户账号密码点提交，那么发给服务器什么数据呢，
            //发了类似username=zhangsan&password=pwd123
            // 这样一串东西，其中zhangsan是你在第一个文本框里填写的内容
            //其中=前面的是参数名后面是值，多个参数之间是&分割。
            // 然后你要说了，如果我文本框里输入的用户名里有一个等号怎么办呢？
            // 怎么知道这个等号是分割参数名和参数值的等号，还是我作为参数值输入的等号？
            // pwd123是你在第二个文本框里填写的内容。
            //里面的的内容，那么他的作用就来了就是为了就是在拼接这个表单
            //那么 encodeuricomponent就是做这个事情，它会把特殊字符，比如等号、and符号都编码成一
            // 个特殊字符，比如说1=2，会转换成1%3d2。这个等号就用特殊的%3d代替了。

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

        });
        //经查询，从1.6版本开始，angular正式移除了success和error方法。从1.5版本开始，
        // angular多出来then( )方法。因此，从1.6版本后不能使用success和error方法，
        // 可以采用then( )方法替代。
    }
    }
    );
