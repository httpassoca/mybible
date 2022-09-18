<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container mx-auto mt-4">
    <header class="flex gap-2">
      <div class="flex gap-2">
        <v-icon scale="2" name="co-menu"> </v-icon>
        <v-icon scale="2" name="fa-user-circle"> </v-icon>
      </div>
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Sobre</RouterLink>
      </nav> -->
      <form action="get">
        <input type="text" placeholder="Pesquisar na Bíblia">
      </form>
    </header>
    <main class="mt-12">
      <RouterView />
    </main>
  </div>
</template>

<style lang="sass" scoped>
.container
  max-width: 630px
form
  width: 100%
  input
    width: 100%
    border-radius: 14px
    padding: 8px 18px
</style>