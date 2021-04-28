const io = {
    sockets: [
        {
            name: 'game-sync',
            url: 'http://localhost:7554',
            default: true,
            vuex: {
                actions: [
                    {
                        start: 'bossSync/socketStart',
                    },
                ],
            },
        },
    ],
}

export default io
