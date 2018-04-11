import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import {
  routerMode
} from './config/env'
import './config/rem'
import FastClick from 'fastclick'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}

Vue.component('vin-compo', {
  template: `<div>A custom component!<div>{{msg}}</div></div>`,
  data: function () {
    return {
      msg: 'hi from custom component!'
    }
  }
})

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  }
})

const Child = {
  template: '<div>A <my-compo> component!将只在父组件模板中可用</div>'
}


new Vue({
  el: '#app',
  router,
  store,
//   components: {
//     // <my-compo> 将只在父组件模板中可用
//     'my-compo': Child
  }
})
