import Vue from 'vue'
import Router from 'vue-router'
import AdobDeTail from '../detail/AdobDeTail.vue'
import NotFound from '../View/NotFound.vue'
import Items from '../View/HelloWorld.vue'
import RegisterApp from '../View/RegisterApp.vue'


export const routes =
    [
        {
            path: '/',
            component: RegisterApp,
            children: [
                {
                    path: '/list/:type',
                    component: Items,
                },
                {
                    path: '/AdobDeTail',
                    name: '/AdobDeTail',
                    component: AdobDeTail,
                },
                {
                    path: '/Items',
                    name: '/Items',
                    component: Items,
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