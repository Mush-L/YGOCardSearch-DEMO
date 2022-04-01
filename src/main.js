import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
// import { store } from './store'

// 引入Element UI，qnmd，不会用，
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入 Axios
import Axios from 'axios'
import VueAxios from 'vue-axios'

// less，试图解决 css 污染全局的问题
// 没救了，解决不了
// import less from 'lsss'
Vue.use(Element)
Vue.use(VueAxios, Axios)

Vue.config.productionTip = false



// 启动配置 Vue
new Vue({
  render: h => h(App),
  router,
  // store
}).$mount('#app')
