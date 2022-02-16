> 点击勘误[issues](https://github.com/webVueBlog/learn-web/issues)，哪吒感谢大家的阅读

[[toc]]

## 内容

1. 理解文档对象模型（DOM）的构成
2. 节点类型
3. 浏览器兼容性
4. MutationObserver 接口

> 文档对象模型（DOM，Document Object Model）是 HTML 和 XML 文档的编程接口。

1. DOM 表示由多层节点构成的文档，通过它开发者可以添加、删除和修改页面的各个部分。
2. DOM 现在是真正跨平台、语言无关的表示和操作网页的方式。

JavaScript 中提供了 DOM API。

:::tip
注意 IE8 及更低版本中的 DOM 是通过 COM 对象实现的。这意味着这些版本的 IE 中，
DOM 对象跟原生 JavaScript 对象具有不同的行为和功能。
:::

## 节点层级

任何 HTML 或 XML 文档都可以用 DOM 表示为一个由节点构成的层级结构。

1. document 节点表示每个文档的根节点。
2. 根节点的唯一子节点是`<html>`元素，我们称之为文档元素（documentElement）
3. 文档元素是文档最外层的元素，所有其他元素都存在于这个元素之内。
4. 每个文档只能有一个文档元素。
5. 在 HTML 页面中，文档元素始终是`<html>`元素。在 XML 文档中，则没有这样预定义的元素，任何元素都可能成为文档元素。
6. DOM 中总共有 12 种节点类型，这些类型都继承一种基本类型。

## Node类型

每个节点都有 nodeType 属性，表示该节点的类型。节点类型由定义在 Node 类型上的 12 个数值
常量表示：
 
- Node.ELEMENT_NODE（1） - element_node
- Node.ATTRIBUTE_NODE（2） - attribute_node
- Node.TEXT_NODE（3） - text_node
- Node.CDATA_SECTION_NODE（4）cdata_section_node
- Node.ENTITY_REFERENCE_NODE（5） entity_reference_node
- Node.ENTITY_NODE（6） entity_node
- Node.PROCESSING_INSTRUCTION_NODE（7） processing_instruction_node
- Node.COMMENT_NODE（8） comment_node
- Node.DOCUMENT_NODE（9） document_node
- Node.DOCUMENT_TYPE_NODE（10） document_type_node
- Node.DOCUMENT_FRAGMENT_NODE（11） document_fragment_node
- Node.NOTATION_NODE（12）notation_node

```js
if (someNode.nodeType == Node.ELEMENT_NODE){ 
 alert("Node is an element."); // 元素节点
}
```

## nodeName 与 nodeValue

```js
if (someNode.nodeType == 1){ 
 value = someNode.nodeName; // 会显示元素的标签名
}
```

## 节点关系

1. 每个节点都有一个 childNodes 属性，其中包含一个 NodeList 的实例。
2. NodeList 是一个类数组对象，用于存储可以按位置存取的有序节点。
3. 注意，NodeList 并不是 Array 的实例，但可以使用中括号访问它的值，而且它也有 length 属性。

:::tip
NodeList 对象独特的地方在于，它其实是一个对 DOM 结构的查询，因此 DOM 结构的变化会自动地在 NodeList 中反映出来。
我们通常说 NodeList 是实时的活动对象，而不是第一次访问时所获得内容的快照。
:::

访问 NodeList 中的元素：

```js
let firstChild = someNode.childNodes[0]; 
let secondChild = someNode.childNodes.item(1); 
let count = someNode.childNodes.length;
```

转换为数组。比如：

```js
let arrayOfNodes = Array.prototype.slice.call(someNode.childNodes,0);
```

使用 ES6 的 Array.from()静态方法

```js
let arrayOfNodes = Array.from(someNode.childNodes);
```

1. 每个节点都有一个 parentNode 属性，指向其 DOM 树中的父元素。
2. childNodes 中的所有节点都有同一个父元素，因此它们的 parentNode 属性都指向同一个节点。
3. childNodes 列表中的每个节点都是同一列表中其他节点的同胞节点。
4. 使用 previousSibling 和 nextSibling 可以在这个列表的节点间导航。
5. 这个列表中第一个节点的 previousSibling 属性是 null，最后一个节点的nextSibling 属性也是 null

:::tip
注意，如果 childNodes 中只有一个节点，则它的 previousSibling 和 nextSibling 属性都是
null。
:::

1. 父节点和它的第一个及最后一个子节点也有专门属性：firstChild 和 lastChild 分别指向childNodes 中的第一个和最后一个子节点。
2. someNode.firstChild 的值始终等于 someNode.childNodes[0]，而 someNode.lastChild 的值始终等于 someNode.childNodes[someNode.childNodes.length-1]。
3. 如果只有一个子节点，则 firstChild 和 lastChild 指向同一个节点。
4. 如果没有子节点，则 firstChild 和 lastChild 都是 null。

## 方法 hasChildNodes()

hasChildNodes()，这个方法如果返回 true 则说明节点有一个或多个子节点。

:::tip
注意 虽然所有节点类型都继承了 Node，但并非所有节点都有子节点。
:::

有一个所有节点都共享的关系。ownerDocument 属性是一个指向代表整个文档的文档节点
的指针。因为一个节点不可能同时存在于两个或者多个文档中。

## 操纵节点

1. appendChild()，用于在 childNodes 列表末尾添加节点。
2. appendChild()方法返回新添加的节点。

```js
let returnedNode = someNode.appendChild(newNode); 
alert(returnedNode == newNode); // true 
alert(someNode.lastChild == newNode); // true
```

3. 如果把文档中已经存在的节点传给 appendChild()，则这个节点会从之前的位置被转移到新位置。

```js
// 假设 someNode 有多个子节点
let returnedNode = someNode.appendChild(someNode.firstChild); 
alert(returnedNode == someNode.firstChild); // false 
alert(returnedNode == someNode.lastChild); // true
```

> 把节点放到 childNodes 中的特定位置

使用 insertBefore()方法。这个方法接收两个参数：要插入的节点和参照节点。

```js
// 作为最后一个子节点插入
returnedNode = someNode.insertBefore(newNode, null); 
alert(newNode == someNode.lastChild); // true 
// 作为新的第一个子节点插入
returnedNode = someNode.insertBefore(newNode, someNode.firstChild); 
alert(returnedNode == newNode); // true 
alert(newNode == someNode.firstChild); // true 
// 插入最后一个子节点前面
returnedNode = someNode.insertBefore(newNode, someNode.lastChild); 
alert(newNode == someNode.childNodes[someNode.childNodes.length - 2]); // true
```

1. replaceChild()方法接收两个参数：要插入的节点和要替换的节点。
2. 要替换的节点会被返回并从文档树中完全移除，要插入的节点会取而代之。

```js
// 替换第一个子节点
let returnedNode = someNode.replaceChild(newNode, someNode.firstChild); 
// 替换最后一个子节点
returnedNode = someNode.replaceChild(newNode, someNode.lastChild);
```

## 移除节点 使用 removeChild()方法

removeChild()方法。这个方法接收一个参数，即要移除的节点。被移除的节点会被返回

```js
// 删除第一个子节点
let formerFirstChild = someNode.removeChild(someNode.firstChild); 
// 删除最后一个子节点
let formerLastChild = someNode.removeChild(someNode.lastChild);
```

1. cloneNode()会返回与调用它的节点一模一样的节点。
2. cloneNode()方法接收一个布尔值参数，表示是否深复制。
3. 复制返回的节点属于文档所有，但尚未指定父节点，所以可称为孤儿节点（orphan）。

使用cloneNode()方法的两种方式：

```js
let deepList = myList.cloneNode(true); 
alert(deepList.childNodes.length); // 3（IE9 之前的版本）或 7（其他浏览器）
let shallowList = myList.cloneNode(false); 
alert(shallowList.childNodes.length); // 0
```

:::tip
注意 cloneNode()方法不会复制添加到 DOM 节点的 JavaScript 属性，比如事件处理程
序。这个方法只复制 HTML 属性，以及可选地复制子节点。除此之外则一概不会复制。
IE 在很长时间内会复制事件处理程序，这是一个 bug，所以推荐在复制前先删除事件处
理程序。
:::

## normalize()

这个方法唯一的任务就是处理文档子树中的文本节点。

在节点上调用 normalize()方法会检测这个节点的所有后代

1. 如果发现空文本节点，则将其删除；
2. 如果两个同胞节点是相邻的，则将其合并为一个文本节点。

## Document 类型

Document 类型是 JavaScript 中表示文档节点的类型

1. 在浏览器中，文档对象 document 是HTMLDocument 的实例（HTMLDocument 继承 Document），表示整个 HTML 页面。
2. document 是 window对象的属性，因此是一个全局对象。

Document 类型的节点有以下特征：
 
1.  等于 9；  
2.  nodeName 值为"#document"；  
3.  nodeValue 值为 null；  
4.  parentNode 值为 null；  
5.  ownerDocument 值为 null；  
6.  子节点可以是 DocumentType（最多一个）、Element（最多一个）、ProcessingInstruction或 Comment 类型。

## 文档子节点

提供了两个访问子节点的快捷方式

1. 第一个是 documentElement 属性，始终指向 HTML 页面中的`<html>`元素。
2. 虽然 document.childNodes 中始终有`<html>`元素

`<html>`元素。

这个元素既可以通过documentElement 属性获取，也可以通过 childNodes 列表访问

```js
let html = document.documentElement; // 取得对<html>的引用
alert(html === document.childNodes[0]); // true 
alert(html === document.firstChild); // true
```

`<body>`元素

```js
let body = document.body; // 取得对<body>的引用
```

> 所有主流浏览器都支持 document.documentElement 和 document.body。

Document 类型另一种可能的子节点是 DocumentType。
`<!doctype>`标签是文档中独立的部分，其信息可以通过 doctype 属性（在浏览器中是 document.doctype）来访问

```js
let doctype = document.doctype; // 取得对<!doctype>的引用
```

> 严格来讲出现在`<html>`元素外面的注释也是文档的子节点，它们的类型是 Comment。

## 文档信息

```js
// 读取文档标题
let originalTitle = document.title; 
// 修改文档标题
document.title = "New page title";
```

1. URL 包含当前页面的完整 URL（地址栏中的 URL）
2. domain 包含页面的域名
3. referrer 包含链接到当前页面的那个页面的 URL(如果当前页面没有来源，则 referrer 属性包含空字符串。)

```js
// 取得完整的 URL 
let url = document.URL; 
// 取得域名
let domain = document.domain; 
// 取得来源
let referrer = document.referrer;
```

## 定位元素

`getElementById()`和 `getElementsByTagName()`就是 Document 类型提供的两个方法。

1. getElementById()方法接收一个参数，即要获取元素的 ID，如果找到了则返回这个元素，如果没找到则返回 null。
2. getElementsByTagName()获取元素引用的方法。这个方法接收一个参数，即要获取元素的标签名，返回包含零个或多个元素的 NodeList。

在 HTML 文档中，这个方法返回一个HTMLCollection 对象。

```js
let images = document.getElementsByTagName("img");
// 这里把返回的 HTMLCollection 对象保存在了变量 images 中
```

```js
alert(images.length); // 图片数量
alert(images[0].src); // 第一张图片的 src 属性
alert(images.item(0).src); // 同上
```

HTMLCollection 对象还有一个额外的方法 namedItem()，可通过标签的 name 属性取得某一项
的引用。

```js
<img src="myimage.gif" name="myImage">
let myImage = images.namedItem("myImage");
let myImage = images["myImage"];
```

```js
要取得文档中的所有元素，可以给 getElementsByTagName()传入*。
```

getElementsByName()方法会返回具有给定 name 属性的所有元素。

> getElementsByName()方法最常用于单选按钮

## 特殊集合

都是 HTMLCollection 的实例

1. document.anchors 包含文档中所有带 name 属性的`<a>`元素。
2. document.forms 包含文档中所有`<form>`元素
3. document.images 包含文档中所有`<img>`元素
4. document.links 包含文档中所有带 href 属性的`<a>`元素。

## DOM 兼容性检测

- DOM Level 1 在 document.implementation 上只定义了一个方法，即 hasFeature()。
- 这个方法接收两个参数：特性名称和 DOM 版本。
- 如果浏览器支持指定的特性和版本，则 hasFeature()方法返回true

支持指定的特性和版本

```js
let hasXmlDom = document.implementation.hasFeature("XML", "1.0");
```

hasFeature()目前这个方法已经被废弃

## 文档写入

向网页输出流中写入内容。对应 4 个方法：write()、writeln()、open()和 close()。

1. write()和 writeln()方法都接收一个字符串参数
2. write()简单地写入文本
3. writeln()还会在字符串末尾追加一个换行符（\n）

使用了 window.onload 事件处理程序，将调用 document.write()的函数推迟到页面加载完毕后执行。会重写整个页面内容。

open()和 close()方法分别用于打开和关闭网页输出流。

## Element 类型

Element 类型的节点具有以下特征：

1. nodeType 等于 1；
2. nodeName 值为元素的标签名；
3. nodeValue 值为 null；
4. parentNode 值为 Document 或 Element 对象；
5. 子节点可以是 Element、Text、Comment、ProcessingInstruction、CDATASection、EntityReference 类型

取得这个元素的标签名：

```js
<div id="myDiv"></div>

let div = document.getElementById("myDiv");
alert(div.tagName); // "DIV"
alert(div.tagName == div.nodeName); // true
```

1. 在 HTML 中，元素标签名始终以全大写表示
2. 在 XML（包括 XHTML）中，标签名始终与源代码中的大小写一致.

## HTML 元素

1. id，元素在文档中的唯一标识符；
2. title，包含元素的额外信息，通常以提示条形式展示；
3. lang，元素内容的语言代码（很少用）；
4. dir，语言的书写方向（"ltr"表示从左到右，"rtl"表示从右到左，同样很少用）；
5. className，相当于 class 属性，用于指定元素的 CSS 类

## 取得属性

DOM 方法主要有 3 个：getAttribute()、setAttribute()和 removeAttribute()

```js
let div = document.getElementById("myDiv");
alert(div.getAttribute("id")); // "myDiv"
alert(div.getAttribute("class")); // 如果 不存在，返回null
```

:::tip
根据 HTML5 规范的要求，自定义属性名应该前缀 `data-` 以方便验证。
:::

1. 在使用 getAttribute()访问 style 属性时，返回的是 CSS 字符串。
2. 在通过 DOM 对象的属性访问时，style 属性返回的是一个（CSSStyleDeclaration）对象。
3. getAttribute()访问事件属性，则返回的是字符串形式的源代码。
4. 通过 DOM 对象的属性访问事件属性时返回的则是一个 JavaScript函数（未指定该属性则返回 null）。

> getAttribute()主要用于取得自定义属性的值。

## 设置属性

setAttribute()，这个方法接收两个参数：要设置的属性名和属性的值。

1. 如果属性已经存在，则 setAttribute()会以指定的值替换原来的值；
2. 如果属性不存在，则 setAttribute()会以指定的值创建该属性。
3. setAttribute()适用于 HTML 属性，也适用于自定义属性。

```js
div.setAttribute("id", "someOtherId");
div.setAttribute("class", "ft");
div.setAttribute("title", "Some other text");
div.setAttribute("lang","fr");
div.setAttribute("dir", "rtl");
div.id = "someOtherId";
div.align = "left";
```

:::tip
注意，在 DOM 对象上添加自定义属性，如下面的例子所示，不会自动让它变成元素的属性
:::

```js
div.mycolor = "red";
alert(div.getAttribute("mycolor")); // null（IE 除外）
```

removeAttribute()用于从元素中删除属性

```js
div.removeAttribute("class");
```

## attributes 属性

1. Element 类型是唯一使用 attributes 属性的 DOM 节点类型。
2. 元素的每个属性都表示为一个 Attr 节点，并保存在这个 NamedNodeMap 对象中。

NamedNodeMap 对象包含下列方法：

1. getNamedItem(name)，返回 nodeName 属性等于 name 的节点；
2. removeNamedItem(name)，删除 nodeName 属性等于 name 的节点；
3. setNamedItem(node)，向列表中添加 node 节点，以其 nodeName 为索引；
4. item(pos)，返回索引位置 pos 处的节点。

取得元素 id 属性的值，

```js
let id = element.attributes.getNamedItem("id").nodeValue;

// 使用中括号访问属性的简写形式
let id = element.attributes["id"].nodeValue;
```

设置属性的值

```js
element.attributes["id"].nodeValue = "someOtherId";
```

删除属性

```js
let oldAttr = element.attributes.removeNamedItem("id");
```

接收一个属性节点，然后给元素添加一个新属性

```js
element.attributes.setNamedItem(newAttr);
```

> getAttribute()、removeAttribute()和 setAttribute()方法

:::tip
attributes 属性最有用的场景是需要迭代元素上所有属性的时候。
:::

## 创建元素

document.createElement()方法创建新元素,会将其 ownerDocument 属性设置为 document

```js
let div = document.createElement("div");
```

## 元素后代

childNodes属性包含元素所有的子节点，这些子节点可能是其他元素、文本节点、注释或处理指令。

检测一下节点的 nodeType：

```js
for (let i = 0, len = element.childNodes.length; i < len; ++i) {
 if (element.childNodes[i].nodeType == 1) {
  // 执行某个操作 Element节点
 }
}
```

## Text 类型

Text 节点由 Text 类型表示

Text 类型的节点具有以下特征：

1. nodeType 等于 3；
2. nodeName 值为"#text"；
3. nodeValue 值为节点中包含的文本；
4. parentNode 值为 Element 对象；
5. 不支持子节点。

Text 节点中包含的文本可以通过 nodeValue 属性访问，也可以通过 data 属性访问，这两个属性包含相同的值

1. appendData(text)，向节点末尾添加文本 text；
2. deleteData(offset, count)，从位置 offset 开始删除 count 个字符；
3. insertData(offset, text)，在位置 offset 插入 text；
4. replaceData(offset, count, text)，用 text 替换从位置 offset 到 offset + count 的文本；
5. splitText(offset)，在位置 offset 将当前文本节点拆分为两个文本节点；
6. substringData(offset, count)，提取从位置 offset 到 offset + count 的文本。

```js
// 取得文本节点的引用
let textNode = div.firstChild; // 或 div.childNodes[0]
div.firstChild.nodeValue = "Some other message";

// 输出为"Some &lt;strong&gt;other&lt;/strong&gt; message" 
div.firstChild.nodeValue = "Some <strong>other</strong> message";
```

## 创建文本节点

document.createTextNode()可以用来创建新文本节点，它接收一个参数，即要插入节点的文本。

```js
let textNode = document.createTextNode("<strong>Hello</strong> world!");
```

添加了一段文本消息：

```js
let element = document.createElement("div"); 
element.className = "message"; 
let textNode = document.createTextNode("Hello world!"); 
element.appendChild(textNode); 
document.body.appendChild(element);
```

## 规范化文本节点

normalize()，是在 Node 类型中定义的（因此所有类型的节点上都有这个方法）

```js
let element = document.createElement("div"); 
element.className = "message"; 
let textNode = document.createTextNode("Hello world!"); 
element.appendChild(textNode); 
let anotherTextNode = document.createTextNode("Yippee!"); 
element.appendChild(anotherTextNode); 
document.body.appendChild(element); 
alert(element.childNodes.length); // 2 
element.normalize(); 
alert(element.childNodes.length); // 1 
alert(element.firstChild.nodeValue); // "Hello world!Yippee!"
```

## 拆分文本节点

splitText(),可以在指定的偏移位置拆分 nodeValue，将一个文本节点拆分成两个文本节点。

:::tip
新文本节点包含剩下的文本
:::

```js
let element = document.createElement("div"); 
element.className = "message"; 
let textNode = document.createTextNode("Hello world!"); 
element.appendChild(textNode); 
document.body.appendChild(element); 
let newNode = element.firstChild.splitText(5); 
alert(element.firstChild.nodeValue); // "Hello" 
alert(newNode.nodeValue); // " world!" 
alert(element.childNodes.length); // 2
```

## Comment 类型

DOM 中的注释通过 Comment 类型表示。Comment 类型的节点具有以下特征：

1. nodeType 等于 8；
2. nodeName 值为"#comment"；
3. nodeValue 值为注释的内容；
4. parentNode 值为 Document 或 Element 对象；
5. 不支持子节点。

访问它：

```js
<div id="myDiv"><!-- A comment --></div>
let div = document.getElementById("myDiv"); 
let comment = div.firstChild; 
alert(comment.data); // "A comment"
```

可以使用 document.createComment()方法创建注释节点，参数为注释文本

```js
let comment = document.createComment("A comment");
```

## CDATASection 类型

1. CDATASection 类型表示 XML 中特有的 CDATA 区块。
2. CDATASection 类型继承 Text 类型，因此拥有包括 splitText()在内的所有字符串操作方法。

CDATASection 类型的节点具有以下特征：

1. nodeType 等于 4；
2. nodeName 值为"#cdata-section"；
3. nodeValue 值为 CDATA 区块的内容；
4. parentNode 值为 Document 或 Element 对象；
5. 不支持子节点

CDATA 区块只在 XML 文档中有效

```js
<div id="myDiv"><![CDATA[This is some content.]]></div>
```

在真正的 XML 文档中，可以使用 document.createCDataSection()并传入节点内容来创建CDATA 区块。

## DocumentType 类型

DocumentType 类型的节点包含文档的文档类型（doctype）信息，具有以下特征：

1. nodeType 等于 10；
2. nodeName 值为文档类型的名称；
3. nodeValue 值为 null；
4. parentNode 值为 Document 对象；
5. 不支持子节点。

DocumentType 对象保存在 document.doctype 属性中

DOM Level 1 规定了DocumentType 对象的 3 个属性：name、entities 和 notations。

1. name 是文档类型的名称
2. entities 是这个文档类型描述的实体的 NamedNodeMap
3. notations 是这个文档类型描述的表示法的 NamedNodeMap

因为浏览器中的文档通常是 HTML 或 XHTML 文档类型，所以 entities 和notations 列表为空。

```js
<!DOCTYPE HTML PUBLIC "-// W3C// DTD HTML 4.01// EN" 
 "http:// www.w3.org/TR/html4/strict.dtd"> 
对于这个文档类型，name 属性的值是"html"：
alert(document.doctype.name); // "html"
```

## DocumentFragment 类型

DocumentFragment 类型是唯一一个在标记中没有对应表示的类型。

DocumentFragment 节点具有以下特征：
 
1. nodeType 等于 11；  
2. nodeName 值为"#document-fragment"；  
3. nodeValue 值为 null；  
4. parentNode 值为 null；  
5. 子节点可以是 Element、ProcessingInstruction、Comment、Text、CDATASection 或EntityReference。

创建文档片段：

```js
let fragment = document.createDocumentFragment();
```

可以通过 appendChild()或 insertBefore()方法将文档片段的内容添加到文档。

```js
let fragment = document.createDocumentFragment(); 
let ul = document.getElementById("myList"); 
for (let i = 0; i < 3; ++i) { 
 let li = document.createElement("li"); 
 li.appendChild(document.createTextNode(`Item ${i + 1}`)); 
 fragment.appendChild(li); 
} 
ul.appendChild(fragment);
```

## Attr 类型

1. 元素数据在 DOM 中通过 Attr 类型表示。
2. Attr 类型构造函数和原型在所有浏览器中都可以直接访问。

Attr 节点具有以下特征：

1. nodeType 等于 2；
2. nodeName 值为属性名；
3. nodeValue 值为属性值；
4. parentNode 值为 null；
5. 在 HTML 中不支持子节点
6. 在 XML 中子节点可以是 Text 或 EntityReference。

:::tip
Attr 节点很少直接被引用
:::

getAttribute()、removeAttribute()和 setAttribute()方法操作属性。

> Attr 对象上有 3 个属性：name、value 和 specified。

1. name 包含属性名（与 nodeName一样）
2. value 包含属性值（与 nodeValue 一样）
3. specified 是一个布尔值，表示属性使用的是默认值还是被指定的值。

可以使用 document.createAttribute()方法创建新的 Attr 节点，参数为属性名

```js
let attr = document.createAttribute("align"); 
attr.value = "left"; 
element.setAttributeNode(attr); 
alert(element.attributes["align"].value); // "left" 
alert(element.getAttributeNode("align").value); // "left" 
alert(element.getAttribute("align")); // "left"
```

## DOM 编程

通过 HTML 代码能实现的，也一样能通过 JavaScript 实现。

### 动态脚本

有两种方式通过`<script>`动态为网页添加脚本：引入外部文件和直接插入源代码。

```js
let script = document.createElement("script"); 
script.src = "foo.js"; 
document.body.appendChild(script);
```

抽象为一个函数:

```js
function loadScript(url) {
	let script = document.createElement("script");
	script.src = url;
	document.body.appendChild(script);
}
```

> 怎么能知道脚本什么时候加载完？这个问题并没有标准答案。

另一个动态插入 JavaScript 的方式是嵌入源代码

```js
let script = document.createElement("script"); 
script.appendChild(document.createTextNode("function sayHi(){alert('hi');}")); 
document.body.appendChild(script);
```

IE 对`<script>`元素做了特殊处理

```js
var script = document.createElement("script"); 
script.text = "function sayHi(){alert('hi');}"; 
document.body.appendChild(script);
```

兼容：

```js
var script = document.createElement("script"); 
var code = "function sayHi(){alert('hi');}"; 
try { 
 script.appendChild(document.createTextNode("code")); 
} catch (ex){ 
 script.text = "code"; 
} 
document.body.appendChild(script);
```

抽象出一个跨浏览器的函数：

```js
function loadScriptString(code){ 
 var script = document.createElement("script"); 
 script.type = "text/javascript"; 
 try { 
 script.appendChild(document.createTextNode(code)); 
 } catch (ex){ 
 script.text = code; 
 } 
 document.body.appendChild(script); 
}
```

## 动态样式

1. `<link>`元素用于包含 CSS 外部文件
2. `<style>`元素用于添加嵌入样式。

```js
<link rel="stylesheet" type="text/css" href="styles.css">
```

```js
let link = document.createElement("link"); 
link.rel = "stylesheet"; 
link.type = "text/css"; 
link.href = "styles.css"; 
let head = document.getElementsByTagName("head")[0]; 
head.appendChild(link);
```

通用函数：

```js
function loadStyles(url) {
	let link = document.creatElement("link");
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = url;
	let head = document.getElementsByTagName("head")[0];
	head.appendChild(link);
}
```

```js
let style = document.createElement("style"); 
style.type = "text/css"; 
style.appendChild(document.createTextNode("body{background-color:red}")); 
let head = document.getElementsByTagName("head")[0]; 
head.appendChild(style);
```

对于 IE，解决方案是访问元素的 styleSheet 属性，这个属性又有一个 cssText 属性，然后给这个属性添加 CSS 代码：

```js
let style = document.createElement("style"); 
style.type = "text/css"; 
try{ 
 style.appendChild(document.createTextNode("body{background-color:red}")); 
} catch (ex){ 
 style.styleSheet.cssText = "body{background-color:red}"; 
} 
let head = document.getElementsByTagName("head")[0]; 
head.appendChild(style);
```

通用函数：

```js
function loadStyleString(css){ 
 let style = document.createElement("style"); 
 style.type = "text/css"; 
 try{ 
 style.appendChild(document.createTextNode(css)); 
 } catch (ex){ 
 style.styleSheet.cssText = css; 
 } 
 let head = document.getElementsByTagName("head")[0]; 
 head.appendChild(style); 
}
```

:::tip
注意 对于 IE，要小心使用 styleSheet.cssText。如果重用同一个`<style>`元素并设
置该属性超过一次，则可能导致浏览器崩溃。同样，将 cssText 设置为空字符串也可能
导致浏览器崩溃。
:::

## 操作表格

创建`<table>`元素,包括表行、表元、表题，等等。

创建以下 HTML 表格：

```js
<table border="1" width="100%"> 
 <tbody> 
	 <tr> 
		 <td>Cell 1,1</td> 
		 <td>Cell 2,1</td> 
	 </tr> 
	 <tr> 
		 <td>Cell 1,2</td> 
		 <td>Cell 2,2</td> 
	 </tr> 
 </tbody> 
</table>
```

```js
// 创建表格
let table = document.createElement("table"); 
table.border = 1; 
table.width = "100%"; 
// 创建表体
let tbody = document.createElement("tbody"); 
table.appendChild(tbody); 
// 创建第一行
let row1 = document.createElement("tr"); 
tbody.appendChild(row1); 
let cell1_1 = document.createElement("td"); 
cell1_1.appendChild(document.createTextNode("Cell 1,1")); 
row1.appendChild(cell1_1); 
let cell2_1 = document.createElement("td"); 
cell2_1.appendChild(document.createTextNode("Cell 2,1")); 
row1.appendChild(cell2_1); 
// 创建第二行
let row2 = document.createElement("tr"); 
tbody.appendChild(row2); 
let cell1_2 = document.createElement("td"); 
cell1_2.appendChild(document.createTextNode("Cell 1,2")); 
row2.appendChild(cell1_2); 
let cell2_2= document.createElement("td"); 
cell2_2.appendChild(document.createTextNode("Cell 2,2")); 
row2.appendChild(cell2_2); 
// 把表格添加到文档主体
document.body.appendChild(table);
```

`<table>`元素添加了以下属性和方法：

- caption，指向`<caption>`元素的指针（如果存在）；
- tBodies，包含`<tbody>`元素的 HTMLCollection；  
- tFoot，指向`<tfoot>`元素（如果存在）；
- tHead，指向`<thead>`元素（如果存在）；
- rows，包含表示所有行的 HTMLCollection；  
- createTHead()，创建`<thead>`元素，放到表格中，返回引用；
- createTFoot()，创建`<tfoot>`元素，放到表格中，返回引用；
- createCaption()，创建`<caption>`元素，放到表格中，返回引用；
- deleteTHead()，删除`<thead>`元素；
- deleteTFoot()，删除`<tfoot>`元素；
- deleteCaption()，删除`<caption>`元素；
- deleteRow(pos)，删除给定位置的行；
- insertRow(pos)，在行集合中给定位置插入一行。


`<tbody>`元素添加了以下属性和方法：
 
- rows，包含`<tbody>`元素中所有行的 HTMLCollection；
- deleteRow(pos)，删除给定位置的行；
- insertRow(pos)，在行集合中给定位置插入一行，返回该行的引用。
- `<tr>`元素添加了以下属性和方法：
- cells，包含`<tr>`元素所有表元的 HTMLCollection；  
- deleteCell(pos)，删除给定位置的表元；
- insertCell(pos)，在表元集合给定位置插入一个表元，返回该表元的引用





























