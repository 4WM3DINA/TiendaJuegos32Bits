import Vue from 'vue'
import Vuex from 'vuex'
import games from "./juegos.json";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games,
  },
  mutations: {
    setGames(state, games) {
      state.games = games;
    }
  },
  actions: {
    increase ({commit, state}, index){
      const {games} = state;
      games[index].stock++
      commit("setGames", games)
    },

    decrease ({commit, state}, index){
      const {games} = state;
      games[index].stock--
      commit("setGames", games)
    },
  },
  getters: {
    totalGames(state){
      const total = state.games.reduce((accumulator,games) => {
        return +games.stock + accumulator
      }, 0)
      return total
    }
  },
})
