import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index.js';
import router from './router/index.js';

export default ({
	Vue, // the version of Vue being used in the VuePress app
	options, // the options for the root Vue instance
	router, // the router instance for the app
	siteData, // site metadata
	isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
	Vue.use(ElementUI);
	Vue.mixin({
		store,
		router
	});
	// Vue.prototype.$EventBus = new Vue();
	// if (!isServer) {
	// 	import('xxx/lib/xxxx.min.js').then(module => {
	// 		Vue.use(module)
	// 	})
	// }
}

// import GlobalLayout from 'theme'?

// const app = new Vue(
//   Object.assign(options, {
//     router,
//     render: h => h(GlobalLayout)
//   })
// )
