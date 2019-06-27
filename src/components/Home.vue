<template>
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
</template>

<script>
export default {}
</script>