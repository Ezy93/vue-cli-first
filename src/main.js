import Vue from 'vue'
import App from './App.vue'

/* dopo aver installato bootstrap tramite terminale bisogna importarlo o non funziona */
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
