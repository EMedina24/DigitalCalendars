<template>
  <v-app>
    

    <v-app-bar
      color="#d2202f"
      dark
      prominent
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Digital</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title >Logout</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

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
