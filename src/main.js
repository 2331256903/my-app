import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
// import { Row, Button, Container } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import "./api/mock"

Vue.config.productionTip = false

//按需引入
/*Vue.use(Row)
Vue.use(Button)
Vue.use(Container)*/
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
