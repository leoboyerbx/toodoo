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
                    {
                        askConfig: 'bossSync/sendConfig',
                    },
                ],
            },
        },
    ],
})

export default io
