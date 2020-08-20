import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyAux4ewRkkl-hnTr0Oq8QdgWiykV0jU3FQ",
    authDomain: "vue-calendar-f9e3a.firebaseapp.com",
    databaseURL: "https://vue-calendar-f9e3a.firebaseio.com",
    projectId: "vue-calendar-f9e3a",
    storageBucket: "vue-calendar-f9e3a.appspot.com",
    messagingSenderId: "285764395724",
    appId: "1:285764395724:web:989a1cacdf57fce78d9869"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
