import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import Vuetify from 'vuetify'

createApp(App).use(store).use(Vuetify).mount('#app')
