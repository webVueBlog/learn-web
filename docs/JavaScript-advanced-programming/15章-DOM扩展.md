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

这个方法返回的是一个 NodeList 的静态实例。会返回所有匹配的节点

```js
// 取得 ID 为"myDiv"的<div>元素中的所有<em>元素
let ems = document.getElementById("myDiv").querySelectorAll("em"); 
// 取得所有类名中包含"selected"的元素
let selecteds = document.querySelectorAll(".selected"); 
// 取得所有是<p>元素子元素的<strong>元素
let strongs = document.querySelectorAll("p strong");
```

返回的 NodeList 对象可以通过 for-of 循环、item()方法或中括号语法取得个别元素

```js
let strongElements = document.querySelectorAll("p strong"); 
// 以下 3 个循环的效果一样
for (let strong of strongElements) { 
 strong.className = "important"; 
} 
for (let i = 0; i < strongElements.length; ++i) { 
 strongElements.item(i).className = "important"; 
} 
for (let i = 0; i < strongElements.length; ++i) { 
 strongElements[i].className = "important"; 
}
```

## matches()

matches()方法接收一个 CSS 选择符参数，如果元素匹配则该选择符返回 true，否则返回 false。

```js
if (document.body.matches("body.page1")){ 
 // true 
}
```

### 元素遍历

Element Traversal API 为 DOM 元素添加了 5 个属性

1. childElementCount，返回子元素数量（不包含文本节点和注释）
2. firstElementChild，指向第一个 Element 类型的子元素（Element 版 firstChild）；
3. lastElementChild，指向最后一个 Element 类型的子元素（Element 版 lastChild）；
4. previousElementSibling ，指向前一个 Element 类型的同胞元素（ Element 版 previousSibling）；
5. nextElementSibling，指向后一个 Element 类型的同胞元素（Element 版 nextSibling）。

```js
let parentElement = document.getElementById('parent'); 
let currentChildNode = parentElement.firstChild; 
// 没有子元素，firstChild 返回 null，跳过循环
while (currentChildNode) { 
 if (currentChildNode.nodeType === 1) { 
 // 如果有元素节点，则做相应处理
 processChild(currentChildNode); 
 } 
 if (currentChildNode === parentElement.lastChild) { 
 break; 
 } 
 currentChildNode = currentChildNode.nextSibling; 
}
```

简化如下：

```js
let parentElement = document.getElementById('parent'); 
let currentChildElement = parentElement.firstElementChild;
// 没有子元素，firstElementChild 返回 null，跳过循环
while (currentChildElement) { 
 // 这就是元素节点，做相应处理
 processChild(currentChildElement); 
 if (currentChildElement === parentElement.lastElementChild) { 
 break; 
 } 
 currentChildElement = currentChildElement.nextElementSibling; 
}
```

## HTML5

### 1. getElementsByClassName()

getElementsByClassName()方法接收一个参数，即包含一个或多个类名的字符串，返回类名中包含相应类的元素的 NodeList。

```js
// 取得所有类名中包含"username"和"current"元素
// 这两个类名的顺序无关紧要
let allCurrentUsernames = document.getElementsByClassName("username current"); 
// 取得 ID 为"myDiv"的元素子树中所有包含"selected"类的元素
let selected = document.getElementById("myDiv").getElementsByClassName("selected");
```

### 2. classList 属性

要操作类名，可以通过 className 属性实现添加、删除和替换。

```js
<div class="bd user disabled">...</div>

// 要删除"user"类
let targetClass = "user"; 
// 把类名拆成数组
let classNames = div.className.split(/\s+/); 
// 找到要删除类名的索引
let idx = classNames.indexOf(targetClass); 
// 如果有则删除
if (idx > -1) { 
 classNames.splice(i,1); 
} 
// 重新设置类名
div.className = classNames.join(" ");
```

classList 是一个新的集合类型 DOMTokenList 的实例。

DOMTokenList也有 length 属性表示自己包含多少项，也可以通过 item()或中括号取得个别的元素

DOMTokenList方法:

1. add(value)，向类名列表中添加指定的字符串值 value。如果这个值已经存在，则什么也不做。
2. contains(value)，返回布尔值，表示给定的 value 是否存在。
3. remove(value)，从类名列表中删除指定的字符串值 value。
4. toggle(value)，如果类名列表中已经存在指定的 value，则删除；如果不存在，则添加。

简化

```js
div.classList.remove("user");

// 删除"disabled"类
div.classList.remove("disabled"); 
// 添加"current"类
div.classList.add("current");

// 切换"user"类
div.classList.toggle("user"); 
// 检测类名 
if (div.classList.contains("bd") && !div.classList.contains("disabled")){ 
 // 执行操作
) 
// 迭代类名
for (let class of div.classList){ 
 doStuff(class); 
}
```

### 焦点管理

document.activeElement，始终包含当前拥
有焦点的 DOM 元素。页面加载时，可以通过用户输入（按 Tab 键或代码中使用 focus()方法）让某个
元素自动获得焦点

```js
let button = document.getElementById("myButton"); 
button.focus(); 
console.log(document.activeElement === button); // true
```

1. 默认情况下，document.activeElement 在页面刚加载完之后会设置为 document.body。
2. 在页面完全加载之前，document.activeElement 的值为 null。

document.hasFocus()方法，该方法返回布尔值，表示文档是否拥有焦点：

```js
let button = document.getElementById("myButton"); 
button.focus(); 
console.log(document.hasFocus()); // true
```

## HTMLDocument 扩展

### 1. readyState 属性

document.readyState 属性有两个可能的值：

- loading，表示文档正在加载；
- complete，表示文档加载完成

通常要依赖 onload 事件处理程序设置一个标记，表示文档加载完了

```js
if (document.readyState == "complete"){ 
 // 执行操作
}
```

### 2. compatMode 属性

1. 标准模式下 document.compatMode 的值是"CSS1Compat"
2. 在混杂模式下，document.compatMode 的值是"BackCompat"：

```js
if (document.compatMode == "CSS1Compat"){ 
 console.log("Standards mode"); 
} else { 
 console.log("Quirks mode"); 
}
```

### 3. head 属性

document.head 属性，指向文档的`<head>`元素

### 字符集属性

- characterSet 属性表示文档实际使用的字符集，也可以用来指定新字符集
- 默认值是"UTF-16"

```js
console.log(document.characterSet); // "UTF-16" 
document.characterSet = "UTF-8";
```

## 自定义数据属性

使用前缀 data-以便告诉浏览器，这些属性既不包含与渲染有关的信息，也不包含元素的语义信息。

```js
<div id="myDiv" data-appId="12345" data-myname="Nicholas"></div>
```

- 定义了自定义数据属性后，可以通过元素的 dataset 属性来访问
- dataset 属性是一个DOMStringMap 的实例，包含一组键/值对映射。

（例如，属性 data-myname、data-myName 可以通过 myname 访问，但要注意 data-my-name、data-My-Name 要通过 myName 来访问）。

```js
// 本例中使用的方法仅用于示范
let div = document.getElementById("myDiv"); 
// 取得自定义数据属性的值
let appId = div.dataset.appId; 
let myName = div.dataset.myname; 
// 设置自定义数据属性的值
div.dataset.appId = 23456; 
div.dataset.myname = "Michael"; 
// 有"myname"吗？
if (div.dataset.myname){ 
 console.log(`Hello, ${div.dataset.myname}`); 
}
```

## 插入标记

### 1. innerHTML 属性

在读取 innerHTML 属性时，会返回元素所有后代的 HTML 字符串，包括元素、注释和文本节点。
而在写入 innerHTML 时，则会根据提供的字符串值以新的 DOM 子树替代元素中原来包含的所有节点。

比如下面的 HTML 代码：

```js
<div id="content"> 
 <p>This is a <strong>paragraph</strong> with a list following it.</p> 
 <ul> 
 <li>Item 1</li> 
 <li>Item 2</li> 
 <li>Item 3</li> 
 </ul> 
</div> 
```

对于这里的`<div>`元素而言，其 innerHTML 属性会返回以下字符串：

```js
<p>This is a <strong>paragraph</strong> with a list following it.</p> 
<ul> 
 <li>Item 1</li> 
 <li>Item 2</li> 
 <li>Item 3</li> 
</ul> 
```

实际返回的文本内容会因浏览器而不同。

在写入模式下，赋给 innerHTML 属性的值会被解析为 DOM 子树，并替代元素之前的所有节点。

### 2. 旧 IE 中的 innerHTML

```js
// 行不通
div.innerHTML = "<script defer>console.log('hi');<\/script>";
```

```js
// 以下都可行
div.innerHTML = "_<script defer>console.log('hi');<\/script>"; 
div.innerHTML = "<div>&nbsp;</div><script defer>console.log('hi');<\/script>"; 
div.innerHTML = "<input type=\"hidden\"><script defer>console. 
log('hi');<\/script>";
```

```js
div.innerHTML = "<style type=\"text/css\">body {background-color: red; }</style>";
```

在 IE8 及之前的版本中，`<style>`也被认为是非受控元素，所以必须前置一个受控元素：

```js
div.innerHTML = "_<style type=\"text/css\">body {background-color: red; }</style>"; 
div.removeChild(div.firstChild);
```

### 3. outerHTML 属性

下面的 HTML 代码：

```js
<div id="content"> 
 <p>This is a <strong>paragraph</strong> with a list following it.</p> 
 <ul> 
 <li>Item 1</li> 
 <li>Item 2</li> 
 <li>Item 3</li> 
 </ul> 
</div> 
```

在这个`<div>`元素上调用 outerHTML 会返回相同的字符串，包括`<div>`本身。

如果使用 outerHTML 设置 HTML，比如：

```js
div.outerHTML = "<p>This is a paragraph.</p>"; 
```

则会得到与执行以下脚本相同的结果：

```js
let p = document.createElement("p"); 
p.appendChild(document.createTextNode("This is a paragraph.")); 
div.parentNode.replaceChild(p, div); 
```

新的`<p>`元素会取代 `DOM` 树中原来的`<div>`元素。

































