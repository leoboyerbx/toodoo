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
                    {
                        ready: 'bossSync/ready',
                    },
                ],
            },
        },
    ],
}

export default io
