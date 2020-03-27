<template>
	<div class="network">
		<h1>network模块</h1>
		<div>
			<h1>IP: {{ ip }}</h1>
			<button @click="updateIp">修改IP</button>
			<button @click="asyncUpdateIp">异步修改IP</button>
		</div>
		<div>
			<h1>port: {{ port }}</h1>
			<button @click="updatePort">修改port</button>
			<button @click="asyncUpdatePort">异步修改port</button>
		</div>
	</div>
</template>

<script>
import store from '@/store'

export default {
    computed: {
		ip() {
            return store.getters.ip
        },
		port() {
            return store.getters.port
        }
	},
	methods: {
		updateIp() {
			console.log('修改IP')
			store.commit('setIp', '192.168.1.109')
		},
		asyncUpdateIp() {
			console.log('异步修改IP')
			store.dispatch('asyncSetIp', '192.168.1.108')
		},
		updatePort() {
			console.log('修改port')
			store.commit('setPort', '41000')
		},
		asyncUpdatePort() {
			console.log('异步修改port')
			store.dispatch('asyncSetPort', '41001')
		}
	},
	name: 'Network'
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
.network {
	border: 1px solid #000;
}
</style>
