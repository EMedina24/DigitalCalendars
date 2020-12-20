import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from "firebase";
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCDE0EXAl2Lwhlwh5I_oidHlV6VD9lQ194",
  authDomain: "calendar-social-c0295.firebaseapp.com",
  projectId: "calendar-social-c0295",
  storageBucket: "calendar-social-c0295.appspot.com",
  messagingSenderId: "43476282635",
  appId: "1:43476282635:web:0935334e4c31cbd136060e",
  databaseURL: "https://calendar-social-c0295.firebaseio.com",
 
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
