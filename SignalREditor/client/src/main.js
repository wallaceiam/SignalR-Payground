import Vue from 'vue'
import App from './App.vue'
import VueQuill from 'vue-quill';
import store from './store'

Vue.config.productionTip = false

Vue.use(VueQuill);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');



