// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import { Button, Select } from 'element-ui'

import App from './App.vue'
import router from './router'

// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
