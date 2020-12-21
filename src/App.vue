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

export default {
  name: 'App',
  components: {
    Calendar,
    login
  },
  data: () => ({
    //
  }),
};
</script>
