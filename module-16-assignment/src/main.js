import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome' // configuring fontawesome icons

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon) // creating fontawesome component

app.mount('#app')
