module.exports = {
	title: 'Hello Web',
	description: 'Hello Web',
	base: '/learn-web/',
	head: [
		['meta', {
			name: 'viewport',
			content: 'width=device-width,initial-scale=1,user-scalable=no'
		}]
	],
	plugins: [
		['@vuepress/active-header-links', {
			sidebarLinkSelector: '.sidebar-link',
			headerAnchorSelector: '.header-anchor'
		}],
		['@vuepress/back-to-top'],
		['@vuepress/medium-zoom'],
		['@vuepress/nprogress'],
		// ['autobar']
	],
	themeConfig: {
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
					path: '/HTML/'
				}
			],
			'/CSS/': [
				{
					title: 'CSS',
					path: '/CSS/'
				}
			],
			'/JavaScript/': [
				{
					title: 'JavaScript',
					path: '/JavaScript/'
				}
			],
			'/HTTP/': [
				{
					title: 'HTTP',
					path: '/HTTP/'
				}
			],
			'/APIs/': [
				{
					title: 'APIs',
					path: '/APIs/'
				}
			],
			'/Browser-Extensions/': [
				{
					title: 'Browser-Extensions',
					path: '/Browser-Extensions/'
				}
			],
			'/Graphics/': [
				{
					title: 'Graphics',
					path: '/Graphics/'
				}
			],
			'/MathML/': [
				{
					title: 'MathML',
					path: '/MathML/'
				}
			],
		}
	}
}
