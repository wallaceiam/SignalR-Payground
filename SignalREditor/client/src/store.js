import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isConnected: false,
    content: {
      ops: [],
    },
  },
  mutations: {
    textChanged(state, delta) {
      state.content.ops = delta;
    }
  },
  actions: {
    changeText(context, delta) {
       context.commit('textChanged', delta);
    }
  }
});
