import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/style/react.css";
import "@/assets/style/iconfont.css";
import "@/assets/style/main.css";

Vue.use(router);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
