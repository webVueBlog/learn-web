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



























