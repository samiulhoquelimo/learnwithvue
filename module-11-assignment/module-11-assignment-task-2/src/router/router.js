import {createRouter, createWebHistory} from 'vue-router'
import Login from '../components/Login.vue'
import {authStore} from "../store/authStore.js";
import Dashboard from "../components/Dashboard.vue";
import Register from "../components/Register.vue";

const routes = [
    {
        path: '/login', components: {default: Login}
    },
    {
        path: '/register', components: {default: Register}
    },
    {
        path: '/', components: {default: Dashboard}, meta: {requiresAuth: true}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const auth = authStore()

    let authenticated = auth.isAuthenticated;
    let authRequired = to.matched.some(record => record.meta.requiresAuth);

    if (authRequired && !authenticated) {
        next('/login')
    } else {
        next()
    }
})

export default router
