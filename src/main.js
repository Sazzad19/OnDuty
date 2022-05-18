/*!

 =========================================================
 * Vue Light Bootstrap Dashboard - v2.0.0 (Bootstrap 4)
 =========================================================

 * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

import Calendar from 'v-calendar/lib/components/calendar.umd';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';
// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main';
import './registerServiceWorker';
import routes from './routes/routes';
import budgets from './store/budgets';
import duties from './store/duties';
// import store from './store/store.js';
// router setup
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    duties: duties,
    budgets: budgets
  },
  mutations: {
    addDuty (state, duty) {
      state.duties.push(duty);
    },
    addBudget(state, budget){
      budgets.duties.push(budget);

    }
  }
})


// plugin setup
Vue.use(VueRouter)
Vue.use(LightBootstrap)
Vue.component('calendar', Calendar)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
