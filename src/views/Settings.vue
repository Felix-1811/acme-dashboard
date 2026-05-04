<template>
  <v-main style="padding-top: 32px;" >
   <div class="d-flex" > 
<v-card class="mx-auto" max-width="750" >      <v-card-title class="font-weight-bold mt-4">Profile-Settings</v-card-title>

      <v-card-text>


      <v-avatar icon="$vuetify" image="../img/profilepic.jpg" size="80"></v-avatar>



         <div class="d-flex justify-space-between align-center py-3">
          <div>
            <div class="text-caption text-grey">Department</div>
            <div> HR </div>
          </div>
          
          <v-btn variant="text" color="primary">Edit</v-btn>

        </div>
        <v-divider></v-divider>

        <div class="d-flex justify-space-between align-center py-3">
          <div>
            <div class="text-caption text-grey">Name</div>
            <div>John Doe</div>
          </div>
          <v-btn variant="text" color="primary">Edit</v-btn>
        </div>
        <v-divider></v-divider>
     <div class="d-flex justify-space-between align-center py-3">
          <div>
            <div class="text-caption text-grey">Description</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos expedita inventore error voluptatem accusantium eveniet doloribus, soluta necessitatibus deserunt dicta dolore impedit asperiores similique quam consequatur ratione quaerat, iure commodi.</div>
          </div>
          <v-btn variant="text" color="primary">Edit</v-btn>
        </div>
        <v-divider></v-divider>
        <div class="d-flex justify-space-between align-center py-3">
          <div>
            <div class="text-caption text-grey">Country</div>
            <div>Austria</div>
          </div>
          <v-btn variant="text" color="primary">Edit</v-btn>
        </div>
        <v-divider></v-divider>

        <div class="d-flex justify-space-between align-center py-3">
          <div>
            <div class="text-caption text-grey">Email</div>
            <div>john.doe@example.com</div>
          </div>
          <v-btn variant="text" color="primary">Edit</v-btn>
        </div>
        <v-divider></v-divider>

        <div class="d-flex justify-space-between align-center py-3">
          <div>
            <div class="text-caption text-grey">Phone number</div>
            <div> N/A</div>
          </div>
          <v-btn variant="text" color="primary">Edit</v-btn>
        </div>
        <v-divider></v-divider>
        
        <v-divider></v-divider>
      </v-card-text>
    </v-card>
    </div>
  </v-main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const darkMode = ref('Darkmode')
</script>