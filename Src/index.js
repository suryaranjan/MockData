

import Vue from 'vue';
import App from '../app.vue';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import OneToMany from './BasicComponent/OneToMany.vue';
import ManyToMany from './BasicComponent/ManyToMany.vue';

Vue.use(BootstrapVue);
Vue.use(require('vue-faker'));

Vue.use(VueRouter)

const routes = [
    {path: '/OneToMany', component: OneToMany, name: 'OneToMany'},
    {path: '/ManyToOne', component: ManyToMany, name: 'ManyToOne'}
];

const router = new VueRouter({
    routes
});

var vm = new Vue({
    router,
    el:'#root',
   render:h=>h(App)
})