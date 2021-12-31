module.exports = {
	title: 'Hello Web',
	description: 'Hello Web',
	base: '/learn-web/',
	theme: 'reco',
	head: [
		['meta', {
			name: 'viewport',
			content: 'width=device-width,initial-scale=1,user-scalable=no'
		}],
		['link', {
			rel: 'icon',
			href: '../assets/20211231154825.jpg'
		}]
	],
	plugins: [
		['@vuepress/active-header-links', {
			sidebarLinkSelector: '.sidebar-link',
			headerAnchorSelector: '.header-anchor'
		}],
		['@vuepress/back-to-top'],
		['@vuepress/medium-zoom'],
		['@vuepress/nprogress']
	],
	markdown: {
		lineNumbers: true
	}
}
