import Vue from 'vue'
import Router from 'vue-router'
import GooGle from '../View/GooGle.vue'
import NotFound from '../components/NotFound.vue'
import AdobDeTail from '../detail/AdobDeTail.vue'
import HelloWorld from '../components/HelloWorld.vue'
import RegisterApp from '../components/RegisterApp.vue'


export const routes =
    [
        {
            path: '/',
            component: RegisterApp,
            children: [
                {
                    path: '/GooGle',
                    name: '/GooGle',
                    component: GooGle,
                },
                {
                    path: '/HelloWorld',
                    name: '/HelloWorld',
                    component: HelloWorld,
                    children: [
                        {
                            path: '/AdobDeTail',
                            name: '/AdobDeTail',
                            component: AdobDeTail,
                        },
                    ]
                },
            ]
        },
        {
            path: '*',
            name: '404',
            component: NotFound
        },
    ]

export default new Router({
    routes // (缩写) 相当于 routes: routes
});

Vue.use(Router);