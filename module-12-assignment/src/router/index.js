import {createRouter, createWebHistory} from 'vue-router'
import StockDataTablePage from "../views/StockDataTablePage.vue";
import ProductDetailsPage from "../views/ProductDetailsPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: StockDataTablePage
        },
        {
            path: '/product/:id',
            name: 'product',
            component: ProductDetailsPage
        }
    ]
})

export default router
