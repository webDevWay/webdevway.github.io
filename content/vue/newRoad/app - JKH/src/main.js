//system imports
import Vue from 'vue';
import 'es6-promise/auto';
//Vuex
import Vuex from 'vuex';
// //Firebase
import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/messaging';
import 'firebase/storage';
// export const db = firebase.firestore();
//Bootstrap
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
//Store
import store from './Store/store.js'
//Components
import App from './App.vue';
import Login from './Components/Login.vue';
import Account from './Components/Account.vue';
import adminAccount from './Components/Adminaccount.vue';

Vue.component('login', Login);
Vue.component('account', Account);
Vue.component('admin-account', adminAccount);

Vue.use(Vuex);
Vue.use(VueFire);
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
    store,
    created() {
        const config = {
            apiKey: 'AIzaSyAD_tnNHwsRPz3tt0Dn3e1dWcWraUWQSFY',
            authDomain: 'testnewroad.firebaseapp.com',
            databaseURL: 'https://testnewroad.firebaseio.com',
            projectId: 'testnewroad',
            storageBucket: 'testnewroad.appspot.com',
            messagingSenderId: '681769695460'
            };
            firebase.initializeApp(config)
    },
  render: h => h(App)
});