
myApp.controller("newlyIncreased",
    function ( $scope,$http,FileUploader,$stateParams) {

        $scope.newEditor='新增Article';
        $scope.fileInfo=null;
        $scope.fileItem=null;
        $scope.industry='';

        var uploader = $scope.uploader = new FileUploader({//换成自己的上传地址，本地演示不换也行
            url: 'carrots-admin-ajax/a/u/img/task/',
            autoUpload:true
        });
        console.log("FileUploader函数内容",uploader);

        //点击上传后出现预览。
        $scope.onLine=function () {
            var reader = new FileReader();
            reader.readAsDataURL( $scope.fileItem._file);
            reader.addEventListener("load", function (e) {
                console.log(e);
                //文件加载完之后，更新angular绑定
                $scope.$apply(function(){
                    $scope.iconUrl = e.target.result;
                });
            }, false);

        };
        uploader.filters.push({
            name: 'imageFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });




        // // CALLBACKS
        //
        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {//添加一个文件失败后触发
            // console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {//向队列中添加一个单独的文件后触发
            console.info('onAfterAddingFile', fileItem);

            console.log("增加后的FileUploader函数内容",uploader);
            //下面俩个信息一致。
            // $scope.fileInfo=uploader.queue[0].file;//11点完成的第一步，取出图片的信息（name、size）
            $scope.fileInfo=fileItem._file;//11点完成的第一步，取出图片的信息（name、size）
            $scope.fileInfo.size=(fileItem._file/1024/1024).toFixed(2) + "MB";//提前将文件大小转成mb，且精确到2位小数//这是用于文件信息渲染
            console.log("文件基本信息",$scope.fileInfo);



            //这个点击上线的时候，需要这个东西。
            $scope.fileItem=fileItem;
            console.log("文件",$scope.fileItem._file);


        };
        uploader.onAfterAddingAll = function(addedFileItems) {//在所有被拖拽或被选中的文件添加到队列后触发。
            console.info('onAfterAddingAll', addedFileItems);
        };

        uploader.onBeforeUploadItem = function(item) {//在上传一个文件对象之前触发。
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function(progress) {//
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function(fileItem, response, status, headers) {//一个文件上传成功后触发
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {//上传出错时触发
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {//取消上传时触发
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {//在文件上传完成时触发（独立操作成功）
            //Web服务器收到客户端的http请求，会针对每一次请求，分别创建一个用于代表请求的request对象、和代表响应的response对象。
            console.info('onCompleteItem', fileItem, response, status, headers);
            console.info("返回的消息",response);


            $scope.img=response.data.url;//服务器图片地址


        };
        uploader.onCompleteAll = function() {
            // console.info('onCompleteAll');
        };

        //立即上线
        $scope.immediately=function () {
            $http({
                method: "POST",
                url: "/carrots-admin-ajax/a/u/article",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: {
                    title:$scope.title,
                    type:+$scope.type,
                    content:$scope.content,
                    industry:$scope.industry,
                    url:$scope.url,
                    img:$scope.img,
                    status:2,
                },
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
        };

        //编辑第五步--获取view3页面传过来的id


var id = $stateParams.viewid;
        console.log(id);
if (id===null || id===undefined) {
    $scope.newEditor='新增Article';
}
      else{
    $scope.newEditor='编辑Article';
          $http({
            method:'GET',
            url:'carrots-admin-ajax/a/article/'+$stateParams.viewid,
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
                console.log(res.data.data.article);
                var list=(res.data.data.article);
                $scope.title=list.title;
                $scope.type=list.type;
                $scope.content=list.content;
                $scope.industry=list.industry;
                $scope.url=list.url;
                $scope.img=list.img;
            })
      }
    });



// //编辑第五步--获取view3页面传过来的id
// var id = $stateParams.id;
// console.log(id)

////编辑第六步--注意位控制器添加东西
// myApp.controller("newlyIncreased",
//     function ( $scope,$http,FileUploader,$stateParams) {