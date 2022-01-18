> 点击勘误[issues](https://github.com/webVueBlog/learn-web/issues)，哪吒感谢大家的阅读

[[toc]]

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

## 2. 隐式绑定

一个简单的规则，this 永远指向最后调用它的那个对象。

谁最后调用的函数，函数内的this指向的就是谁(不考虑箭头函数)。

## 2.1 题目一

```js
function foo () {
  console.log(this.a)
}
var obj = { a: 1, foo }
var a = 2
obj.foo()
```

(var obj = { foo }就相当于是var obj = { foo: foo }，这个大家应该都知道吧)

在这道题中，函数foo()虽然是定义在window下，但是我在obj对象中引用了它，并将它重新赋值到obj.foo上。

且调用它的是obj对象，因此打印出来的this.a应该是obj中的a。

```js
var obj = {
  a: 1,
  foo: function () {
    console.log(this.a)
  }
}
var a = 2
obj.foo()
```

在这里foo函数内的this指向的就是obj，和题目效果一样。

答案都是：

```js
1
```

## 3. 隐式绑定的隐式丢失问题

隐式绑定的基本概念大家应该都清楚了，不过其实有一个关于隐式绑定的常用考点，那就是隐式丢失问题。

隐式丢失其实就是被隐式绑定的函数在特定的情况下会丢失绑定对象。

有两种情况容易发生隐式丢失问题：

- 使用另一个变量来给函数取别名
- 将函数作为参数传递时会被隐式赋值，回调函数丢失this绑定

## 3.1 题目一

使用另一个变量来给函数取别名会发生隐式丢失。

```js
function foo () {
  console.log(this.a)
};
var obj = { a: 1, foo };
var a = 2;
var foo2 = obj.foo;

obj.foo();
foo2();
```

在这里我们已经知道了，obj.foo()中this的指向是为obj的(可以看第二部分隐式绑定)，所以obj.foo()执行的时候，打印出来的是obj对象中的a，也就是1。

但是foo2它不也是obj.foo吗？我只不过是用了一个变量foo2来盛放了它而已。所以你是不是认为它打印的也是1呢？

额 😅，其实这里不是的，它打印出的是window下的a。

这是因为虽然foo2指向的是obj.foo函数，不过调用它的却是window对象，所以它里面this的指向是为window。

其实也就相当于是window.foo2()

## 3.2 题目二

让我们在一个新的变量obj2中也定义一个foo2看看：

```js
function foo () {
  console.log(this.a)
};
var obj = { a: 1, foo };
var a = 2;
var foo2 = obj.foo;
var obj2 = { a: 3, foo2: obj.foo }

obj.foo();
foo2();
obj2.foo2();
```

这三种不同的foo()打印出来的分别是什么呢？

答案：

```js
1
2
3
```

- obj.foo()中的this指向调用者obj
- foo2()发生了隐式丢失，调用者是window，使得foo()中的this指向window
- foo3()发生了隐式丢失，调用者是obj2，使得foo()中的this指向obj2

## 3.3 题目三

再就是如果你把一个函数当成参数传递时，也会被隐式赋值，发生意想不到的问题。

来看看这道题目：

```js
function foo () {
  console.log(this.a)
}
function doFoo (fn) {
  console.log(this)
  fn()
}
var obj = { a: 1, foo }
var a = 2
doFoo(obj.foo)
```

这里我们将obj.foo当成参数传递到doFoo函数中，在传递的过程中，obj.foo()函数内的this发生了改变，指向了window。

因此结果为：

```js
Window{...}
2
```

注意，我这里说的是obj.foo()函数，而不是说doFoo()。doFoo()函数内的this本来就是指向window的，因为这里是window调用的它。

## 3.4 题目四

现在我们不用window调用doFoo，而是放在对象obj2里，用obj2调用：

```js
function foo () {
  console.log(this.a)
}
function doFoo (fn) {
  console.log(this)
  fn()
}
var obj = { a: 1, foo }
var a = 2
var obj2 = { a: 3, doFoo }

obj2.doFoo(obj.foo)
```

现在调用obj2.doFoo()函数，里面的this指向的应该是obj2，因为是obj2调用的它。

但是obj.foo()打印出来的a依然是2，也就是window下的。

执行结果为：

```js
{ a:3, doFoo: f }
2
```

所以说，如果你把一个函数当成参数传递到另一个函数的时候，也会发生隐式丢失的问题，且与包裹着它的函数的this指向无关。在非严格模式下，会把该函数的this绑定到window上，严格模式下绑定到undefined。

一样的代码，试试严格模式下：

```js
"use strict"
function foo () {
  console.log(this.a)
}
function doFoo (fn) {
  console.log(this)
  fn()
}
var obj = { a: 1, foo }
var a = 2
var obj2 = { a: 3, doFoo }

obj2.doFoo(obj.foo)
```

执行结果：

```js
{ a:3, doFoo: f }
Uncaught TypeError: Cannot read property 'a' of undefined
```

## 4. 显式绑定

功能如其名，就是强行使用某些方法，改变函数内this的指向。

通过call()、apply()或者bind()方法直接指定this的绑定对象, 如foo.call(obj)。

这里有几个知识点需要注意：

- 使用.call()或者.apply()的函数是会直接执行的
- bind()是创建一个新的函数，需要手动调用才会执行
- .call()和.apply()用法基本类似，不过call接收若干个参数，而apply接收的是一个数组

## 4.1 题目一

```js
function foo () {
  console.log(this.a)
}
var obj = { a: 1 }
var a = 2

foo()
foo.call(obj)
foo.apply(obj)
foo.bind(obj)
```

第一个foo() 都很好理解，这不就是默认绑定吗？😁

而第二个和第三个foo都使用了call或apply来改变this的指向，并且是立即执行的。

第四个foo，仅仅是使用bind创建了一个新的函数，且这个新函数也没用别的变量接收并调用，因此并不会执行。

答案：

```js
2
1
1
```

这里想要提一嘴，如果call、apply、bind接收到的第一个参数是空或者null、undefined的话，则会忽略这个参数。

例如🌰：

```js
function foo () {
  console.log(this.a)
}
var a = 2
foo.call()
foo.call(null)
foo.call(undefined)
```

输出的是：

```js
2
2
2
```

## 4.2 题目二

了解了显式绑定的基本使用之后，让我们来看看它的妙用。

首先，是这个例子🌰：

```js
var obj1 = {
  a: 1
}
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a)
  },
  foo2: function () {
    setTimeout(function () {
      console.log(this)
      console.log(this.a)
    }, 0)
  }
}
var a = 3

obj2.foo1()
obj2.foo2()
```

对于obj2.foo1()，我们很清楚，它就是打印出2。

但是对于obj2.foo2呢？在这个函数里，设置了一个定时器，并要求我们打印出this和this.a。

想想我前面说过的话，谁调用的函数，函数内的this指向的就是谁。

而对于setTimeout中的函数，这里存在隐式绑定的隐式丢失，也就是当我们将函数作为参数传递时会被隐式赋值，回调函数丢失this绑定，因此这时候setTimeout中的函数内的this是指向window的。

所以最终的结果是：

```js
2
Window{...}
3
```

## 4.3 题目三

面对上面👆这种情况我们就可以使用call、apply 或者bind来改变函数中this的指向，使它绑定到obj1上，从而打印出1。

```js
var obj1 = {
  a: 1
}
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a)
  },
  foo2: function () {
    setTimeout(function () {
      console.log(this)
      console.log(this.a)
    }.call(obj1), 0)
  }
}
var a = 3
obj2.foo1()
obj2.foo2()
```

现在的执行结果就是：

```js
2
{ a: 1 }
1
```

但是看看我这里的写法，我是将.call运用到setTimeout里的回调函数上，并不是运用到obj2.foo2()上。

所以有小伙伴就会问了，我下面的这种写法不可以吗？

```js
obj2.foo2.call(obj1)
```

复制代码注意⚠️：如果是这种写法的话，我改变的就是foo2函数内的this的指向了，但是我们知道，foo2函数内this的指向和setTimeout里函数的this是没有关系的，因为调用定时器的始终是window。

并且这里使用.bind()也是可以的，因为定时器里的函数在时间到了之后本就是会自动执行的。

## 4.4 题目四

```js
var obj1 = {
  a: 1
}
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a)
  },
  foo2: function () {
    function inner () {
      console.log(this)
      console.log(this.a)
    }
    inner()
  }
}
var a = 3
obj2.foo1()
obj2.foo2()
```

调用inner函数的依然是window，所以结果为：

```js
2
Window{...}
3
```

如果给inner()函数显式绑定的话：

```js
inner.call(obj1)
```

结果为

```js
2
{ a: 1 }
1
```

## 4.5 题目五

```js
function foo () {
  console.log(this.a)
}
var obj = { a: 1 }
var a = 2

foo()
foo.call(obj)
foo().call(obj)
```

也就是使用.call()方法位置的不同。

结果：

```js
2
1
2
Uncaught TypeError: Cannot read property 'call' of undefined
```

- foo()会正常打印出window下的a，也就是2
- foo.call(obj)由于显式绑定了this，所以会打印出obj下的a，也就是1
- foo().call(obj)开始会执行foo()函数，打印出2，但是会对foo()函数的返回值执行.call(obj)操作，可是我们可以看到foo()函数的返回值是undefined，因此就会报错了。

所以我们可以看到foo.call()和foo().call()的区别了，一个是针对于函数，一个是针对于函数的返回值。

## 4.6 题目六

```js
function foo () {
  console.log(this.a)
  return function () {
    console.log(this.a)
  }
}
var obj = { a: 1 }
var a = 2

foo()
foo.call(obj)
foo().call(obj)
```

你能想到现在会输出什么吗？

答案是会输出3个数，还是4个数，亦或者6个数呢？

😁 嘻嘻，不逗你了，结果竟然是：

```js
2
1
2
1
```

- 第一个数字2自然是foo()输出的，虽然foo()函数也返回了一个匿名函数，但是并没有调用它呀，只有写成foo()()，这样才算是调用匿名函数。
- 第二个数字1是foo.call(obj)输出的，由于.call()是紧跟着foo的，所以改变的是foo()内this的指向，并且.call()是会使函数立即执行的，因此打印出1，同理，它也没有调用返回的函数。
- 第三个数字2是foo().call(obj)先执行foo()时打印出来的，此时foo()内this还是指向window。
- 在执行完foo()之后，会返回一个匿名函数，并且后面使用了.call(obj)来改变这个匿名函数的this指向并调用了它，所以输出了1。

## 4.7 题目七

```js
function foo () {
  console.log(this.a)
  return function () {
    console.log(this.a)
  }
}
var obj = { a: 1 }
var a = 2

foo()
foo.bind(obj)
foo().bind(obj)
```

结果自然就是：

```js
2
2
```

- foo()会执行没错，打印出了2。
- 但是foo.bind(obj)却不会执行，它返回的是一个新函数。
- foo().bind(obj)只会执行前面的foo()函数，打印出2，.bind(obj)只是将foo()返回的匿名函数显式绑定this而已，并没有调用。

## 4.8 题目八

说实话，做上面这类题目，会让我有一种疑惑。

这种函数内返回的函数，它的this会和它外层的函数有关吗？

也就是内层函数它的this到底是谁呢？

还是那句话，谁最后调用的它，this就指向谁。

```js
function foo () {
  console.log(this.a)
  return function () {
    console.log(this.a)
  }
}
var obj = { a: 1 }
var a = 2

foo.call(obj)()
```

就像是这道题，foo()函数内的this虽然指定了是为obj，但是调用最后调用匿名函数的却是window。

所以结果为：

```js
1
2
```

## 4.9 题目九

```js
var obj = {
  a: 'obj',
  foo: function () {
    console.log('foo:', this.a)
    return function () {
      console.log('inner:', this.a)
    }
  }
}
var a = 'window'
var obj2 = { a: 'obj2' }

obj.foo()()
obj.foo.call(obj2)()
obj.foo().call(obj2)
```

- obj.foo()自然是打印出foo: obj和inner: window，这个没什么疑惑的。
- obj.foo.(obj2)()其实也没啥可疑惑的了，打印出foo: obj2和inner: window(类似4.8)。
- 那么obj.foo().call(obj2)就更没啥可疑惑的了，打印出foo: obj和inner: obj2。

 ## 4.10 题目十

```js
var obj = {
  a: 1,
  foo: function (b) {
    b = b || this.a
    return function (c) {
      console.log(this.a + b + c)
    }
  }
}
var a = 2
var obj2 = { a: 3 }

obj.foo(a).call(obj2, 1)
obj.foo.call(obj2)(1)
```

执行结果：

```js
6
6
```

## 5. 显式绑定的其它用法

## 5.1 题目一

```js
function foo1 () {
  console.log(this.a)
}
var a = 1
var obj = {
  a: 2
}

var foo2 = function () {
  foo1.call(obj)
}

foo2()
foo2.call(window)
```

这里foo2函数内部的函数foo1我们使用call来显式绑定obj，就算后面再用call来绑定window也没有用了。

结果为：

```js
2
2
```

## 5.2 题目二

```js
function foo1 (b) {
  console.log(`${this.a} + ${b}`)
  return this.a + b
}
var a = 1
var obj = {
  a: 2
}

var foo2 = function () {
  return foo1.call(obj, ...arguments)
}

var num = foo2(3)
console.log(num)
```

答案：

```js
'2 + 3'
5
```

## 5.3 题目三

```js
function foo (item) {
  console.log(item, this.a)
}
var obj = {
  a: 'obj'
}
var a = 'window'
var arr = [1, 2, 3]

// arr.forEach(foo, obj)
// arr.map(foo, obj)
arr.filter(function (i) {
  console.log(i, this.a)
  return i > 2
}, obj)
```

这里的答案为：

```js
1 "obj"
2 "obj"
3 "obj"
```

如果我们没有传递第二个参数obj的话，this.a打印出来的肯定就是window下的a了，但是传入了之后将obj显示绑定到第一个参数函数上。

(关于arr.filter为什么也会打印出1, 2, 3，那是因为虽然我们使用了return i > 2，不过在执行阶段filter还是把每一项都打印出来)

## 总结

- this 永远指向最后调用它的那个对象
- 匿名函数的this永远指向window
- 使用.call()或者.apply()的函数是会直接执行的
- bind()是创建一个新的函数，需要手动调用才会执行
- 如果call、apply、bind接收到的第一个参数是空或者null、undefined的话，则会忽略这个参数
- forEach、map、filter函数的第二个参数也是能显式绑定this的

## 6. new 绑定

使用new来调用一个函数，会构造一个新对象并把这个新对象绑定到调用函数中的this。

## 6.1 题目一

使用new来调用Person，构造了一个新对象person1并把它(person1)绑定到Person调用中的this。

```js
function Person (name) {
  this.name = name
}
var name = 'window'
var person1 = new Person('xx')
console.log(person1.name)
```

答案：

```js
'xx'
```

## 6.2 题目二

构造函数中不仅可以加属性，也可以加方法：

```js
function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  }
  this.foo2 = function () {
    return function () {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
person1.foo1()
person1.foo2()()
```

这道题的写法不得不让我想到题目4.9：

```js
var obj = {
  a: 'obj',
  foo: function () {
    console.log('foo:', this.a)
    return function () {
      console.log('inner:', this.a)
    }
  }
}
```

好像都是函数包裹着函数，没错，其实它们的解法都差不多。😁

所以这道题的结果为：

```js
'person1'
''
```

- 第一个this.name打印的肯定是person1对象中的name，也就是构造person1对象时传递进去的person1字符串。
- 第二个this.name打印的应该就是window下的name了，但是这里window对象中并不存在name属性，所以打印出的是空。

## 6.3 题目三

```js
var name = 'window'
function Person (name) {
  this.name = name
  this.foo = function () {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var person2 = {
  name: 'person2',
  foo: function() {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
  
var person1 = new Person('person1')
person1.foo()()
person2.foo()()
```

在这道题中，person1.foo和person2就没有什么区别。

打印出来的结果为：

```js
'person1'
'window'
'person2'
'window'
```

## 6.4 题目四

```js
var name = 'window'
function Person (name) {
  this.name = name
  this.foo = function () {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo.call(person2)()
person1.foo().call(person2)
```

所以答案很容易就出来了：

```js
'person2'
'window'
'person1'
'person2'
```

## 7. 箭头函数绑定

this 永远指向最后调用它的那个对象。

但是对于箭头函数就不是这样咯，它里面的this是由外层作用域来决定的，且指向函数定义时的this而非执行时。

箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined。

## 7.1 题目一

```js
var obj = {
  name: 'obj',
  foo1: () => {
    console.log(this.name)
  },
  foo2: function () {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  }
}
var name = 'window'
obj.foo1()
obj.foo2()()
```

这道题就非常有代表性，它明确了箭头函数内的this是由外层作用域决定的。

对于obj.foo1()函数的调用，它的外层作用域是window，对象obj当然不属于作用域了(我们知道作用域只有全局作用域window和局部作用域函数)。所以会打印出window

obj.foo2()()，首先会执行obj.foo2()，这不是个箭头函数，所以它里面的this是调用它的obj对象，因此打印出obj，而返回的匿名函数是一个箭头函数，它的this由外层作用域决定，那也就是函数foo2咯，那也就是它的this会和foo2函数里的this一样，就也打印出了obj。

答案：

```js
'window'
'obj'
'obj'
```

## 7.2 题目二

字面量对象中普通函数与箭头函数的区别: 只有一层函数的题目

```js
var name = 'window'
var obj1 = {
	name: 'obj1',
	foo: function () {
		console.log(this.name)
	}
}

var obj2 = {
	name: 'obj2',
	foo: () => {
		console.log(this.name)
	}
}

obj1.foo()
obj2.foo()
```

解题分析：

不使用箭头函数的obj1.foo()是由obj1调用的，所以this.name为obj1。

使用箭头函数的obj2.foo()的外层作用域是window，所以this.name为window。

答案：

```js
'obj1'
'window'
```

## 7.3 题目三

obj1, window obj2, obj2 window, window window window 

```js
var name = 'window'
var obj1 = {
  name: 'obj1',
  foo: function () {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var obj2 = {
  name: 'obj2',
  foo: function () {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  }
}
var obj3 = {
  name: 'obj3',
  foo: () => {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var obj4 = {
  name: 'obj4',
  foo: () => {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  }
}

obj1.foo()()
obj2.foo()()
obj3.foo()()
obj4.foo()()
```

解题分析：

- obj1.foo()()两层都是普通函数，类似于题目4.6，分别打印出obj1和window。
- obj2.foo()()外层为普通函数，内层为箭头，类似于题目7.1，都是打印出obj2。
- obj3.foo()()外层为箭头函数，内层为普通函数，箭头函数的this由外层作用域决定，因此为window，内层普通函数由调用者决定，调用它的是window，因此也为window。
- obj4.foo()()两层都是箭头函数，第一个箭头函数的this由外层作用域决定，因此为window，第二个箭头函数的this也由外层作用域决定，它的外层作用域是第一个箭头函数，而第一个箭头函数的this是window，因此内层的this也是window。

## 7.4 题目四

```js
var name = 'window'
function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  }
  this.foo2 = () => {
    console.log(this.name)
  }
}
var person2 = {
  name: 'person2',
  foo2: () => {
    console.log(this.name)
  }
}
var person1 = new Person('person1')
person1.foo1()
person1.foo2()
person2.foo2()
```

解题思路：

- person1.foo1()是个普通函数，this由最后调用它的对象决定，即person1。
- person1.foo2()为箭头函数，this由外层作用域决定，且指向函数定义时的this而非执行时，在这里它的外层作用域是函数Person，且这个是构造函数，并且使用了new来生成了对象person1，所以此时this的指向是为person1。
- person2.foo2()字面量创建的的对象person2中的foo2是个箭头函数，由于person2是直接在window下创建的，你可以理解为它所在的作用域就是在window下，因此person2.foo2()内的this应该是window。

答案：

```js
'person1'
'person1'
'window'
```

## 7.5 题目五

```js
var name = 'window'
function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
  this.foo2 = function () {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  }
  this.foo3 = () => {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
  this.foo4 = () => {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
person1.foo1()()
person1.foo2()()
person1.foo3()()
person1.foo4()()
```

解题分析：

- person1.foo1()()两层都是普通函数，这个不再重复说了，打印出person1和window。(类似题目6.2)
- person1.foo2()()第一层普通函数，它的this是由最后调用它的对象决定也就是person1，第二层为箭头函数，它的this由外层作用域决定，也就是foo2这个函数，因此也为person1。
- person1.foo3()()第一层为箭头函数，this由外层作用域决定，因此为person1，第二层为普通函数，由最后调用者决定，因此为window。
- person1.foo4()()两层都是箭头函数，this由外层作用域决定，所以都是person1。

## 7.6 题目六

箭头函数结合.call的题目

箭头函数的this无法通过bind、call、apply来直接修改，但是可以通过改变作用域中this的指向来间接修改。

```js
var name = 'window'
var obj1 = {
  name: 'obj1',
  foo1: function () {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  },
  foo2: () => {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var obj2 = {
  name: 'obj2'
}
obj1.foo1.call(obj2)()
obj1.foo1().call(obj2)
obj1.foo2.call(obj2)()
obj1.foo2().call(obj2)
```

解题分析：

- obj1.foo1.call(obj2)()第一层为普通函数，并且通过.call改变了this指向为obj2，所以会打印出obj2，第二层为箭头函数，它的this和外层作用域中的this相同，因此也是obj2。
- obj1.foo().call(obj2)第一层打印出obj1，第二层为箭头函数，使用了.call想要修改this的指向，但是并不能成功，因此.call(obj2)对箭头函数无效，还是打印出obj1。
- obj1.foo2.call(obj2)()第一层为箭头函数，并且想要通过.call(obj2)改变this指向，但是无效，且它的外层作用域是window，所以会打印出window，第二层为普通函数，this是最后调用者window，所以也会打印出window。
- obj1.foo2().call(obj2)第一层为箭头函数，外层作用域是window，打印出window，第二层为普通函数，且使用了.call(obj2)来改变this指向，所以打印出了obj2。

## 总结

来总结一下箭头函数需要注意的点吧：

- 它里面的this是由外层作用域来决定的，且指向函数定义时的this而非执行时
- 字面量创建的对象，作用域是window，如果里面有箭头函数属性的话，this指向的是window
- 构造函数创建的对象，作用域是可以理解为是这个构造函数，且这个构造函数的this是指向新建的对象的，因此this指向这个对象。
- 箭头函数的this是无法通过bind、call、apply来直接修改，但是可以通过改变作用域中this的指向来间接修改。

优点

- 箭头函数写代码拥有更加简洁的语法(当然也有人认为这是缺点)
- this由外层作用域决定，所以在某些场合我们不需要写类似const that = this这样的代码

### 避免使用的场景

根据箭头函数的特性，所以我们应该避免在以下四种场景中使用它：

使用箭头函数定义对象的方法

```js
let obj = {
    value: 'xx',
    getValue: () => console.log(this.value)
}
obj.getValue() // undefined
```

定义原型方法

```js
function Foo (value) {
    this.value = value
}
Foo.prototype.getValue = () => console.log(this.value)

const foo1 = new Foo(1)
foo1.getValue() // undefined
```

构造函数使用箭头函数

```js
const Foo = (value) => {
    this.value = value;
}
const foo1 = new Foo(1)
// 事实上直接就报错了 Uncaught TypeError: Foo is not a constructor
console.log(foo1);
```

作为事件的回调函数

```js
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    console.log(this === window); // => true
    this.innerHTML = 'Clicked button';
});
```

## 8. 综合题

## 8.1 题目一

字面量对象中的各种场景

```js
var name = 'window'
var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  }
}
var person2 = { name: 'person2' }

person1.foo1() // 'person1'
person1.foo1.call(person2) // 'person2'

person1.foo2() // 'window'
person1.foo2.call(person2) // 'window'

person1.foo3()() // 'window'
person1.foo3.call(person2)() // 'window'
person1.foo3().call(person2) // 'person2'

person1.foo4()() // 'person1'
person1.foo4.call(person2)() // 'person2'
person1.foo4().call(person2) // 'person1'
```

## 8.2 题目二

构造函数中的各种场景

```js
var name = 'window'
function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
  this.foo2 = () => console.log(this.name),
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  },
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1() // 'person1'
person1.foo1.call(person2) // 'person2'

person1.foo2() // 'person1'
person1.foo2.call(person2) // 'person1'

person1.foo3()() // 'window'
person1.foo3.call(person2)() // 'window'
person1.foo3().call(person2) // 'person2'

person1.foo4()() // 'person1'
person1.foo4.call(person2)() // 'person2'
person1.foo4().call(person2) // 'person1'
```

## 8.3 题目三

```js
var name = 'window'
function Person (name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      return () => {
        console.log(this.name)
      }
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()() // 'window'
person1.obj.foo1.call(person2)() // 'window'
person1.obj.foo1().call(person2) // 'person2'

person1.obj.foo2()() // 'obj'
person1.obj.foo2.call(person2)() // 'person2'
person1.obj.foo2().call(person2) // 'obj'
```

## 8.4 题目四

```js
function foo() {
  console.log( this.a );
}
var a = 2;
(function(){
  "use strict";
  foo();
})();
```

答案并不是undefined，也不会报错，而是打印出了2。

哈哈😄，其实这里是有一个迷惑点的，那就是"use strict"。

我们知道，使用了"use strict"开启严格模式会使得"use strict"以下代码的this为undefined，也就是这里的立即执行函数中的this是undefined。

但是调用foo()函数的依然是window，所以foo()中的this依旧是window，所以会打印出2。

如果你是使用this.foo()调用的话，就会报错了，因为现在立即执行函数中的this是undefined。

或者将"use strict"放到foo()函数里面，也会报错。
