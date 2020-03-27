const getters = {
    volumeName: state => state.volume.volumeName,
    usedSize: state => state.volume.usedSize,
    ip: state => state.network.ip,
    port: state => state.network.port
}

export default getters