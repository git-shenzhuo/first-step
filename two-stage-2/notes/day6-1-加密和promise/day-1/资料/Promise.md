Promise 承诺(包装)
状态：
    pending  (未完成)
    fulfilled(已完成)
    rejected (已失败)
    
Promise的状态(三种)由异步操作的结果决定，任何其他操作均无法改变Promise的状态。

在异步操作刚开始执行时状态为pending
如果操作完成则状态由pending切换为fulfilled
如果操作失败则状态由pending切换为rejected。

语法：
    new Promise(function(resolve,reject){...});
    
参数：Promise构造函数的参数为本身是函数，该函数拥有resolve和reject两个形参，它们都是函数类型由JavaScript引擎提供。

链式调用：在then的回调函数中返回新的Promise实例。
并发任务：Promise的基本用法是异步任务执行完毕之后接着执行其它的异步任务。有时候，我们需要等多个任务都执行完毕之后再执行特定的任务，那么可以考虑使用Promise.all()方法处理。
