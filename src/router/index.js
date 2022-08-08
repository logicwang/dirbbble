import Vue from 'vue'
import Router from 'vue-router'
const RegisterApp = () =>
    import("@/components/RegisterApp")
const HelloWorld = () =>
    import("@/components/HelloWorld")
const GooGle = () =>
    import("@/View/GooGle")
const AdobDeTails = () =>
    import("@/detail/AdobDeTails")


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
                        path: '/HelloWorld/AdobDeTails',
                        name: '/AdobDeTails',
                        component: AdobDeTails,

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
