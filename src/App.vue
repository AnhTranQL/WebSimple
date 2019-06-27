<template>
  <v-app color= "powderblue">
    <v-navigation-drawer v-model="sidebar">
  <v-list>
    <v-list-tile
      v-for="item in menuItems"
      :key="item.title"
      :to="item.path">
      <v-list-tile-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content >{{ item.title }}</v-list-tile-content>
    </v-list-tile>
  </v-list>
</v-navigation-drawer>

    <v-toolbar app >
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
  <router-link to="/" tag="span" style="cursor: pointer">
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
    <v-icon left dark >{{ item.icon }}</v-icon>
    {{ item.title }}
  </v-btn>
</v-toolbar-items>
    </v-toolbar>
    
    <v-content>
      <router-view></router-view>
    </v-content>
    <sidebar-menu
        :menu="menu"
        :collapsed="collapsed"
        :theme="selectedTheme"
        :show-one-child="true"
        @collapse="onCollapse"
        @item-click="onItemClick"
      />


<!-- -->
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="/home">Home</a>
  <a href="/">About</a>
  <a href="/getAccount">Get account</a>
  <a href="/updateAccount">Update account</a>
  <a href="/addAccount">Add account</a>
</div>


<!-- Use any element to open the sidenav -->
<span onclick="openNav()">open</span>
  </v-app>
  
</template>

<script>
  export default {
    data () {
      return {
        // appTitle: 'Awesome App',
        menu:[
           {href: '/home',title: 'Home'},
            {href: '/',title: 'My awesome app'},
            {href: '/getAccount', title: 'Get account by ID'},
            {href: '/updateAccount', title: 'Update account'},
            {href: '/addAccount', title: 'Add account'}],
        collapsed: false,
        themes: ['', 'white-theme'],
        selectedTheme: 'white-theme',
        sidebar: false,
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
    },
    methods: {
    onCollapse (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    },
    onItemClick (event, item) {
      console.log('onItemClick')
    }
  }
  }

</script>

<style>

body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 100%;
  width: 240px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: powderblue;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 6px 6px 32px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 200px; /* Same as the width of the sidenav */
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>