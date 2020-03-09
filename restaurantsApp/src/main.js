import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/bootstrap-vue'
import App from './App.vue'
//import Axios from "axios";
//import VueAxios from "vue-axios";

import { BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// imported components that can be used for each page
import Homepage from "./components/Homepage/Homepage";
import RestaurantsPage from "./components/RestaurantsPage/RestaurantsPage";
import ExpandedRestaurant from "./components/ExpandedRestaurant/ExpandedRestaurant";

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
//Vue.use(VueAxios, Axios)

Vue.config.productionTip = false

//Creates route so that the other webpages are accessible
//const RestaurantsPage = { template: '<div><RestaurantsPage /></div>'}
//const Homepage = { template: '<div><Homepage /></div>'}

const router = new VueRouter({
  routes: [
    { path: '/restaurants', component: RestaurantsPage},
    { path: '/', component: Homepage},
    { path: '/restaurants/expandedrestaurant', component: ExpandedRestaurant}
  ]
})

new Vue({
  router,
  render: h => h(App),
  data() {
    return {

    }
  }
}).$mount('#app')
