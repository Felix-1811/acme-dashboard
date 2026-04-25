<template>
  <v-app>
     
      <v-app-bar>
  <template v-slot:prepend>
    <img src="./img/Logo.svg" height="40" />
    <v-app-bar-title>Acme Inc.</v-app-bar-title>
  </template>



  

  <v-tabs  color="primary" class="ml-10">
    <v-tab value="home"><v-icon class="mr-2">mdi-home </v-icon> Home</v-tab>
    <v-tab value="dashboard"><v-icon class="mr-2">mdi-view-dashboard </v-icon>Dashboard</v-tab>
    <v-tab value="settings"><v-icon class="mr-2">mdi-cog</v-icon>Settings</v-tab>
  </v-tabs>

  <v-spacer />
  <v-avatar icon="$vuetify" image="./img/profilepic.jpg" size="47"></v-avatar>
   <v-icon>mdi-chevron-down</v-icon>
</v-app-bar>



    <v-main>
     
        <v-card style="margin: 32px 150px">
            <v-card-text>
                <v-card-title class="font-weight-bold" >Welcome back, John!</v-card-title>
                <v-card-subtitle>Manage your information and view the latest data below.</v-card-subtitle>
                
              <v-row class="mt-5 ml-5">
              <v-col cols="12" sm="5">
                <p> First Name</p>
                <v-text-field  placeholder="Enter first name"  variant="outlined" prepend-inner-icon="mdi-account" label="First Name" ></v-text-field>
              </v-col>
              <v-col cols="12" sm="5">
                 <p> Last Name</p>
                <v-text-field  placeholder="Enter last name" variant="outlined"  prepend-inner-icon="mdi-account"></v-text-field>
              </v-col>
                <v-col cols="12" sm="2">
             
                  <v-btn class="mt-12" color= "primary" size="x-large" rounded="lg" >
                    Submit
                  </v-btn>
                </v-col>
            </v-row>
              <v-data-table :headers="headers" :items="items" hide-default-footer>
              <template #item.threepoints>
                <v-icon>mdi-dots-vertical</v-icon>
              </template>
            </v-data-table>
                

          </v-card-text>
          
        </v-card>

    </v-main>
      <v-footer>
          <v-col class="text-center">
            © 2024 Acme Inc. All rights reserved.
          </v-col>
        </v-footer>
  </v-app>
</template>



<script lang="ts" setup>
    import { ref } from 'vue'
    const tab = ref('home')

     const items = [
    {
      ID: '1',
      Name: 'John Doe',
      Email: 'John.doe@example.com'
    },
    {
      ID: '2',
      Name: 'Jane Smith',
      Email: 'Jame.Smith@example.com'
    },
     {
      ID: '3',
      Name: 'Michael Johnson',
      Email: 'Michael.Johnson@example.com'
    },
     {
      ID: '4',
      Name: 'Emily Davis',
      Email: 'Emily.Davis@example.com'
    },
     {
      ID: '5',
      Name: 'William Brown',
      Email: 'Willian.Brown@example.com'
    },
  ]
  const headers = [
  { title: 'ID', key: 'ID' },
  { title: 'Name', key: 'Name' },
  { title: 'Email', key: 'Email' },
  { title: '', key: 'threepoints', sortable: false },
]
  
</script>
