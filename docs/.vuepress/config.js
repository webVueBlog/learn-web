module.exports = {
	title: '哪吒的深入理解前端系列',
	description: '哪吒的深入理解前端系列',
	base: '/learn-web/',
	head: [
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
			}
		],
		sidebar: {
			'/HTML/': [
				{
					title: 'HTML',
					collapsable: true,
				}
			],
			'/CSS/': [
				{
					title: 'CSS',
					collapsable: true,
					children: [
						{
							title: '盒子模型',
							path: '盒子模型'
						},
					]
				}
			],
			'/JavaScript/': [
				{
					title: 'JavaScript',
					collapsable: true,
					children: [
						{
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
							title: '45道Promise',
							path: '45道Promise'
						},
						{
							title: '原型链',
							path: '原型链'
						},
					]
				}
			],
			'/HTTP/': [
				{
					title: 'HTTP',
					collapsable: true,
				}
			],
			'/APIs/': [
				{
					title: 'APIs',
					collapsable: true,
				}
			],
			'/Browser-Extensions/': [
				{
					title: 'Browser-Extensions',
					collapsable: true,
				}
			],
			'/Graphics/': [
				{
					title: 'Graphics',
					collapsable: true,
				}
			],
			'/MathML/': [
				{
					title: 'MathML',
					collapsable: true,
				}
			],
		}
	}
}
