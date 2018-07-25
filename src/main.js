import Vue from 'vue'
import store from './store/store'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VTooltip,
  VCard,
  VForm,
  VAvatar,
  VTextField,
  VSelect,
  VCheckbox,
  VBtnToggle
} from 'vuetify'
import App from './App.vue'
import VueUploadComponent from 'vue-upload-component'

Vue.component('file-upload', VueUploadComponent)
require('../node_modules/vuetify/src/stylus/app.styl')

Vue.use(Vuetify, {
  iconfont: 'fa',
  components: {
    VCheckbox,
    VTooltip,
    VBtnToggle,
    VSelect,
    VCard,
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VForm,
    VTextField,
    VAvatar
  },
  theme: {
    primary: '#26C6DA',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
