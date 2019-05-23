function showName(){
    console.log(this); //window
}
showName();

function testFun () {
    var name="hello this!";
    console.log(this.name);
}
testFun();
var name = "hey";
function testFun() {
    var name = "hello this!";
    console.log(this.name);
}
testFun();

































// //为引用类型值添加属性
// var p = new Object();
// p.age=18;
// alert(p.age);//11
// console.log(p)

// //为基本类型值添加属性

// function f() {
//
// }
// var demo =new f() Object
// var obj ={
//
// };

// var name = 'a';
// name.age = 18;
// alert(name .age); //undefined
//任何方法都无法改变一个基本类型的值

//比如一个字符串
// let name = 'zhangsan'
// name.substr()
// console.log(name) // 输出：zhangsan
// let age = 'firstblood'
// age.toUpperCase()
// console.log(age) // 输出：firstblood
//通过上面的例子，
// 我们可以发现原来定义的变量name的值始终没有发生改变，
// 而调用substr()和toUpperCase()方法后返回的是一个新的字符串，跟原来定义的变量name并没有什么关系。

// let name = 'zhangsan'//基础数据类型是string.name是指向zhangsan的一个指针，指针的方向是不可变的
// name = 'lisi'//但是下面的name又把指针指向了list这里的list是不可以改变的
// console.log(name) // 输出：lisi  可以理解为这里的改变知识指针方向的改变

//为基本类型值添加属性
// var name = 'a';
// name.age = 18;
// alert(name.age); //undefined
// //未成立
// console.log(name.age)


// //基本类型值
// var a = 'a';
// var b = a;
// a = 'b';
// alert(b); //a

//引用类型值,以数组为例
//1.对其中一个变量直接赋值不会影响到另一个变量（并未操作引用的对象）
// var a = [1,2,3];
// var b = a;
// a = [1,2,3,4];
// alert(a);//1,2,3,4
// alert(b); //1,2,3
// console.log(a);
// console.log(b);

// //2.使用push(操作了引用的对象)
// var a = [1,2,3];
// var b = a;
// a.push(4);
// alert(a);//1,2,3,4
// alert(b); //1,2,3,4
// console.log(a);
// console.log(b);



//复制代码
//  console.log(typeof "");
//  console.log(typeof 1);
//  console.log(typeof true);
//  console.log(typeof null);
//  console.log(typeof undefined);
//  console.log(typeof []);
//  console.log(typeof function(){});
//  console.log(typeof {});

// var i;{
//     alert(i == undefined)//ture
// }
// console.log(i);


// var i;
// alert(i == undefined);//true
// console.log(i == undefined);

// var i ;
// console.log(i);


// var str = 'hello'; //string 基本类型
// var s2 = str.charAt(0);
// alert(s2); // h



















// var a ="你大爷";
// function change() {
//     var b ="你二大爷";
//     console.log(a);
//     console.log(b);
// }
// change();
// console.log(a);
//
// function text(){
//     alert("我是你爸爸");
// }
// text();
