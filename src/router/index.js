import Vue from 'vue'
import Router from 'vue-router'
import AdobDeTail from '../detail/AdobDeTail.vue'
import NotFound from '../View/NotFound.vue'
import Items from '../View/HelloWorld.vue'
import RegisterApp from '../View/RegisterApp.vue'


export default new Router({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            redirect: '/list/all',
            component: RegisterApp,
            children: [
                {
                    path: '/list/:type',
                    component: Items,
                    props: true
                },
                {
                    path: '/list/:type/detail/:name',
                    component: Items,
                    props: true
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
})
// export default new Router({
//     routes // (缩写) 相当于 routes: routes
// });

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router);