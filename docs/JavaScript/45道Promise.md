> 点击勘误[issues](https://github.com/webVueBlog/learn-web/issues)，哪吒感谢大家的阅读

## 前期准备

event loop它的执行顺序：

- 一开始整个脚本作为一个宏任务执行
- 执行过程中同步代码直接执行，宏任务进入宏任务队列，微任务进入微任务队列
- 当前宏任务执行完出队，检查微任务列表，有则依次执行，直到全部执行完
- 执行浏览器UI线程的渲染工作
- 检查是否有Web Worker任务，有则执行
- 执行完本轮的宏任务，回到2，依此循环，直到宏任务和微任务队列都为空

微任务包括：MutationObserver、Promise.then()或catch()、Promise为基础开发的其它技术，比如fetch API、V8的垃圾回收过程、Node独有的process.nextTick。

宏任务包括：script 、setTimeout、setInterval 、setImmediate 、I/O 、UI rendering。

注意⚠️：在所有任务开始的时候，由于宏任务中包括了script，所以浏览器会先执行一个宏任务，在这个过程中你看到的延迟任务(例如setTimeout)将被放到下一轮宏任务中来执行。

## 1.1 题目一

```js
const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')
})
console.log('1', promise1);
```

过程分析：

- 从上至下，先遇到new Promise，执行该构造函数中的代码promise1
- 然后执行同步代码1，此时promise1没有被resolve或者reject，因此状态还是pending

结果：

```js
'promise1'
'1' Promise{<pending>}
```

## 1.2 题目二

```js
const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);
```

过程分析：

- 从上至下，先遇到new Promise，执行其中的同步代码1
- 再遇到resolve('success')， 将promise的状态改为了resolved并且将值保存下来
- 继续执行同步代码2
- 跳出promise，往下执行，碰到promise.then这个微任务，将其加入微任务队列
- 执行同步代码4
- 本轮宏任务全部执行完毕，检查微任务队列，发现promise.then这个微任务且状态为resolved，执行它。

结果：

```js
1 2 4 3
```

