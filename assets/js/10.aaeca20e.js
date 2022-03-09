(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{562:function(s,t,a){s.exports=a.p+"assets/img/20220117110923.dc61405a.jpg"},563:function(s,t,a){s.exports=a.p+"assets/img/20220117111226.ffa83c34.jpg"},564:function(s,t,a){s.exports=a.p+"assets/img/20220117111446.4e3f0aca.jpg"},713:function(s,t,a){"use strict";a.r(t);var r=a(7),n=Object(r.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("blockquote",[r("p",[s._v("点击勘误"),r("a",{attrs:{href:"https://github.com/webVueBlog/learn-web/issues",target:"_blank",rel:"noopener noreferrer"}},[s._v("issues"),r("OutboundLink")],1),s._v("，哪吒感谢大家的阅读")])]),s._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#ast-的生成"}},[s._v("AST 的生成")])]),r("li",[r("a",{attrs:{href:"#词法分析-lexical-analysis"}},[s._v("词法分析 (Lexical Analysis)")])]),r("li",[r("a",{attrs:{href:"#语法分析-syntactic-analysis"}},[s._v("语法分析 (Syntactic Analysis)")])]),r("li",[r("a",{attrs:{href:"#实践"}},[s._v("实践")])])])]),r("p"),s._v(" "),r("p",[s._v("AST 是 Abstract Syntax Tree 的简称，是前端工程化绕不过的一个名词。它涉及到工程化诸多环节的应用，比如:")]),s._v(" "),r("ol",[r("li",[s._v("如何将 Typescript 转化为 Javascript (typescript)")]),s._v(" "),r("li",[s._v("如何将 SASS/LESS 转化为 CSS (sass/less)")]),s._v(" "),r("li",[s._v("如何将 ES6+ 转化为 ES5 (babel)")]),s._v(" "),r("li",[s._v("如何将 Javascript 代码进行格式化 (eslint/prettier)")]),s._v(" "),r("li",[s._v("如何识别 React 项目中的 JSX (babel)")]),s._v(" "),r("li",[s._v("GraphQL、MDX、Vue SFC 等等")])]),s._v(" "),r("p",[s._v("而在语言转换的过程中，实质上就是对其 AST 的操作，核心步骤就是 AST 三步走")]),s._v(" "),r("ol",[r("li",[s._v("Code -> AST (Parse)")]),s._v(" "),r("li",[s._v("AST -> AST (Transform)")]),s._v(" "),r("li",[s._v("AST -> Code (Generate)")])]),s._v(" "),r("img",{staticStyle:{display:"flex",margin:"auto",width:"100%"},attrs:{src:a(562)}}),s._v(" "),r("p",[s._v("以下是一段代码，及其对应的 AST")]),s._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Code")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" a "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// AST")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Program"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"start"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"end"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"body"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"VariableDeclaration"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"start"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"end"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"declarations"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"VariableDeclarator"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"start"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"end"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"id"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Identifier"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"start"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"end"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"name"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"init"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Literal"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"start"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"end"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"value"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"raw"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"kind"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"const"')]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"sourceType"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br"),r("span",{staticClass:"line-number"},[s._v("14")]),r("br"),r("span",{staticClass:"line-number"},[s._v("15")]),r("br"),r("span",{staticClass:"line-number"},[s._v("16")]),r("br"),r("span",{staticClass:"line-number"},[s._v("17")]),r("br"),r("span",{staticClass:"line-number"},[s._v("18")]),r("br"),r("span",{staticClass:"line-number"},[s._v("19")]),r("br"),r("span",{staticClass:"line-number"},[s._v("20")]),r("br"),r("span",{staticClass:"line-number"},[s._v("21")]),r("br"),r("span",{staticClass:"line-number"},[s._v("22")]),r("br"),r("span",{staticClass:"line-number"},[s._v("23")]),r("br"),r("span",{staticClass:"line-number"},[s._v("24")]),r("br"),r("span",{staticClass:"line-number"},[s._v("25")]),r("br"),r("span",{staticClass:"line-number"},[s._v("26")]),r("br"),r("span",{staticClass:"line-number"},[s._v("27")]),r("br"),r("span",{staticClass:"line-number"},[s._v("28")]),r("br"),r("span",{staticClass:"line-number"},[s._v("29")]),r("br"),r("span",{staticClass:"line-number"},[s._v("30")]),r("br"),r("span",{staticClass:"line-number"},[s._v("31")]),r("br"),r("span",{staticClass:"line-number"},[s._v("32")]),r("br"),r("span",{staticClass:"line-number"},[s._v("33")]),r("br"),r("span",{staticClass:"line-number"},[s._v("34")]),r("br"),r("span",{staticClass:"line-number"},[s._v("35")]),r("br"),r("span",{staticClass:"line-number"},[s._v("36")]),r("br"),r("span",{staticClass:"line-number"},[s._v("37")]),r("br"),r("span",{staticClass:"line-number"},[s._v("38")]),r("br")])]),r("p",[s._v("不同的语言拥有不同的解析器，比如 Javascript 的解析器和 CSS 的解析器就完全不同。")]),s._v(" "),r("p",[s._v("对相同的语言，也存在诸多的解析器，也就会生成多种 AST，如 babel 与 espree。")]),s._v(" "),r("p",[s._v("在 AST Explorer 中，列举了诸多语言的解析器(Parser)，及转化器(Transformer)。")]),s._v(" "),r("img",{staticStyle:{display:"flex",margin:"auto",width:"100%"},attrs:{src:a(563)}}),s._v(" "),r("h2",{attrs:{id:"ast-的生成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ast-的生成"}},[s._v("#")]),s._v(" AST 的生成")]),s._v(" "),r("p",[s._v("AST 的生成这一步骤被称为「解析(Parser)」，而该步骤也有两个阶段: 词法分析(Lexical Analysis)和语法分析(Syntactic Analysis)")]),s._v(" "),r("h2",{attrs:{id:"词法分析-lexical-analysis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#词法分析-lexical-analysis"}},[s._v("#")]),s._v(" 词法分析 (Lexical Analysis)")]),s._v(" "),r("p",[s._v("词法分析用以将代码转化为 Token 流，维护一个关于 Token 的数组")]),s._v(" "),r("img",{staticStyle:{display:"flex",margin:"auto",width:"100%"},attrs:{src:a(564)}}),s._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Code")]),s._v("\na "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Token")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("type")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("value")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("start")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("end")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("loc")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("type")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("value")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"="')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("start")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("end")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("loc")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("type")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("value")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("start")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("end")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("loc")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br")])]),r("p",[s._v("词法分析后的 Token 流也有诸多应用，如:")]),s._v(" "),r("ol",[r("li",[s._v("代码检查，如 eslint 判断是否以分号结尾，判断是否含有分号的 token")]),s._v(" "),r("li",[s._v("语法高亮，如 highlight/prism 使之代码高亮")]),s._v(" "),r("li",[s._v("模板语法，如 ejs 等模板也离不开")])]),s._v(" "),r("h2",{attrs:{id:"语法分析-syntactic-analysis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法分析-syntactic-analysis"}},[s._v("#")]),s._v(" 语法分析 (Syntactic Analysis)")]),s._v(" "),r("p",[s._v("语法分析将 Token 流转化为结构化的 AST，方便操作")]),s._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Program"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"start"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"end"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"body"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ExpressionStatement"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"start"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"end"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"expression"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AssignmentExpression"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"start"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"end"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"operator"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"="')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"left"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Identifier"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"start"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"end"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"name"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"right"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"type"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Literal"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"start"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"end"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"value"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"raw"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"sourceType"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br"),r("span",{staticClass:"line-number"},[s._v("14")]),r("br"),r("span",{staticClass:"line-number"},[s._v("15")]),r("br"),r("span",{staticClass:"line-number"},[s._v("16")]),r("br"),r("span",{staticClass:"line-number"},[s._v("17")]),r("br"),r("span",{staticClass:"line-number"},[s._v("18")]),r("br"),r("span",{staticClass:"line-number"},[s._v("19")]),r("br"),r("span",{staticClass:"line-number"},[s._v("20")]),r("br"),r("span",{staticClass:"line-number"},[s._v("21")]),r("br"),r("span",{staticClass:"line-number"},[s._v("22")]),r("br"),r("span",{staticClass:"line-number"},[s._v("23")]),r("br"),r("span",{staticClass:"line-number"},[s._v("24")]),r("br"),r("span",{staticClass:"line-number"},[s._v("25")]),r("br"),r("span",{staticClass:"line-number"},[s._v("26")]),r("br"),r("span",{staticClass:"line-number"},[s._v("27")]),r("br"),r("span",{staticClass:"line-number"},[s._v("28")]),r("br"),r("span",{staticClass:"line-number"},[s._v("29")]),r("br"),r("span",{staticClass:"line-number"},[s._v("30")]),r("br"),r("span",{staticClass:"line-number"},[s._v("31")]),r("br"),r("span",{staticClass:"line-number"},[s._v("32")]),r("br")])]),r("h2",{attrs:{id:"实践"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实践"}},[s._v("#")]),s._v(" 实践")]),s._v(" "),r("p",[s._v("可通过自己写一个解析器，将语言 (DSL) 解析为 AST 进行练手，以下两个示例是不错的选择")]),s._v(" "),r("ol",[r("li",[s._v("解析简单的 HTML 为 AST")]),s._v(" "),r("li",[s._v("解析 Marktodwn List 为 AST")])])])}),[],!1,null,null,null);t.default=n.exports}}]);