<!--
 * @Description:
 * @Author: Gleason
 * @Date: 2022-04-27 15:36:42
 * @LastEditors: Gleason
 * @LastEditTime: 2022-04-27 15:57:14
-->
<template>
	<div>all</div>
</template>

<script lang="ts">
import Vue from 'vue'

declare module 'vue/types/vue' {
	interface Vue {
		$allFunc: (str: string) => void
	}
}
export default Vue.extend({
	name: 'PluginAll',
	// 服务端钩子
	asyncData({ app }) {
		app.$allFunc('asyncData')
	},
	// 客户端钩子
	mounted() {
		this.$allFunc('test')
	},
})
</script>
