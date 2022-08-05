import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
const RegisterApp = () =>
    import("@/components/RegisterApp")
const HelloWorld = () =>
    import("@/components/HelloWorld")
const PasswordApp = () =>
    import("@/components/PasswordApp")


export const routes = [

    {
        path: '/',
        name: '/RegisterApp',
        component: RegisterApp,
        children: [
            {
                path: '/',
                name: '/AllItems',
            },
            {
                path: '/RegisterApp',
                name: '/AllItems',
                component: HelloWorld,

            },
            {
                path: '/PasswordApp',
                name: '/PasswordApp',
                component: PasswordApp,

            },

        ]
    },
]

export default new Router({
    routes // (缩写) 相当于 routes: routes
});

