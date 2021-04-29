const io = (url) => ({
    sockets: [
        {
            name: 'game-sync',
            url,
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
})

export default io
