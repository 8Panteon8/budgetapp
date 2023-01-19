import Vue from "vue";

const valueStore = {
  namespaced: true,
  state: {
    list: {
      1: {
        type: "INCOME",
        value: 100,
        comment: "Some comment",
        id: 1,
      },
      2: {
        type: "OUTCOME",
        value: -50,
        comment: "Some outcome comment",
        id: 2,
      },
    },
  },
  getters: {
    valueList: ({ list }) => list,
  },
  mutations: {
    ADD_USER(state, value) {
      Vue.set(state.list, value.id, value);
    },
  },
  actions: {
    addNewValue({ commit }, value) {
      if (value.type == "INCOME") {
        const inComeValue = {
          type: value.type,
          value: value.value,
          comment: value.comment,
          id: String(Math.random()),
        };
        commit("ADD_USER", inComeValue);
      } else {
        const outComeValue = {
          type: value.type,
          value: -value.value,
          comment: value.comment,
          id: String(Math.random()),
        };
        commit("ADD_USER", outComeValue);

      }
    },
  },
};

export default valueStore;