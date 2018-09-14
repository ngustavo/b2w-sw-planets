import Vue from "vue"
import App from "./App.vue"
import BootstrapVue from "bootstrap-vue"
import icon from "vue-awesome/components/Icon"
import headful from "vue-headful"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "vue-awesome/icons"

Vue.use(BootstrapVue)
Vue.component('headful', headful)
Vue.component('icon', icon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
