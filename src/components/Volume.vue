<template>
	<div class="volume">
		<h1>volume 模块</h1>
		<div>
			<h1>volumeName: {{ volumeName }}</h1>
			<button @click="updateVolumeName">修改volumeName</button>
			<button @click="asyncUpdateVolumeName">异步修改volumeName</button>
		</div>
		<div>
			<h1>usedSize: {{ usedSize }}</h1>
			<button @click="updateUsedSize">修改usedSize</button>
			<button @click="asyncUpdateUsedSize">异步修改usedSize</button>
		</div>
	</div>
</template>

<script>
import store from '@/store'

export default {
	computed: {
		volumeName() {
			return store.getters.volumeName
		},
		usedSize() {
			return store.getters.usedSize
		}
	},
	methods: {
		updateVolumeName() {
			store.commit('setVolumeName', 'test')
		},
		asyncUpdateVolumeName() {
			store.dispatch('asyncSetVolumeName', 'test1')
		},
		updateUsedSize() {
			store.commit('setUsedSize', '90')
		},
		asyncUpdateUsedSize() {
			store.dispatch('asyncSetUsedSize', '80')
		}
	},
	name: 'Volume'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
.volume {
	border: 1px solid #000;
}
</style>
