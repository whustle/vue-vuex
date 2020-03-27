
const volume = {
    state: {
        volumeName: 'SYSVOL',
        usedSize: 100
    },
    mutations: {
        setVolumeName: (state, name) => {
            console.log('setVolumeName: ' + name)
            state.volumeName = name
        },
        setUsedSize: (state, usedSize) => {
            console.log('setUsedSize: ' + usedSize)
            state.usedSize = usedSize
        }
    },
    actions: {
        asyncSetVolumeName: ({ commit }, name) => {
            console.log('async setVolumeName: ' + name)
            commit('setVolumeName', name);
        },
        asyncSetUsedSize: ({ commit }, usedSize) => {
            console.log('async setUsedSize: ' + usedSize)
            commit('setUsedSize', usedSize)
        }
    },
}

export default volume