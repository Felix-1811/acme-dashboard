<template>
  <v-main>
<v-card class="mx-auto mt-4" max-width="700">
        <div class="text-center">
      <v-card-title class="font-weight-bold mt-4">Settings</v-card-title>        
      <v-card-subtitle>Edit the page to your personal preferences.</v-card-subtitle>
      </div>

      <v-card-text>
    <div class="mx-auto" style="max-width: 600px">
          <div class="d-flex justify-center mb-2">
            <v-switch
              v-model="darkMode"
              :label="`Mode: ${darkMode}`"
              false-value="Darkmode"
              true-value="Lightmode"
              color="primary"
              hide-details
            ></v-switch>
          </div>

          <div class="d-flex justify-center mb-4">
            <v-switch
              label="Benachrichtigungen"
              color="primary"
              hide-details
            ></v-switch>
          </div>

          <v-file-input
            accept="image/png, image/jpeg, image/bmp"
            label="New profile picture"
            placeholder="Upload new profile picture"
            prepend-icon="mdi-camera"
            class="mb-4"
          ></v-file-input>

          <v-select
            label="Sprache"
            :items="['Deutsch', 'English', 'Français']"
            variant="outlined"
            prepend-icon="mdi-translate"
            class="mb-2"
          ></v-select>

          <div class="text-body-2 mb-1">Text size</div>
          <v-slider
            step="10"
            thumb-label
            append-icon="mdi-magnify-plus-outline"
            prepend-icon="mdi-magnify-minus-outline"
            class="mb-4"
          ></v-slider>

          <div class="text-center">
            <v-btn prepend-icon="mdi-content-save" color="primary">
              Save Changes
            </v-btn>
          </div>

        </div>
      </v-card-text>
    </v-card>
  </v-main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const darkMode = ref('Darkmode')
</script>