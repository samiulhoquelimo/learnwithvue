import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from "./router/router.js";
import {defaultConfig, plugin} from '@formkit/vue'
import config from "../formkit.config.js";

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
createApp(App).use(router).use(plugin, defaultConfig(config)).use(pinia).mount('#app')
