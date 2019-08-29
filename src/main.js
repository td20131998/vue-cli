import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// console.log(faHandMiddleFinger)
// import { faSpinner, faAlignLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck, faTimes);

Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  let isLoggedIn = localStorage.getItem('isLoggedIn');

  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: "login", query: { redirect: to } });
    } else {
      next();
    }
  } else {
    if (isLoggedIn && to.name == 'login') {
      window.history.back();
    } else {
      next();
    }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
