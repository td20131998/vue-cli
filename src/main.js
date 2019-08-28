import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!localStorage.getItem("isLoggedIn")) {
      next({ name: "login", query: { redirect: to } });
    } else {
      console.log("to: " + to.name);
      console.log("from: " + from.name);
      next();
    }
  } else {
    // next({ name: 'notFound' });
    next();
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
