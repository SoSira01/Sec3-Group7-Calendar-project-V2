import {createRouter,createWebHistory} from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Home from '../views/calendar.vue'


const history = createWebHistory()
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:catchNotMatchPath(.*)',
        name: 'NotFound',
        component: NotFound
    }
    ]

const router = createRouter({history, routes})
export default router
