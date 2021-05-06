export const state = () => ({
  currentScreen: "pairing",
  clientType: "",
  gameContext: null,
});

export const mutations = {
  setCastType(state, set = true) {
    state.clientType = set;
  },
  changeScreen(state, screen) {
    state.currentScreen = screen;
  },
  setGameContext(state, context) {
    state.gameContext = context;
  },
};

export const actions = {
  // common
  socketStart() {},
  async pair(context, pairData) {
    await context.dispatch(
      "$nuxtSocket/emit",
      {
        label: "game-sync",
        evt: "pair",
        msg: pairData,
      },
      { root: true }
    );
  },
  initContext({ commit }, gameContext) {
    commit("setGameContext", gameContext);
    // Since the context is ready, we can go on to the intro cinematic
    commit("changeScreen", "intro");
  },
  startFight({ commit }) {
    // Since the context is ready, we can go on to the intro cinematic
    commit("changeScreen", "fight");
  },

  // mobile app specific
  sendConfig({ dispatch, rootState }) {
    dispatch(
      "$nuxtSocket/emit",
      {
        label: "game-sync",
        evt: "config",
        msg: {
          gameId: rootState.apiService.game.id,
        },
      },
      { root: true }
    );
  },
  sendStartFight({ dispatch }) {
    dispatch(
      "$nuxtSocket/emit",
      {
        label: "game-sync",
        evt: "startFight",
        msg: {},
      },
      { root: true }
    );
  },
};
