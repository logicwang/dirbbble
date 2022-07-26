import Vue from 'vue'
import Router from 'vue-router'

const RegisterApp = () =>
    import("@/components/RegisterApp")

export const routes = [{
    path: '/RegisterApp',
    name: '/RegisterApp',
    component: RegisterApp
}]

export const router = new Router({
    routes // (缩写) 相当于 routes: routes
});

Vue.use(Router);