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
        // ['autobar']
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
                    text: 'Node',
                    link: '/Node/'
                }, {
                    text: '编程题',
                    link: '/Programming/'
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
                    text: 'webpack',
                    items: [{
                        text: 'Webpack 中文指南',
                        link: '/Webpack-Chinese-guide/'
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
                ]
            }],
            '/HTTP/': [{
                title: 'HTTP',
                collapsable: true,
            }],
            '/front-end-engineering/': [{
                title: '工程化',
                collapsable: true,
            }],
            '/browser/': [{
                title: '浏览器',
                collapsable: true,
            }],
            '/Node/': [{
                title: 'Node',
                collapsable: true,
            }],
            '/Programming/': [{
                title: '编程题',
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