<template>

<v-app>
    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
  <router-link to="/home" tag="span" style="cursor: pointer">
    {{ appTitle }}
  </router-link>
</v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-toolbar-items class="hidden-xs-only">
  <v-btn
    flat
    v-for="item in menuItems"
    :key="item.title"
    :to="item.path">
    <v-icon left dark>{{ item.icon }}</v-icon>
    {{ item.title }}
  </v-btn>
</v-toolbar-items>
    </v-toolbar>
    
    <v-content>
      <router-view></router-view>
    </v-content>
    
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Welcome to Awesome App</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <blockquote class="blockquote text-xs-center">
          It's a basic Single Page application <br>
          with Google Firebase authentication
        </blockquote>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 class="text-xs-center" mt-5>
        <v-btn color="primary" to="/signup">Sign Up</v-btn>
        <v-btn to="/signin">Sign In</v-btn>
      </v-flex>
      <!-- -->
      
    </v-layout>
  </v-container>
 </v-app>
</template>

<script>
export default {
  data (){
    return {
      menuItems: [
          { title: 'Sign Up', path: '/signup' },
          { title: 'Sign In', path: '/signin' }
        ]
    }
  },
  computed: {
      appTitle () {
        return this.$store.state.appTitle
      }
    }
}
</script>