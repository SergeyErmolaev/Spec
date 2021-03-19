// JS
import './js/'

// jquery
import * as $ from 'jquery';
// import 'jquery/dist/jquery.min.js'

// SCSS
import './assets/scss/main.scss'

// bootstrap
// import "./bootstrap/bootstrap.js"

// CSS (example)
// import './assets/css/main.css'
// import './assets/css/simplePagination.css'
// import './assets/css/pagination.css'

// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component('example-component', require('./components/Example.vue').default)

// Vue init
const app = new Vue({
  el: '#app'
})
