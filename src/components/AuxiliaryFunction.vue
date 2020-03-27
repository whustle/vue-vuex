<template>
	<div class="auxiliaryFunction">
		<h1>AuxiliaryFunction 模块</h1>
		<h1>{{ ipAlias }}</h1>
        <h1>{{ rootState }}</h1>
        <h1>{{ ip }}</h1>
        <button @click="updateIp">修改ip</button>
        <button @click="asyncUpdateIp">异步修改ip</button>
        <h1>{{ port }}</h1>
        <button @click="updatePort">修改port</button>
        <button @click="asyncUpdatePort">异步修改port</button>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
	name: 'AuxiliaryFunction',
	computed: {
        ipAlias() {
            return '192.168.1.1'
        },
        // 辅助函数 mapState
        ...mapState(['rootState']),
        // 辅助函数 mapGetters
        ...mapGetters(['ip', 'port'])
    },
    methods: {
        // 辅助函数 mapMutations
        ...mapMutations(['setIp', 'setPort']),
        // 辅助函数 mapActions
        ...mapActions(['asyncSetIp', 'asyncSetPort']),
        updateIp() {
            this.setIp('192.168.1.109')
        },
        asyncUpdateIp() {
            this.asyncSetIp('192.168.1.108')
        },
        updatePort() {
            this.setPort('41000')
        },
        asyncUpdatePort() {
            this.asyncSetPort('41001')
        }
    }
}
</script>

<style scoped>
.auxiliaryFunction {
	border: 1px solid #000;
}
</style>