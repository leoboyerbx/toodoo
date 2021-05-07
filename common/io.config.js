const io = (url) => ({
  sockets: [
    {
      name: "game-sync",
      url,
      default: true,
      vuex: {
        actions: [
          {
            start: "bossSync/socketStart",
          },
          {
            askConfig: "bossSync/sendConfig",
          },
          {
            initContext: "bossSync/initContext",
          },
          {
            updateContext: "bossSync/updateContext",
          },
          {
            startFight: "bossSync/startFight",
          },
          {
            victory: "bossSync/victory",
          },
        ],
      },
    },
  ],
});

export default io;
