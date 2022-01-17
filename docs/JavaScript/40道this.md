> 点击勘误[issues](https://github.com/webVueBlog/learn-web/issues)，哪吒感谢大家的阅读

当JavaScript代码执行一段可执行代码(executable code)时，会创建对应的执行上下文(execution context)。

对于每个执行上下文，都有三个重要属性

1. 变量对象(Variable object，VO)
2. 作用域链(Scope chain)
3. this

今天重点讲讲 this，然而不好讲。

ECMAScript 5.1 规范地址：

英文版：http://es5.github.io/#x15.1

中文版：http://yanhaijing.com/es5/#115

- this的默认绑定
- 隐式绑定
- 隐式绑定的隐式丢失问题
- 显式绑定
- 显式绑定的其它用法
- new绑定
- 箭头函数绑定
- 综合题
- 几道手写题

## 前期准备

在正式阅读之前，你需要知道this的5种绑定方式：

- 默认绑定(非严格模式下this指向全局对象, 严格模式下this会绑定到undefined)
- 隐式绑定(当函数引用有上下文对象时, 如 obj.foo()的调用方式, foo内的this指向obj)
- 显示绑定(通过call()或者apply()方法直接指定this的绑定对象, 如foo.call(obj))
- new绑定
- 箭头函数绑定(this的指向由外层作用域决定的)

## 1. 默认绑定

先介绍一种最简单的绑定方式吧：默认绑定。

也就是我们常说的：在非严格模式下this指向的是全局对象window，而在严格模式下会绑定到undefined。

## 1.1 题目一

老规矩，来看个最基本的案例：

```js
var a = 10;
function foo () {
  console.log(this.a)
}
foo();
```

我们知道在使用var创建变量的时候(不在函数里)，会把创建的变量绑定到window上，所以此时a是window下的属性。

而函数foo也是window下的属性。

因此上面的代码其实就相当于是这样:

```js
window.a = 10;
function foo() {
  console.log(this.a)
}
window.foo();
```

在这里，调用foo()函数的是window对象，且又是在非严格模式下，所以foo()中this的指向是window对象，因此this.a会输出10。

答案：

```js
10
```

## 1.2 题目二

改造下题目一，看看在严格模式下。

(想要开启严格模式，只要在需要开启的地方写上"use strict")

```js
"use strict";
var a = 10;
function foo () {
  console.log('this1', this)
  console.log(window.a)
  console.log(this.a)
}
console.log(window.foo)
console.log('this2', this)
foo();
```

需要注意的点：

- 开启了严格模式，只是说使得函数内的this指向undefined，它并不会改变全局中this的指向。因此this1中打印的是undefined，而this2还是window对象。
- 另外，它也不会阻止a被绑定到window对象上。

所以最后的执行结果：

```js
f foo() {...}
'this2' Window{...}
'this1' undefined
10
Uncaught TypeError: Cannot read property 'a' of undefined
```

## 1.3 题目三

```js
let a = 10
const b = 20

function foo () {
  console.log(this.a)
  console.log(this.b)
}
foo();
console.log(window.a)
```

如果把var改成了let 或者 const，变量是不会被绑定到window上的，所以此时会打印出三个undefined。

答案：

```js
undefined
undefined
undefined
```

## 1.4 题目四

```js
var a = 1
function foo () {
  var a = 2
  console.log(this)
  console.log(this.a)
}

foo()
```

这里我们很容易就知道，foo()函数内的this指向的是window，因为是window调用的foo。

但是打印出的this.a呢？注意，是this.a，不是a，因此是window下的a。

并且由于函数作用域的原因我们知道window下的a还是1。

因此答案为：

```js
Window{...}
1
```

## 1.5 题目五

```js
var a = 1
function foo () {
  var a = 2
  function inner () { 
    console.log(this.a)
  }
  inner()
}

foo()
```

this.a，而在inner中，this指向的还是window。

```js
1
```

















