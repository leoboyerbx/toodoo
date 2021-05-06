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
                        askConfig: 'bossSync/sendConfig',
                    },
                    {
                        initContext: 'bossSync/initContext',
                    },
                ],
            },
        },
    ],
})

export default io
