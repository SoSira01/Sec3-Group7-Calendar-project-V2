import {createRouter,createWebHistory} from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'
import Notes from '../views/Notes.vue'
import AboutUs from '../views/AboutUs.vue'

const history = createWebHistory()
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Notes',
        name: 'Notes',
        component: Notes
    },
    {
        path: '/AboutUs',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path: '/:catchNotMatchPath(.*)',
        name: 'NotFound',
        component: NotFound
    }
    ]

const router = createRouter({history, routes})
export default router
