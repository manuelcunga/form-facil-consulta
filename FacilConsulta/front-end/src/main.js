import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Vue from 'vue';
// import VueAlert from 'v'
import Vuevalidade from 'vuelidate';
import '../node_modules/nprogress/nprogress';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Vuevalidade)
    // Vue.use(VueAlert)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');