<script setup lang="ts">

</script>

<template>
  <v-app>
    <v-main>
     
        <v-card d-flex  style="margin: 32px 150px">
            
            <v-card-title class="font-weight-bold">Good morning, John!</v-card-title>
            <v-card-subtitle> Mittwoch, 6. Mai 2026</v-card-subtitle>
            <v-row class =" pt-16 pl-16 pr-16" justify="center">
              <v-col cols="3">
                    <v-card>
                <v-card-text class="text-center">
                  <h2 class= "font-weight-bold"> 5</h2>
                     <h3 > Users</h3>
                </v-card-text>
              </v-card>  
              </v-col>
               <v-col cols="3">
                    <v-card>
                <v-card-text class="text-center">
                    <h2 class="font-weight-bold"> 3</h2>
                     <h3 > Depts</h3>
                </v-card-text>
              </v-card>  
              </v-col>
               <v-col cols="3">
                    <v-card >
                <v-card-text class="text-center">
                    <h2 class="font-weight-bold"> 8</h2>
                     <h3 > Tasks</h3>
                </v-card-text>
              </v-card>  
              </v-col>
        

            </v-row>
                    <v-row justify="center" class="pa-8">
          <v-btn color="primary" class="mr-4" to="/dashboard">
            <v-icon class="mr-2">mdi-view-dashboard</v-icon>
            Go to Dashboard
          </v-btn>
          <v-btn variant="outlined" to="/settings">
            <v-icon class="mr-2">mdi-account</v-icon>
            Edit Profile
          </v-btn>
        </v-row>
                    
        </v-card>

    </v-main>
  </v-app>
</template>
