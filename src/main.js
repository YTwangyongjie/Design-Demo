import Vue from 'vue'
import App from './App.vue'
import HW from './components/HelloWorld.vue'
import RA from './components/rating1.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

const routes = {
  '/': App,
  '/hw': HW,
  '/rating1':RA
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})