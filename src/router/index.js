import Vue from 'vue'
import Router from 'vue-router'
import GooGle from '../components/GooGle.vue'
import AppleApp from '../detail/AppleApp.vue'
import AdobDeTail from '../detail/AdobDeTail.vue'
import NotFound from '../View/NotFound.vue'
import HelloWorld from '../View/HelloWorld.vue'
import RegisterApp from '../View/RegisterApp.vue'


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
                    path: '/AdobDeTail',
                    name: '/AdobDeTail',
                    component: AdobDeTail,
                },
                {
                    path: '/HelloWorld',
                    name: '/HelloWorld',
                    component: HelloWorld,
                    children: [

                        {
                            path: '/AppleApp',
                            name: '/AppleApp',
                            component: AppleApp,
                        },
                    ],

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