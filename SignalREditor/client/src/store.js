import Vue from 'vue'
import Vuex from 'vuex'
const signalR = require('@aspnet/signalr');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isConnected: false,
    connection: null,
    content: '',
  },
  mutations: {
    textChanged(state, delta) {
      state.content = delta;
    },
    notifyTextChanged(state, delta) {
      state.connection.invoke('textChanged', delta);
    },
    connected(state, connection) {
      state.connection = connection;
      state.connection.start().catch(x => console.error(x));
      state.isConnected = true;
    },
    disconnected(state) {
      state.connection = null;
      state.isConnected = false;
    }
  },
  actions: {
    editorChanged(context, delta) {
      context.commit('notifyTextChanged', delta);
    },
    connect(context) {
      var connection = new signalR.HubConnectionBuilder()
                .withUrl("http://localhost:5000/editorHub")
                .configureLogging(signalR.LogLevel.Debug)
                .build();

      context.commit('connected', connection);
      
      connection.on('textChanged', data => {
        context.commit('textChanged', data);
      });
    },
    disconnect(context) {
      context.commit('disconnected');
    }
  }
});
