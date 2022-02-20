module.exports = {
    title: '深入理解前端系列',
    description: '哪吒的深入理解前端系列',
    base: '/learn-web/',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.jpg'
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }]
    ],
    plugins: [
        ['social-share'],
        ['@vuepress/back-to-top'],
        [
            'reading-progress'
        ],
        ['last-reading', {
            popupConfig: {
                message: '返回之前位置',
                buttonText: '确定'
            },
        }],
        ['@vuepress/nprogress'],
        [
            'vuepress-plugin-typescript',
            {
                tsLoaderOptions: {
                    // ts-loader 的所有配置项
                },
            },
        ],
        [
            'dynamic-title',
            {
                showIcon: '/favicon.ico',
                showText: '(/≧▽≦/)咦！又好了！',
                hideIcon: '/failure.ico',
                hideText: '(●—●)喔哟，崩溃啦！',
                recoverTime: 2000,
            },
        ],
        ['vuepress-plugin-code-copy', true]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        repo: 'https://github.com/webVueBlog/learn-web',
        repoLabel: 'Github',
        editLinks: true,
        editLinkText: '编辑此页',
        lastUpdated: '上次更新',
        nav: [{
                text: 'HTML',
                link: '/HTML/'
            },
            {
                text: 'CSS',
                link: '/CSS/'
            },
            {
                text: 'JavaScript',
                link: '/JavaScript/'
            },
            {
                text: 'HTTP',
                link: '/HTTP/'
            },
            {
                text: '工程化',
                link: '/front-end-engineering/'
            },
            {
                text: '浏览器',
                link: '/browser/'
            },
            {
                text: '大前端',
                items: [{
                    text: '正则表达式',
                    link: '/regular-expression/'
                }, {
                    text: '编程题',
                    link: '/Programming/'
                }, {
                    text: 'Node',
                    link: '/Node/'
                }, {
                    text: 'Vue',
                    link: '/Vue/'
                }, {
                    text: 'React',
                    link: '/React/'
                }, ]
            },
            {
                text: '实践',
                items: [{
                    text: 'html-css-js实践',
                    items: [{
                        text: 'html-css-js实践',
                        link: '/html-css-js-coding/'
                    }, ]
                }, {
                    text: '实践操作',
                    items: [{
                        text: '实践操作',
                        link: '/coding/'
                    }, ]
                }, ]
            },
            {
                text: '书籍',
                items: [{
                    text: 'JavaScript书籍',
                    items: [{
                        text: 'JavaScript高级程序设计（第4版）',
                        link: '/JavaScript-advanced-programming/'
                    }, ]
                }]
            },
            {
                text: '其他',
                items: [{
                    text: '进阶',
                    items: [{
                            text: 'APIs',
                            link: '/APIs/'
                        },
                        {
                            text: 'Browser-Extensions',
                            link: '/Browser-Extensions/'
                        },
                        {
                            text: 'Graphics',
                            link: '/Graphics/'
                        },
                    ]
                }, {
                    text: '高阶',
                    items: [{
                        text: '安全系列',
                        link: '/safety/'
                    }, {
                        text: '性能系列',
                        link: '/Performance/'
                    }, ]
                }, {
                    text: '资深',
                    items: [{
                        text: '数据结构系列',
                        link: '/DataStructure/'
                    }, {
                        text: '算法系列',
                        link: '/ALG/'
                    }, ]
                }, {
                    text: '推荐',
                    items: [{
                        text: 'learn-webpack',
                        link: 'https://learn-docs.github.io/learn-webpack/'
                    }, {
                        text: 'learn-React',
                        link: 'https://learn-docs.github.io/learn-React/'
                    }, {
                        text: 'learn-TypeScript',
                        link: 'https://learn-docs.github.io/learn-TypeScript/'
                    }, {
                        text: '1024bibi.com bolg',
                        link: 'https://1024bibi.com/'
                    }, {
                        text: 'vue-docs',
                        link: 'https://learn-docs.github.io/vue-docs/'
                    }, ]
                }]
            }
        ],
        sidebar: {
            '/HTML/': [{
                title: 'HTML',
                collapsable: true,
                path: '/HTML/',
                children: [{
                    title: 'HTML基础',
                    path: 'HTML基础'
                }, ]
            }],
            '/CSS/': [{
                title: 'CSS',
                collapsable: true,
                path: '/CSS/',
                children: [{
                    title: '盒子模型',
                    path: '盒子模型'
                }, {
                    title: 'CSS选择器',
                    path: 'CSS选择器'
                }, ]
            }],
            '/JavaScript/': [{
                title: 'JavaScript',
                collapsable: true,
                path: '/JavaScript/',
                children: [{
                        title: '对象',
                        path: '对象'
                    }, {
                        title: '函数',
                        path: '函数'
                    }, {
                        title: '数组',
                        path: '数组'
                    }, {
                        title: '类型',
                        path: '类型'
                    }, {
                        title: 'eval-undefined-null-主动分号插入-setTimeout和setInterval',
                        path: 'eval-undefined-null-主动分号插入-setTimeout和setInterval'
                    }, {
                        title: '函数-可复用代码块',
                        path: '函数-可复用代码块'
                    },
                    {
                        title: '创建您自己的函数',
                        path: '创建您自己的函数'
                    },
                    {
                        title: '对象原型',
                        path: '对象原型'
                    },
                    {
                        title: '原型链',
                        path: '原型链'
                    },
                    {
                        title: '词法作用域和动态作用域',
                        path: '词法作用域和动态作用域'
                    },
                    {
                        title: '45道Promise',
                        path: '45道Promise'
                    },
                    {
                        title: '深浅拷贝',
                        path: '深浅拷贝'
                    },
                    {
                        title: '继承',
                        path: '继承'
                    },
                    {
                        title: '执行上下文栈',
                        path: '执行上下文栈'
                    },
                    {
                        title: '变量对象',
                        path: '变量对象'
                    },
                    {
                        title: '作用域',
                        path: '作用域'
                    },
                    {
                        title: '防抖',
                        path: '防抖'
                    },
                    {
                        title: '节流',
                        path: '节流'
                    },
                    {
                        title: '40道this',
                        path: '40道this'
                    },
                    {
                        title: '执行上下文',
                        path: '执行上下文'
                    },
                    {
                        title: '闭包',
                        path: '闭包'
                    },
                    {
                        title: '立即执行函数',
                        path: '立即执行函数'
                    },
                    {
                        title: '浅谈instanceof和typeof的实现原理',
                        path: '浅谈instanceof和typeof的实现原理'
                    },
                    {
                        title: 'bind的实现',
                        path: 'bind的实现'
                    },
                ]
            }],
            '/HTTP/': [{
                title: 'HTTP',
                collapsable: true,
                path: '/HTTP/',
                children: [{
                    title: 'MDN-HTTP',
                    path: 'MDN-HTTP'
                }, ]
            }],
            '/front-end-engineering/': [{
                title: '工程化',
                collapsable: true,
                path: '/front-end-engineering/',
                children: [{
                    title: '三分钟了解AST',
                    path: '三分钟了解AST'
                }, ]
            }],
            '/browser/': [{
                title: '浏览器',
                collapsable: true,
                path: '/browser/',
                children: [{
                    title: '浏览器解析渲染页面过程',
                    path: '浏览器解析渲染页面过程'
                }, ]
            }],
            '/regular-expression/': [{
                title: '正则表达式',
                collapsable: true,
                path: '/regular-expression/',
                children: [{
                    title: '正则表达式',
                    path: '正则表达式'
                }, ]
            }],
            '/Programming/': [{
                title: '编程题',
                collapsable: true,
                path: '/Programming/',
            }],
            '/Node/': [{
                title: 'Node',
                collapsable: true,
                path: '/Node/',
            }],
            '/Vue/': [{
                title: 'Vue',
                collapsable: true,
                path: '/Vue/',
                children: [{
                    title: 'vue-ts项目中PropSync的用法',
                    path: 'vue-ts项目中PropSync的用法'
                }, {
                    title: 'vue-ts项目中Prop的用法',
                    path: 'vue-ts项目中Prop的用法'
                }, {
                    title: 'vue-ts项目中watch的用法',
                    path: 'vue-ts项目中watch的用法'
                }, {
                    title: 'vue-ts项目中Emit的用法',
                    path: 'vue-ts项目中Emit的用法'
                }, {
                    title: 'vue-ts项目中Model的用法',
                    path: 'vue-ts项目中Model的用法'
                }, {
                    title: '对于MVVM的理解',
                    path: '对于MVVM的理解'
                }, {
                    title: 'vue篇',
                    path: 'vue篇'
                }]
            }],
            '/React/': [{
                title: 'React',
                collapsable: true,
                path: '/React/',
            }],
            '/html-css-js-coding/': [{
                title: 'html-css-js实践',
                collapsable: true,
                path: '/html-css-js-coding/',
                children: [{
                    title: '新年快乐-来一个CSS文字特效',
                    path: '新年快乐-来一个CSS文字特效'
                }, {
                    title: '实现水平垂直居中最便捷的方法',
                    path: '实现水平垂直居中最便捷的方法'
                }, ]
            }],
            '/coding/': [{
                title: '实践操作',
                collapsable: true,
                path: '/coding/',
                children: [{
                    title: '实现图片的懒加载',
                    path: '实现图片的懒加载'
                }, {
                    title: '浏览器中实现剪切板复制内容的功能',
                    path: '浏览器中实现剪切板复制内容的功能'
                }, {
                    title: '同一个ip下的多个端口下的cookie是共享的',
                    path: '同一个ip下的多个端口下的cookie是共享的'
                }, {
                    title: 'textarea实现禁止拉伸',
                    path: 'textarea实现禁止拉伸'
                }, {
                    title: '实现大文件上传和断点续传',
                    path: '实现大文件上传和断点续传'
                }, {
                    title: '切片上传和断点续传',
                    path: '切片上传和断点续传'
                }, ]
            }],
            '/JavaScript-advanced-programming/': [{
                title: 'JavaScript高级程序设计（第4版）',
                collapsable: true,
                path: '/JavaScript-advanced-programming/',
                children: [{
                    title: '1章-什么是JavaScript',
                    path: '1章-什么是JavaScript'
                }, {
                    title: '2章-HTML中的JavaScript',
                    path: '2章-HTML中的JavaScript'
                }, {
                    title: '3章-语言基础',
                    path: '3章-语言基础'
                }, {
                    title: '4章-变量与作用域与内存',
                    path: '4章-变量与作用域与内存'
                }, {
                    title: '5章-基本引用类型',
                    path: '5章-基本引用类型'
                }, {
                    title: '6章-集合引用类型',
                    path: '6章-集合引用类型'
                }, {
                    title: '7章-迭代器与生成器',
                    path: '7章-迭代器与生成器'
                }, {
                    title: '8章-对象与类与面向对象编程',
                    path: '8章-对象与类与面向对象编程'
                }, {
                    title: '9章-代理与反射',
                    path: '9章-代理与反射'
                }, {
                    title: '10章-函数',
                    path: '10章-函数'
                }, {
                    title: '11章-期约与异步函数',
                    path: '11章-期约与异步函数'
                }, {
                    title: '12章-BOM',
                    path: '12章-BOM'
                }, {
                    title: '13章-客户端检测',
                    path: '13章-客户端检测'
                }, {
                    title: '14章-DOM',
                    path: '14章-DOM'
                }, {
                    title: '15章-DOM扩展',
                    path: '15章-DOM扩展'
                }, {
                    title: '16章-DOM2和DOM3',
                    path: '16章-DOM2和DOM3'
                }, {
                    title: '17章-事件',
                    path: '17章-事件'
                }, {
                    title: '18章-动画与Canvas图形',
                    path: '18章-动画与Canvas图形'
                }, {
                    title: '19章-表单脚本',
                    path: '19章-表单脚本'
                }, {
                    title: '20章-JavaScriptAPI',
                    path: '20章-JavaScriptAPI'
                }, {
                    title: '21章-错误处理与调试',
                    path: '21章-错误处理与调试'
                }, {
                    title: '22章-处理XML',
                    path: '22章-处理XML'
                }, {
                    title: '23章-JSON',
                    path: '23章-JSON'
                }, {
                    title: '24章-网络请求与远程资源',
                    path: '24章-网络请求与远程资源'
                }, {
                    title: '25章-客户端存储',
                    path: '25章-客户端存储'
                }, {
                    title: '26章-模块',
                    path: '26章-模块'
                }, {
                    title: '27章-工作者线程',
                    path: '27章-工作者线程'
                }, {
                    title: '28章-最佳实践',
                    path: '28章-最佳实践'
                }, ]
            }],
            '/Webpack-Chinese-guide/': [{
                title: 'Webpack 中文指南',
                collapsable: true,
                path: '/Webpack-Chinese-guide/',
            }],
            '/Getting-started-with-TypeScript/': [{
                title: 'TypeScript入门与实践',
                collapsable: true,
                path: '/Getting-started-with-TypeScript/',
            }],
            '/APIs/': [{
                title: 'APIs',
                collapsable: true,
                path: '/APIs/',
            }],
            '/Browser-Extensions/': [{
                title: 'Browser-Extensions',
                collapsable: true,
                path: '/Browser-Extensions/',
            }],
            '/Graphics/': [{
                title: 'Graphics',
                collapsable: true,
                path: '/Graphics/',
            }],
            '/safety/': [{
                title: '安全系列',
                collapsable: true,
                path: '/safety/',
            }],
            '/Performance/': [{
                title: '性能系列',
                collapsable: true,
                path: '/Performance/',
            }],
            '/DataStructure/': [{
                title: '数据结构系列',
                collapsable: true,
                path: '/DataStructure/',
                children: [{
                    title: '栈-队列-堆',
                    path: '栈-队列-堆'
                }, {
                    title: '链表',
                    path: '链表'
                }]
            }],
            '/ALG/': [{
                title: '算法系列',
                collapsable: true,
                path: '/ALG/',
                children: [{
                    title: '1-两数之和',
                    path: '1-两数之和'
                }, {
                    title: '2-两数相加',
                    path: '2-两数相加'
                }, {
                    title: '3-无重复字符的最长子串',
                    path: '3-无重复字符的最长子串'
                }, {
                    title: '4-寻找两个正序数组的中位数',
                    path: '4-寻找两个正序数组的中位数'
                }, ]
            }],
        }
    }
}