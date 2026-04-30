<template>
  <v-app>
    <v-app-bar>
  <template v-slot:prepend>
    <img src="./img/Logo.svg" height="40" />
    <v-app-bar-title>Acme Inc.</v-app-bar-title>
  </template>



  

  <v-tabs  color="primary" class="ml-10">
    <v-tab to="/"><v-icon class="mr-2">mdi-home </v-icon> Home</v-tab>
    <v-tab to="/dashboard"><v-icon class="mr-2">mdi-view-dashboard </v-icon>Dashboard</v-tab>
    <v-tab to="/settings"><v-icon class="mr-2">mdi-cog</v-icon>Settings</v-tab>
  </v-tabs>

  <v-spacer />
  <v-avatar icon="$vuetify" image="./img/profilepic.jpg" size="47"></v-avatar>
   <v-icon>mdi-chevron-down</v-icon>
</v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
    <v-footer>
          <v-col class="text-center">
            © 2024 Acme Inc. All rights reserved.
          </v-col>
        </v-footer>
  </v-app>
</template>