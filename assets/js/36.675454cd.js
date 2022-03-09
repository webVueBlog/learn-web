(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{618:function(t,a,r){"use strict";r.r(a);var e=r(7),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("blockquote",[r("p",[t._v("点击勘误"),r("a",{attrs:{href:"https://github.com/webVueBlog/learn-web/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("issues"),r("OutboundLink")],1),t._v("，哪吒感谢大家的阅读")])]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#http-概述"}},[t._v("HTTP 概述")])]),r("li",[r("a",{attrs:{href:"#http-缓存"}},[t._v("HTTP 缓存")])]),r("li",[r("a",{attrs:{href:"#http-cookie"}},[t._v("HTTP Cookie")])]),r("li",[r("a",{attrs:{href:"#跨域资源共享-cors"}},[t._v("跨域资源共享（CORS）")])]),r("li",[r("a",{attrs:{href:"#http-的演变"}},[t._v("HTTP 的演变")])]),r("li",[r("a",{attrs:{href:"#mozilla-web-安全准则"}},[t._v("Mozilla Web 安全准则")])]),r("li",[r("a",{attrs:{href:"#http-消息"}},[t._v("HTTP 消息")])]),r("li",[r("a",{attrs:{href:"#典型的-http-会话"}},[t._v("典型的 HTTP 会话")])]),r("li",[r("a",{attrs:{href:"#http-1-x-中的连接管理"}},[t._v("HTTP/1.x 中的连接管理")])]),r("li",[r("a",{attrs:{href:"#http-头"}},[t._v("HTTP 头")])]),r("li",[r("a",{attrs:{href:"#http-请求方式"}},[t._v("HTTP 请求方式")])]),r("li",[r("a",{attrs:{href:"#http-状态码"}},[t._v("HTTP 状态码")])]),r("li",[r("a",{attrs:{href:"#csp-指令"}},[t._v("CSP 指令")])]),r("li",[r("a",{attrs:{href:"#firefox-开发者工具"}},[t._v("Firefox 开发者工具")])]),r("li",[r("a",{attrs:{href:"#mozilla-observatory"}},[t._v("Mozilla Observatory")])]),r("li",[r("a",{attrs:{href:"#redbot"}},[t._v("RedBot")])]),r("li",[r("a",{attrs:{href:"#浏览器的工作原理"}},[t._v("浏览器的工作原理")])])])]),r("p"),t._v(" "),r("p",[t._v("超文本传输​​协议（HTTP）是一个用于传输超媒体文档（例如 HTML）的应用层协议。它是为 Web 浏览器与 Web 服务器之间的通信而设计的，但也可以用于其他目的。HTTP 遵循经典的客户端-服务端模型，客户端打开一个连接以发出请求，然后等待直到收到服务器端响应。HTTP 是无状态协议，这意味着服务器不会在两个请求之间保留任何数据（状态）。尽管通常基于 TCP/IP 层，但它可以在任何可靠的传输层上使用，也就是说，该协议不会像 UDP 那样静默的丢失消息。RUDP——作为 UDP 的可靠化升级版本——是一种合适的替代选择。")]),t._v(" "),r("h2",{attrs:{id:"http-概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-概述"}},[t._v("#")]),t._v(" HTTP 概述")]),t._v(" "),r("p",[t._v("介绍了客户端-服务器端协议的基本特征：它能够做什么以及它的设计意图。")]),t._v(" "),r("h2",{attrs:{id:"http-缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存"}},[t._v("#")]),t._v(" HTTP 缓存")]),t._v(" "),r("p",[t._v("缓存对高速 Web 站点来说是非常之重要的。这篇文章阐述了不同种类的缓存以及如何配置 HTTP Headers 来控制它们。")]),t._v(" "),r("h2",{attrs:{id:"http-cookie"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-cookie"}},[t._v("#")]),t._v(" HTTP Cookie")]),t._v(" "),r("p",[t._v("RFC 6265 定义了 cookie 的工作方式。在处理 HTTP 请求时，服务器可以在 HTTP 响应头中通过HTTP Headers Set-Cookie 为客户端设置  cookie。然后，对于同一服务器发起的每一个请求，客户端都会在 HTTP 请求头中以字段 Cookie 的形式将 cookie 的值发送过去。也可以将 cookie 设置为在特定日期过期，或限制为特定的域和路径。")]),t._v(" "),r("h2",{attrs:{id:"跨域资源共享-cors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#跨域资源共享-cors"}},[t._v("#")]),t._v(" 跨域资源共享（CORS）")]),t._v(" "),r("p",[t._v("跨站点 HTTP 请求就是从另一个域名，而不是资源所在的域名发起的 HTTP 请求。举例来说，在域名 A (http://domaina.example/) 的 HTML 页面上使用 img 元素 ("),r("img",{attrs:{src:"http://domainb.foo/image.jpg"}}),t._v(") 来请求域名 B (http://domainb.foo/) 上的图片资源。这在当今的 Web 页面上是很常见的 —— 加载跨站点资源，包括 CSS 样式表，图片，脚本和其他资源。CORS 允许 Web 开发人员控制其站点对跨站点请求的反应。")]),t._v(" "),r("h2",{attrs:{id:"http-的演变"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-的演变"}},[t._v("#")]),t._v(" HTTP 的演变")]),t._v(" "),r("p",[t._v("简单描述了从早期版本的 HTTP 到现代 HTTP/2，新兴的 HTTP/3 以及未来版本的 HTTP 这个过程中发生的变更。")]),t._v(" "),r("h2",{attrs:{id:"mozilla-web-安全准则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mozilla-web-安全准则"}},[t._v("#")]),t._v(" Mozilla Web 安全准则")]),t._v(" "),r("p",[t._v("一系列用于帮助运营团队创建安全的 Web 应用程序的技巧。")]),t._v(" "),r("h2",{attrs:{id:"http-消息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-消息"}},[t._v("#")]),t._v(" HTTP 消息")]),t._v(" "),r("p",[t._v("描述了 HTTP/1.x 和 HTTP/2 中不同种类消息的类型和结构。")]),t._v(" "),r("h2",{attrs:{id:"典型的-http-会话"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#典型的-http-会话"}},[t._v("#")]),t._v(" 典型的 HTTP 会话")]),t._v(" "),r("p",[t._v("展现并解释了一个常见 HTTP 会话的流程。")]),t._v(" "),r("h2",{attrs:{id:"http-1-x-中的连接管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-1-x-中的连接管理"}},[t._v("#")]),t._v(" HTTP/1.x 中的连接管理")]),t._v(" "),r("p",[t._v("描述了在 HTTP/1.x 中的三种连接管理模型，以及它们的优点和缺点。")]),t._v(" "),r("h2",{attrs:{id:"http-头"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-头"}},[t._v("#")]),t._v(" HTTP 头")]),t._v(" "),r("p",[t._v("HTTP 消息头用于描述资源或服务器或客户端的行为。可以使用 "),r("code",[t._v("X-")]),t._v(" 前缀添加自定义专有头。其他的可以在 "),r("code",[t._v("IANA registry")]),t._v(" 中找到，其原始定义在 "),r("code",[t._v("RFC 4229")]),t._v("。"),r("code",[t._v("IANA")]),t._v(" 同时也维护着一份 "),r("code",[t._v("registry of proposed new HTTP message headers")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"http-请求方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-请求方式"}},[t._v("#")]),t._v(" HTTP 请求方式")]),t._v(" "),r("p",[t._v("可以使用 "),r("code",[t._v("HTTP")]),t._v(": "),r("code",[t._v("GET")]),t._v("，"),r("code",[t._v("POST")]),t._v(" 方式来完成不同操作，或是一些不太常见的请求方式，像是： "),r("code",[t._v("OPTIONS")]),t._v("，"),r("code",[t._v("DELETE")]),t._v(" 和 "),r("code",[t._v("TRACE")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"http-状态码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-状态码"}},[t._v("#")]),t._v(" HTTP 状态码")]),t._v(" "),r("p",[r("code",[t._v("HTTP")]),t._v(" 状态码用来表示特定的 "),r("code",[t._v("HTTP")]),t._v(" 请求是否已成功完成。响应分为五类：消息响应，成功响应，重定向，客户端错误和服务器错误。")]),t._v(" "),r("h2",{attrs:{id:"csp-指令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#csp-指令"}},[t._v("#")]),t._v(" CSP 指令")]),t._v(" "),r("p",[r("code",[t._v("Content-Security-Policy")]),t._v(" 响应报头字段允许网站管理员控制页面上哪些资源能够被用户代理程序加载。除了少数例外，此策略主要涉及指定服务器来源和脚本终端。")]),t._v(" "),r("h2",{attrs:{id:"firefox-开发者工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#firefox-开发者工具"}},[t._v("#")]),t._v(" Firefox 开发者工具")]),t._v(" "),r("p",[t._v("网络监视器")]),t._v(" "),r("h2",{attrs:{id:"mozilla-observatory"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mozilla-observatory"}},[t._v("#")]),t._v(" Mozilla Observatory")]),t._v(" "),r("p",[t._v("一个旨在帮助开发人员，系统管理员和安全专业人员安全地配置其站点的项目。")]),t._v(" "),r("h2",{attrs:{id:"redbot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redbot"}},[t._v("#")]),t._v(" RedBot")]),t._v(" "),r("p",[t._v("用于检查与缓存相关的 HTTP 头的工具。")]),t._v(" "),r("h2",{attrs:{id:"浏览器的工作原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的工作原理"}},[t._v("#")]),t._v(" 浏览器的工作原理")]),t._v(" "),r("p",[t._v("一篇非常全面的关于浏览器内部实现与通过 HTTP 协议的请求流的文章。可以说是所有 Web 开发者的必读内容。")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=s.exports}}]);