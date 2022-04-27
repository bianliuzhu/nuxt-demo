/*
 * @Description:
 * @Author: Gleason
 * @Date: 2022-04-25 16:40:57
 * @LastEditors: Gleason
 * @LastEditTime: 2022-04-27 17:14:59
 */
export default {
	// 端口号
	server: {
		port: 8090,
		host: '0.0.0.0',
	},
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'nuxt-demo',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/vue-inject.ts',
		'~/plugins/ctx-inject.ts',
		'@/plugins/all-inject.ts',
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		// https://go.nuxtjs.dev/stylelint
		'@nuxtjs/stylelint-module',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: '/',
		proxy: true, // 启用代理
		prefix: '/api',
	},
	// proxy: {
	// 	'/api': {
	// 		target: '',
	// 	},
	// },

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
}
