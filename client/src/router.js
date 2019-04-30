import Vue from 'vue';
import Router from 'vue-router';

import VueAxios from 'vue-axios';
import axios from 'axios';

import CreateComponent from '@/components/tokens/CreateComponent';
import IndexComponent from '@/components/tokens/IndexComponent.vue';
import EditComponent from '@/components/tokens/EditComponent.vue';
import LoginComponent from '@/components/users/LoginComponent.vue';
import About from '@/views/About.vue';

Vue.use(Router);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { name: 'index', path: '/tokens', component: IndexComponent },
    { name: 'create', path: '/tokens/create', component: CreateComponent },
    { name: 'edit', path: '/tokens/:id', component: EditComponent },
    { name: 'login', path: '/login', component: LoginComponent },
    {
      name: 'about', path: '/about', component: () => {
        return About;
      }
    }
  ]
});
