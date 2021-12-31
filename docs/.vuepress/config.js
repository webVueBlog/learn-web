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
		['autobar']
	],
	themeConfig: {
		nav: [{
				text: 'HTML',
				link: '/HTML/'
			},
			{
				text: 'CSS',
				link: '/CSS/'
			}
		],
		sidebar: {
			'/HTML/': [''],
			'/nav.02.api/': [{
				title: 'Classes',
				children: ['', 'classes/member']
			}]
		},
	}
}
