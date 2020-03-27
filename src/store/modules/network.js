const network = {
    state: {
        ip: '192.168.1.110',
        port: '2020'
    },
    mutations: {
        setIp: (state, ip) => {
            console.log('setIp: ' + ip)
            state.ip = ip
        },
        setPort: (state, port) => {
            console.log('setPort: ' + port)
            state.port = port
        }
    },
    actions: {
        asyncSetIp: ({ commit }, ip) => {
            console.log('asyncSetIP: ' + ip)
            commit('setIp', ip)
        },
        asyncSetPort: ({ commit }, port) => {
            console.log('asyncSetPort: ' + port)
            commit('setPort', port)
        }
    }
}

export default network