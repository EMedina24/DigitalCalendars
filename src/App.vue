<template>


  <v-app>
    <v-content>
       <router-view></router-view>
    </v-content>
   
    </v-app>
</template>

<script>

import Calendar from './components/Calendar.vue';
import login from './components/login.vue';
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Calendar,
    login
  },
 data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
     methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    }
  }
};
</script>
