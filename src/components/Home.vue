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
        <h1>Home page</h1>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <p>This is a user's home page</p>
      </v-flex>
    </v-layout>
    <!-- -->
    <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="/home">Home</a>
  <a href="/">About</a>
  <a href="/getAccount">Get account</a>
  <a href="/updateAccount">Update account</a>
  <a href="/addAccount">Add account</a>
</div>
  </v-container>
  </v-app>
</template>

<script>
export default {
  data (){
    return {
      menuItems: [
          { title: 'Log out', path: '/logout' }
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