import Vue from 'vue'
import App from './App.vue'
import VueQuillEditor from './thirdparty/vue-quill-editor'
import store from './store'

Vue.config.productionTip = false

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor, /* { default global options } */)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');



