import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedEvent: null,
    searchedVal: null,
  },

  getters: {
    getSelectedEvent(state) {
      return state.selectedEvent;
    },
    getSearchedVal(state) {
      return state.searchedVal;
    },
  },

  mutations: {
    ['SET_SELECTED_EVENT'](state, selectedEvent) {
      state.selectedEvent = selectedEvent;
    },
    ['SET_SEARCHED_VAL'](state, searchedVal) {
      state.searchedVal = searchedVal;
    },
  },

  actions: {
    setSelectedEvent({ commit }, selectedEvent) {
      commit('SET_SELECTED_EVENT', selectedEvent);
    },
    setSearchedVal({ commit }, searchedVal) {
      commit('SET_SEARCHED_VAL', searchedVal);
    },
  },
});