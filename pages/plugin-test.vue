<template>
	<div>wqerqwerq</div>
</template>

<script lang="ts">
import Vue from 'vue'

declare module 'vue/types/vue' {
	interface Vue {
		$MyInjectedFunc: (str: string) => void
	}
}
export default Vue.extend({
	name: 'PluginTest',
	mounted() {
		this.$MyInjectedFunc('test')
	},
})
</script>
