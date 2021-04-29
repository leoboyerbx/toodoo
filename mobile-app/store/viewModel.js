const dumbApiData = {
  missions: [
    {
      id: 1,
      createdAt: '2021-04-28T16:27:12.243Z',
      updatedAt: '1970-01-01T00:00:00.000Z',
      name: 'misson accomplie ?',
      ponctual: false,
      active: false,
      gameId: 1,
      assignTo: 1,
      completeBy: null,
    },
    {
      id: 2,
      createdAt: '2021-04-28T16:27:35.374Z',
      updatedAt: '2021-04-29T08:44:10.999Z',
      name: 'misson 2 !',
      ponctual: false,
      active: false,
      gameId: 2,
      assignTo: null,
      completeBy: null,
    },
    {
      id: 3,
      createdAt: '2021-04-29T08:44:47.790Z',
      updatedAt: '2021-04-29T08:45:38.850Z',
      name: "Parler avec l'accent",
      ponctual: true,
      active: false,
      gameId: 2,
      assignTo: 2,
      completeBy: null,
    },
    {
      id: 4,
      createdAt: '2021-04-29T08:45:38.850Z',
      updatedAt: '1970-01-01T00:00:00.000Z',
      name: 'Faire la vaiselle',
      ponctual: false,
      active: true,
      gameId: 2,
      assignTo: null,
      completeBy: 2,
    },
  ],
  players: [
    {
      id: 1,
      createdAt: '2021-04-28T16:26:58.476Z',
      updatedAt: '1970-01-01T00:00:00.000Z',
      name: 'joueureu 1',
      avatar: 'totoavatar',
      points: 5,
      teamId: 1,
    },
    {
      id: 2,
      createdAt: '2021-04-29T08:42:32.413Z',
      updatedAt: '2021-04-29T08:43:56.316Z',
      name: 'Julien',
      avatar: 'avatar1',
      points: 2,
      teamId: 2,
    },
  ],
}
export const getters = {
  mapData: (state) => async (id) => {
    const missions = dumbApiData.missions
    const players = dumbApiData.players
  },
}
