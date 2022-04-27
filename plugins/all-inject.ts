export default (_context: any, inject: any) => {
	inject('allFunc', (str: string) =>
		console.log('注入到context,vue,store中参数值', str)
	)
}
