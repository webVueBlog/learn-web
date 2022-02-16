> 点击勘误[issues](https://github.com/webVueBlog/learn-web/issues)，哪吒感谢大家的阅读

[[toc]]

## DOM 扩展

1. 理解 Selectors API
2. 使用 HTML5 DOM 扩展

### Selectors API

1. Selectors API Level 1 的核心是两个方法：querySelector()和 querySelectorAll()
2. 在兼容浏览器中，Document 类型和 Element 类型的实例上都会暴露这两个方法。
3. Selectors API Level 2 规范在 Element 类型上新增了更多方法，比如 matches()、find()和findAll()。

### querySelector()

querySelector()方法接收 CSS 选择符参数，返回匹配该模式的第一个后代元素，如果没有匹配项则返回 null。

```js
// 取得<body>元素
let body = document.querySelector("body"); 
// 取得 ID 为"myDiv"的元素
let myDiv = document.querySelector("#myDiv");
```

```js
// 取得类名为"selected"的第一个元素
let selected = document.querySelector(".selected"); 
// 取得类名为"button"的图片
let img = document.body.querySelector("img.button");
```

1. 在 Document 上使用 querySelector()方法时，会从文档元素开始搜索；
2. 在 Element 上使用querySelector()方法时，则只会从当前元素的后代中查询。

### querySelectorAll()




























