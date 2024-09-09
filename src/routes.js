import { createRouter, createWebHashHistory } from "vue-router";

const routerHistory = createWebHashHistory()

import HomePage from './pages/home.vue'
import AboutPage from './pages/about.vue'
import NotFoundPage from "./pages/notFound.vue";
import Item from "./pages/_itemAlias.vue"

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/:itemAlias',
            name: 'itemAlias',
            component: Item
        },        
        {
            path: '/404',
            name: '404',
            component: NotFoundPage
        },
        {
            path: '/:CatchAll(.*)',
            name: 'all',
            redirect: '/404'
        }
    ]
})

export default routers