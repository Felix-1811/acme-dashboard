<template>
  <v-main>
    <v-card style="margin: 32px 150px">
      <v-card-title class="font-weight-bold">Emojis</v-card-title>
      <v-card-subtitle>See the greatest Emojis!</v-card-subtitle>

      <v-card-text>

      
        <v-divider></v-divider>
        <h3>Random Emoji</h3>
        <div class="d-flex align-center">
          <span v-html="randomemoji?.htmlCode" style="font-size: 64px"></span>
          <span class="text-h6">{{ randomemoji?.name }}</span>
        </div>

   
        <v-divider></v-divider>
        <h3 class="">All Emojis</h3>
        <div class="" style="font-size: 28px; ">
          <span v-for="emoji in allemojis" v-html="emoji.htmlCode?.[0]"></span>
        </div>

        
        <v-divider ></v-divider>
        <h3>Search</h3>
        <v-text-field v-model="search" label="Search Emoji" variant="outlined" @input="searchEmojis"></v-text-field>
        <div style="font-size: 28px">
          <span v-for="emoji in searchResults" v-html="emoji.htmlCode?.[0]"></span>
        </div>

      </v-card-text>
    </v-card>
  </v-main>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const randomemoji = ref<any>()
const allemojis = ref<any>()

onMounted(async () => {
  const data1 = await fetch('https://emojihub.yurace.pro/api/random')
    randomemoji.value = await data1.json()
    const data2 = await fetch('https://emojihub.yurace.pro/api/all')
  allemojis.value = await data2.json()

})
const search = ref('')
const searchResults = ref<any[]>([])

const searchEmojis = async () => {
  if (!search.value) {
    searchResults.value = []
    return
  }
  const response = await fetch(`https://emojihub.yurace.pro/api/search?q=${search.value}`)
  const data = await response.json()
  searchResults.value = data.slice(0, 10)
}

</script>