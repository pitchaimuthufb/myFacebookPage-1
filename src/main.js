
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/' (req,res) => req.send(process.env));
app.listen (port, () => console.log('server is running on port' + port));
