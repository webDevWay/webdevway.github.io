import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalWindow: false,
    modalScoreTable: false,
    tableSuccessWord: [],
    tableSkipWord: [],
  },
  mutations: {
    changeModalState(state, modal) {
      state[modal] = !state[modal];
    },
    changeWordTable(state, table) {
      state[table.table].push(table.pushing);
    }
  },
});
