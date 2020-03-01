import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
//import VueRouter from 'vue-router'
import './plugins/bootstrap-vue'
import App from './App.vue'

import { BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

//Creates route so that the second webpage is accessible
//const RestaurantsPage = { template: '<div><RestaurantsPage /></div>'}
//const Homepage = { template: '<div><Homepage /></div>'}

//const router = new VueRouter({
  //routes: [
    //{ path: '/restaurants', component: RestaurantsPage},
    //{ path: '/#/', component: require('./components/Homepage/Homepage')}
  //]
//})

new Vue({
  //router,
  render: h => h(App),
}).$mount('#app')
