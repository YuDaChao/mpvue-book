import Vue from 'vue'
import App from '@/App'
import store from '@/store'

import '../static/styles/reset.css'
import '../static/styles/iconfont.css'

Vue.config.productionTip = false
App.store = store
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
