import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import './assets/index.css'
//使用ElementUI饿了么UI
Vue.use(ElementUI);
//封装axios
Vue.prototype.$http = axios
//让ajax携带cookie
axios.defaults.baseURL = 'http://music.cyrilstudio.top/'

axios.defaults.withCredentials = true

//添加拦截器，防止状态码 304
axios.interceptors.request.use(
      //axios 拦截器统一在接口增加时间戳参数，防止走缓存。
      config => {
            if (config.method == 'post') {
                  config.data = {
                        ...config.data,
                        _t: Date.parse(new Date()) / 1000
                  }
            } else if (config.method == 'get') {
                  config.params = {
                        _t: Date.parse(new Date()) / 1000,
                        ...config.params
                  }
            }
            return config
      },
      function (error) {
            return Promise.reject(error)
      }
)
Vue.config.productionTip = false
new Vue({
      router,
      render: h => h(App)
}).$mount('#app')
