<template>
  <v-main>
    <div class="d-flex" style="gap: 24px; padding: 32px">

      <!-- Linke Leiste -->
      <v-card width="220">
        <v-list>
          <v-list-item
            title="Profile Settings"
            prepend-icon="mdi-account"
            :active="activeTab === 'profile'"
            @click="activeTab = 'profile'"
            color="primary"
          ></v-list-item>
          <v-list-item
            title="Login & Security"
            prepend-icon="mdi-lock"
            :active="activeTab === 'security'"
            @click="activeTab = 'security'"
            color="primary"
          ></v-list-item>
        </v-list>
      </v-card>

      <!-- Rechter Inhalt -->
      <v-card style="flex: 1"  max-width: 300px>

        <div v-if="activeTab === 'profile'">
          <v-card-title class="font-weight-bold mt-4">Profile-Settings</v-card-title>
          <v-card-text>
            <v-avatar icon="$vuetify" image="../img/profilepic.jpg" size="80"></v-avatar>

            <div class="d-flex justify-space-between align-center py-3">
              <div>
                <div class="text-caption text-grey">Department</div>
                <div>HR</div>
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
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
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
                <div>N/A</div>
              </div>
              <v-btn variant="text" color="primary">Edit</v-btn>
            </div>
            <v-divider></v-divider>
          </v-card-text>
        </div>

        <div v-if="activeTab === 'security'">
          <v-card-title class="font-weight-bold mt-4">Login & Security</v-card-title>
          <v-card-text>
            <div class="d-flex justify-space-between align-center py-3">
              <div>
                <div class="text-caption text-grey">Password</div>
                <div>••••••••</div>
              </div>
              <v-btn variant="text" color="primary">Edit</v-btn>
            </div>
            <v-divider></v-divider>

            <div class="d-flex justify-space-between align-center py-3">
              <div>
                <div class="text-caption text-grey">Two-Factor Authentication</div>
                <div>Disabled</div>
              </div>
              <v-btn variant="text" color="primary">Enable</v-btn>
            </div>
            <v-divider></v-divider>
          </v-card-text>
        </div>

      </v-card>
    </div>
  </v-main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeTab = ref('profile')
</script>