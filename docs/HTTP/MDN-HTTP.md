> 点击勘误[issues](https://github.com/webVueBlog/learn-web/issues)，哪吒感谢大家的阅读

超文本传输​​协议（HTTP）是一个用于传输超媒体文档（例如 HTML）的应用层协议。它是为 Web 浏览器与 Web 服务器之间的通信而设计的，但也可以用于其他目的。HTTP 遵循经典的客户端-服务端模型，客户端打开一个连接以发出请求，然后等待直到收到服务器端响应。HTTP 是无状态协议，这意味着服务器不会在两个请求之间保留任何数据（状态）。尽管通常基于 TCP/IP 层，但它可以在任何可靠的传输层上使用，也就是说，该协议不会像 UDP 那样静默的丢失消息。RUDP——作为 UDP 的可靠化升级版本——是一种合适的替代选择。

## HTTP 概述

介绍了客户端-服务器端协议的基本特征：它能够做什么以及它的设计意图。

## HTTP 缓存

缓存对高速 Web 站点来说是非常之重要的。这篇文章阐述了不同种类的缓存以及如何配置 HTTP Headers 来控制它们。

## HTTP Cookie

RFC 6265 定义了 cookie 的工作方式。在处理 HTTP 请求时，服务器可以在 HTTP 响应头中通过HTTP Headers Set-Cookie 为客户端设置  cookie。然后，对于同一服务器发起的每一个请求，客户端都会在 HTTP 请求头中以字段 Cookie 的形式将 cookie 的值发送过去。也可以将 cookie 设置为在特定日期过期，或限制为特定的域和路径。

## 跨域资源共享（CORS）

跨站点 HTTP 请求就是从另一个域名，而不是资源所在的域名发起的 HTTP 请求。举例来说，在域名 A (http://domaina.example/) 的 HTML 页面上使用 img 元素 (<img src="http://domainb.foo/image.jpg">) 来请求域名 B (http://domainb.foo/) 上的图片资源。这在当今的 Web 页面上是很常见的 —— 加载跨站点资源，包括 CSS 样式表，图片，脚本和其他资源。CORS 允许 Web 开发人员控制其站点对跨站点请求的反应。

## HTTP 的演变

简单描述了从早期版本的 HTTP 到现代 HTTP/2，新兴的 HTTP/3 以及未来版本的 HTTP 这个过程中发生的变更。

## Mozilla Web 安全准则

一系列用于帮助运营团队创建安全的 Web 应用程序的技巧。

## HTTP 消息

描述了 HTTP/1.x 和 HTTP/2 中不同种类消息的类型和结构。

## 典型的 HTTP 会话

展现并解释了一个常见 HTTP 会话的流程。

## HTTP/1.x 中的连接管理

描述了在 HTTP/1.x 中的三种连接管理模型，以及它们的优点和缺点。

## HTTP 头

HTTP 消息头用于描述资源或服务器或客户端的行为。可以使用 `X-` 前缀添加自定义专有头。其他的可以在 `IANA registry` 中找到，其原始定义在 `RFC 4229`。`IANA` 同时也维护着一份 `registry of proposed new HTTP message headers`。

## HTTP 请求方式

可以使用 `HTTP`: `GET`，`POST` 方式来完成不同操作，或是一些不太常见的请求方式，像是： `OPTIONS`，`DELETE` 和 `TRACE`。

## HTTP 状态码

`HTTP` 状态码用来表示特定的 `HTTP` 请求是否已成功完成。响应分为五类：消息响应，成功响应，重定向，客户端错误和服务器错误。

## CSP 指令

`Content-Security-Policy` 响应报头字段允许网站管理员控制页面上哪些资源能够被用户代理程序加载。除了少数例外，此策略主要涉及指定服务器来源和脚本终端。

## Firefox 开发者工具

网络监视器

## Mozilla Observatory

一个旨在帮助开发人员，系统管理员和安全专业人员安全地配置其站点的项目。

## RedBot

用于检查与缓存相关的 HTTP 头的工具。

## 浏览器的工作原理

一篇非常全面的关于浏览器内部实现与通过 HTTP 协议的请求流的文章。可以说是所有 Web 开发者的必读内容。

- [HTTP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)