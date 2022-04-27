export default ({ app }: any, inject: any) => {
	app.$CtxInjectedFunc = (str: string) =>
		console.log('this is console', str, inject)
}
