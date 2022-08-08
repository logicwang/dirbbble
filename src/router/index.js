import Vue from 'vue'
import Router from 'vue-router'
const RegisterApp = () =>
    import("@/components/RegisterApp")
const HelloWorld = () =>
    import("@/components/HelloWorld")
const AdobApp = () =>
    import("@/components/Password")
const DetailsApp = () =>
    import("@/detail/AdobApp")


export const routes = [

    {
        path: '/',
        // name: 'RegisterApp',
        component: RegisterApp,
        children: [
            {
                path: '/',
                name: '/AllItems',
            },
            {
                path: '/HelloWorld',
                name: '/HelloWorld',
                component: HelloWorld,

            },
            {
                path: '/AdobApp',
                name: '/AdobApp',
                component: AdobApp,
                children: [
                    {
                        path: '/DetailsApp',
                        name: '/DetailsApp',
                        component: DetailsApp,

                    },
                ]
            },

        ]
    },
]

export default new Router({
    routes // (缩写) 相当于 routes: routes
});

Vue.use(Router);
