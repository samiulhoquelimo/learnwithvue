import {createRouter, createWebHistory} from 'vue-router'
import Home from "../components/Home.vue";
import Product from "../components/Product.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/product/:id', component: Product}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
