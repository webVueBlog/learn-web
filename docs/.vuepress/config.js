module.exports = {
	title: '哪吒的Hello Web',
	description: '哪吒的Hello Web',
	base: '/learn-web/',
	head: [
		['meta', {
			name: 'viewport',
			content: 'width=device-width,initial-scale=1,user-scalable=no'
		}]
	],
	plugins: [
		// ['@vuepress/active-header-links', {
		// 	sidebarLinkSelector: '.sidebar-link',
		// 	headerAnchorSelector: '.header-anchor'
		// }],
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
			},
			{
				text: 'MathML',
				link: '/MathML/'
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
