> 点击勘误[issues](https://github.com/webVueBlog/learn-web/issues)，哪吒感谢大家的阅读

[[toc]]

## 为什么不要使用 eval

eval 函数会在当前作用域中执行一段 JavaScript 代码字符串。

```js
var foo = 1;
function test() {
    var foo = 2;
    eval('foo = 3');
    return foo;
}
test(); // 3
foo; // 1
```

但是 eval 只在被直接调用并且调用函数就是 eval 本身时，才在当前作用域中执行。

```js
var foo = 1;
function test() {
    var foo = 2;
    var bar = eval;
    bar('foo = 3');
    return foo;
}
test(); // 2
foo; // 3
```

上面的代码等价于在全局作用域中调用 eval，和下面两种写法效果一样：

```js
// 写法一：直接调用全局作用域下的 foo 变量
var foo = 1;
function test() {
    var foo = 2;
    window.foo = 3;
    return foo;
}
test(); // 2
foo; // 3

// 写法二：使用 call 函数修改 eval 执行的上下文为全局作用域
var foo = 1;
function test() {
    var foo = 2;
    eval.call(window, 'foo = 3');
    return foo;
}
test(); // 2
foo; // 3
```

在任何情况下我们都应该避免使用 eval 函数。99.9% 使用 eval 的场景都有不使用 eval 的解决方案。

## 伪装的 eval

定时函数 setTimeout 和 setInterval 都可以接受字符串作为它们的第一个参数。 这个字符串总是在全局作用域中执行，因此 eval 在这种情况下没有被直接调用。

## 安全问题

eval 也存在安全问题，因为它会执行任意传给它的代码， 在代码字符串未知或者是来自一个不信任的源时，绝对不要使用 eval 函数。

## 结论

绝对不要使用 eval，任何使用它的代码都会在它的工作方式，性能和安全性方面受到质疑。 如果一些情况必须使用到 eval 才能正常工作，首先它的设计会受到质疑，这不应该是首选的解决方案， 一个更好的不使用 eval 的解决方案应该得到充分考虑并优先采用。

## undefined 和 null

`JavaScript` 有两个表示‘空’的值，其中比较有用的是 `undefined。`

## undefined 的值

`undefined` 是一个值为 `undefined` 的类型。

这个语言也定义了一个全局变量，它的值是 `undefined`，这个变量也被称为 `undefined。` 但是这个变量不是一个常量，也不是一个关键字。这意味着它的值可以轻易被覆盖。

`ES5` 提示: 在 `ECMAScript` 5 的严格模式下，`undefined` 不再是 可写的了。 但是它的名称仍然可以被隐藏，比如定义一个函数名为 `undefined。`

下面的情况会返回 `undefined` 值：

1. 访问未修改的全局变量 undefined。
2. 由于没有定义 return 表达式的函数隐式返回。
3. return 表达式没有显式的返回任何内容。
4. 访问不存在的属性。
5. 函数参数没有被显式的传递值。
6. 任何被设置为 undefined 值的变量。

## 处理 undefined 值的改变

由于全局变量 `undefined` 只是保存了 `undefined` 类型实际值的副本， 因此对它赋新值不会改变类型 `undefined` 的值。

然而，为了方便其它变量和 `undefined` 做比较，我们需要事先获取类型 `undefined` 的值。

为了避免可能对 `undefined` 值的改变，一个常用的技巧是使用一个传递到匿名包装器的额外参数。 在调用时，这个参数不会获取任何值。

```js
var undefined = 123;
(function(something, foo, undefined) {
    // 局部作用域里的 undefined 变量重新获得了 `undefined` 值

})('Hello World', 42);
```

另外一种达到相同目的方法是在函数内使用变量声明。

```js
var undefined = 123;
(function(something, foo) {
    var undefined;
    ...

})('Hello World', 42);
```

这里唯一的区别是，在压缩后并且函数内没有其它需要使用 var 声明变量的情况下，这个版本的代码会多出 4 个字节的代码。

## null 的用处

`JavaScript` 中的 `undefined` 的使用场景类似于其它语言中的 `null`，实际上 `JavaScript` 中的 `null` 是另外一种数据类型。

它在 `JavaScript` 内部有一些使用场景（比如声明原型链的终结 `Foo.prototype = null`），但是大多数情况下都可以使用 `undefined` 来代替。

## 自动分号插入

尽管 JavaScript 有 C 的代码风格，但是它不强制要求在代码中使用分号，实际上可以省略它们。

JavaScript 不是一个没有分号的语言，恰恰相反上它需要分号来就解析源代码。 因此 JavaScript 解析器在遇到由于缺少分号导致的解析错误时，会自动在源代码中插入分号。

```js
var foo = function() {
} // 解析错误，分号丢失
test()
```

自动插入分号，解析器重新解析。

```js
var foo = function() {
}; // 没有错误，解析继续
test()
```

自动的分号插入被认为是 JavaScript 语言最大的设计缺陷之一，因为它能改变代码的行为。

## 工作原理

下面的代码没有分号，因此解析器需要自己判断需要在哪些地方插入分号。

```js
(function(window, undefined) {
    function test(options) {
        log('testing!')

        (options.list || []).forEach(function(i) {

        })

        options.value.test(
            'long string to pass here',
            'and another long string to pass'
        )

        return
        {
            foo: function() {}
        }
    }
    window.test = test

})(window)

(function(window) {
    window.someLibrary = {}
})(window)
```

下面是解析器"猜测"的结果。

```js
(function(window, undefined) {
    function test(options) {

        // 没有插入分号，两行被合并为一行
        log('testing!')(options.list || []).forEach(function(i) {

        }); // <- 插入分号

        options.value.test(
            'long string to pass here',
            'and another long string to pass'
        ); // <- 插入分号

        return; // <- 插入分号, 改变了 return 表达式的行为
        { // 作为一个代码段处理
            foo: function() {} 
        }; // <- 插入分号
    }
    window.test = test; // <- 插入分号

// 两行又被合并了
})(window)(function(window) {
    window.someLibrary = {}; // <- 插入分号
})(window); //<- 插入分号
```

注意: `JavaScript` 不能正确的处理 `return` 表达式紧跟换行符的情况， 虽然这不能算是自动分号插入的错误，但这确实是一种不希望的副作用。

解析器显著改变了上面代码的行为，在另外一些情况下也会做出错误的处理。

## 前置括号

在前置括号的情况下，解析器不会自动插入分号。

```js
log('testing!')
(options.list || []).forEach(function(i) {})
```

上面代码被解析器转换为一行。

```js
log('testing!')(options.list || []).forEach(function(i) {})
```

`log` 函数的执行结果极大可能不是函数；这种情况下就会出现 `TypeError` 的错误，详细错误信息可能是 `undefined is not a function。`

## 结论

建议绝对不要省略分号，同时也提倡将花括号和相应的表达式放在一行， 对于只有一行代码的 `if` 或者 `else` 表达式，也不应该省略花括号。 这些良好的编程习惯不仅可以提到代码的一致性，而且可以防止解析器改变代码行为的错误处理。

## setTimeout 和 setInterval

由于 `JavaScript` 是异步的，可以使用 `setTimeout` 和 `setInterval` 来计划执行函数。

注意: 定时处理不是 `ECMAScript` 的标准，它们在 `DOM` (文档对象模型) 被实现。

```js
function foo() {}
var id = setTimeout(foo, 1000); // 返回一个大于零的数字
```

当 `setTimeout` 被调用时，它会返回一个 `ID` 标识并且计划在将来大约 `1000` 毫秒后调用 `foo` 函数。 `foo` 函数只会被执行一次。

基于 `JavaScript` 引擎的计时策略，以及本质上的单线程运行方式，所以其它代码的运行可能会阻塞此线程。 因此没法确保函数会在 `setTimeout` 指定的时刻被调用。

作为第一个参数的函数将会在全局作用域中执行，因此函数内的 `this` 将会指向这个全局对象。

```js
function Foo() {
    this.value = 42;
    this.method = function() {
        // this 指向全局对象
        console.log(this.value); // 输出：undefined
    };
    setTimeout(this.method, 500);
}
new Foo();
```

注意: `setTimeout` 的第一个参数是函数对象，一个常犯的错误是这样的 `setTimeout(foo(), 1000)`， 这里回调函数是 `foo` 的返回值，而不是`foo`本身。 大部分情况下，这是一个潜在的错误，因为如果函数返回 `undefined，setTimeout` 也不会报错。

## setInterval 的堆调用

`setTimeout` 只会执行回调函数一次，不过 `setInterval` - 正如名字建议的 - 会每隔 `X` 毫秒执行函数一次。 但是却不鼓励使用这个函数。

当回调函数的执行被阻塞时，`setInterval` 仍然会发布更多的回调指令。在很小的定时间隔情况下，这会导致回调函数被堆积起来。

```js
function foo(){
    // 阻塞执行 1 秒
}
setInterval(foo, 100);
```

上面代码中，`foo` 会执行一次随后被阻塞了一秒钟。

在 `foo` 被阻塞的时候，`setInterval` 仍然在组织将来对回调函数的调用。 因此，当第一次 `foo` 函数调用结束时，已经有 10 次函数调用在等待执行。

## 处理可能的阻塞调用

最简单也是最容易控制的方案，是在回调函数内部使用 `setTimeout` 函数。

```js
function foo(){
    // 阻塞执行 1 秒
    setTimeout(foo, 100);
}
foo();
```

这样不仅封装了 `setTimeout` 回调函数，而且阻止了调用指令的堆积，可以有更多的控制。 `foo` 函数现在可以控制是否继续执行还是终止执行。

## 手工清空定时器

可以通过将定时时产生的 `ID` 标识传递给 `clearTimeout` 或者 `clearInterval` 函数来清除定时， 至于使用哪个函数取决于调用的时候使用的是 `setTimeout` 还是 `setInterval。`

```js
var id = setTimeout(foo, 1000);
clearTimeout(id);
```

## 清除所有定时器

由于没有内置的清除所有定时器的方法，可以采用一种暴力的方式来达到这一目的。

```js
// 清空"所有"的定时器
for(var i = 1; i < 1000; i++) {
    clearTimeout(i);
}
```

可能还有些定时器不会在上面代码中被清除（如果定时器调用时返回的 ID 值大于 1000）， 因此我们可以事先保存所有的定时器 ID，然后一把清除。

## 隐藏使用 eval

`setTimeout` 和 `setInterval` 也接受第一个参数为字符串的情况。 这个特性绝对不要使用，因为它在内部使用了 `eval。`

注意: 由于定时器函数不是 ECMAScript 的标准，如何解析字符串参数在不同的 JavaScript 引擎实现中可能不同。 事实上，微软的 JScript 会使用 `Function` 构造函数来代替 eval 的使用。

```js
function foo() {
    // 将会被调用
}

function bar() {
    function foo() {
        // 不会被调用
    }
    setTimeout('foo()', 1000);
}
bar();
```

由于 eval 在这种情况下不是被直接调用，因此传递到 setTimeout 的字符串会自全局作用域中执行； 因此，上面的回调函数使用的不是定义在 bar 作用域中的局部变量 foo。

建议不要在调用定时器函数时，为了向回调函数传递参数而使用字符串的形式。

```js
function foo(a, b, c) {}

// 不要这样做
setTimeout('foo(1,2, 3)', 1000)

// 可以使用匿名函数完成相同功能
setTimeout(function() {
    foo(1, 2, 3);
}, 1000)
```

注意: 虽然也可以使用这样的语法 `setTimeout(foo, 1000, 1, 2, 3)`， 但是不推荐这么做，因为在使用对象的属性方法时可能会出错。 （译者注：这里说的是属性方法内，this 的指向错误）

## 结论

绝对不要使用字符串作为 setTimeout 或者 setInterval 的第一个参数， 这么写的代码明显质量很差。当需要向回调函数传递参数时，可以创建一个匿名函数，在函数内执行真实的回调函数。

另外，应该避免使用 setInterval，因为它的定时执行不会被 JavaScript 阻塞。
