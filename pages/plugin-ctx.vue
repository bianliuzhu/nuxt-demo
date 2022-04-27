<template>
	<div>ctx</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'PluginCtx',

	asyncData({ app }) {
		app.$CtxInjectedFunc('12341234')
	},
})
</script>
