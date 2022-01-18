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
        ['@vuepress/back-to-top'],
        ['@vuepress/medium-zoom'],
        ['@vuepress/nprogress'],
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
                        text: 'JavaScript高级程序设计（第3版）',
                        link: '/JavaScript-advanced-programming/'
                    }, ]
                }, {
                    text: 'webpack书籍',
                    items: [{
                        text: 'Webpack 中文指南',
                        link: '/Webpack-Chinese-guide/'
                    }, ]
                }, {
                    text: 'TypeScript书籍',
                    items: [{
                        text: 'TypeScript入门与实践',
                        link: '/Getting-started-with-TypeScript/'
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
                children: [{
                    title: 'HTML基础',
                    path: 'HTML基础'
                }, ]
            }],
            '/CSS/': [{
                title: 'CSS',
                collapsable: true,
                children: [{
                    title: '盒子模型',
                    path: '盒子模型'
                }, ]
            }],
            '/JavaScript/': [{
                title: 'JavaScript',
                collapsable: true,
                children: [{
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
                ]
            }],
            '/HTTP/': [{
                title: 'HTTP',
                collapsable: true,
                children: [{
                    title: 'MDN-HTTP',
                    path: 'MDN-HTTP'
                }, ]
            }],
            '/front-end-engineering/': [{
                title: '工程化',
                collapsable: true,
                children: [{
                    title: '三分钟了解AST',
                    path: '三分钟了解AST'
                }, ]
            }],
            '/browser/': [{
                title: '浏览器',
                collapsable: true,
                children: [{
                    title: '浏览器解析渲染页面过程',
                    path: '浏览器解析渲染页面过程'
                }, ]
            }],
            '/regular-expression/': [{
                title: '正则表达式',
                collapsable: true,
                children: [{
                    title: '正则表达式',
                    path: '正则表达式'
                }, ]
            }],
            '/Programming/': [{
                title: '编程题',
                collapsable: true,
            }],
            '/Node/': [{
                title: 'Node',
                collapsable: true,
            }],
            '/Vue/': [{
                title: 'Vue',
                collapsable: true,
            }],
            '/React/': [{
                title: 'React',
                collapsable: true,
            }],
            '/html-css-js-coding/': [{
                title: 'html-css-js实践',
                collapsable: true,
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
            }],
            '/JavaScript-advanced-programming/': [{
                title: 'JavaScript高级程序设计（第3版）',
                collapsable: true,
            }],
            '/Webpack-Chinese-guide/': [{
                title: 'Webpack 中文指南',
                collapsable: true,
            }],
            '/Getting-started-with-TypeScript/': [{
                title: 'TypeScript入门与实践',
                collapsable: true,
            }],
            '/APIs/': [{
                title: 'APIs',
                collapsable: true,
            }],
            '/Browser-Extensions/': [{
                title: 'Browser-Extensions',
                collapsable: true,
            }],
            '/Graphics/': [{
                title: 'Graphics',
                collapsable: true,
            }],
            '/MathML/': [{
                title: 'MathML',
                collapsable: true,
            }],
            '/safety/': [{
                title: '安全系列',
                collapsable: true,
            }],
            '/Performance/': [{
                title: '性能系列',
                collapsable: true,
            }],
            '/DataStructure/': [{
                title: '数据结构系列',
                collapsable: true,
            }],
            '/ALG/': [{
                title: '算法系列',
                collapsable: true,
            }],
        }
    }
}