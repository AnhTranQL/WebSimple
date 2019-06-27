<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar">
  <v-list>
    <v-list-tile
      v-for="item in menuItems"
      :key="item.title"
      :to="item.path">
      <v-list-tile-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>{{ item.title }}</v-list-tile-content>
    </v-list-tile>
  </v-list>
</v-navigation-drawer>

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
        <h1>Update account</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form>
          <v-layout column>
            <v-flex>
              <v-text-field
                name="id"
                label="ID"
                id="id"
                type="id"
                required></v-text-field>
            </v-flex>
            
            <v-flex class="text-xs-center" mt-5>
              <v-btn color="primary" type="submit">Update</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sidebar: false,
        menuItems: [
          { title: 'Get Account', path: '/getAccount' },
          { title: 'Update Account', path: '/updateAccount' },
          { title: 'Add Account', path: '/addAccount' }
        ]
      }
    },
    computed: {
      appTitle(){
        return this.$store.state.appTitle
      }
    }
  }
</script>

