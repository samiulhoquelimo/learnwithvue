import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import UserProfile from "../components/UserProfile.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/user/:username',
        name: 'user',
        component: UserProfile
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
