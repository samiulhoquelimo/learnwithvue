import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "../components/HomePage.vue";
import BlogPage from "../components/BlogPage.vue";
import BlogList from "../components/BlogList.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/blogs/:id',
            name: 'blogs',
            component: BlogList
        },
        {
            path: '/blog/:id',
            name: 'blog',
            component: BlogPage
        }
    ]
})

export default router