-----------------------------------------------------------------
			      ES6
-----------------------------------------------------------------
  1.ES6也是属于ES2015
    ES6最常用的新特性: const、let、extends、class、super、
      arrow function、template string、destructuring(解构)、
      default | rest(默认传值) 、promise
  2.promise 专门解决回调地狱(厄运的回调金字塔)
      回调地狱:在ES6前ajax会以回调函数触发事件或者再次触发回调函数
               嵌套过多会影响代码的可读性与逻辑
      promise中的open与error 在同一执行函数当中 只会触发一次
      promise中.then与.catch 会被调用多次,在pomise构造函数只执行一次
         如果有返回值,.then和.catch都会接收到该值
      promise不能反悔promise本身 否则会循环回调 回报类型错误



      值穿透？？？

  