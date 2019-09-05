import axios from 'axios';
/* eslint-disable */
export default {
  namespaced: true,
  state: {
    notes: [],
  },
  actions: {
    async loadNotes({ state, commit }) {
      const notes = (await axios.get('https://cors-anywhere.herokuapp.com/https://swift-notes.herokuapp.com/api/notes')).data.data
      commit('setNotes', notes);
    },
  },
  mutations: {
    setNotes(state, data) {
      state.notes = data;
    },
  },
};
