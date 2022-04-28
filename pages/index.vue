<template>
	<div>
		<ul>
			<li>标题：{{ resData.title }}</li>
			<li>作者：{{ resData.author }}</li>
			<li>内容：{{ resData.content }}</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
type ResData = {
	title: string
	content: string
	author: string
}
type ResponseType = {
	code: number
	message: string
	data: Partial<ResData>
}

@Component({
	name: 'IndexPage',
	async asyncData({ $axios }) {
		const response: ResponseType = await $axios.$get('/test')
		return { resData: response.data }
	},
})
export default class Index extends Vue {
	resData: Partial<ResData> = {}
}
</script>
