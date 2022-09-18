<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container mx-auto mt-4">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Sobre</RouterLink>
      </nav>
      <form action="get">
        <input type="text">
      </form>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="sass" scoped>
.container
  max-width: 630px
</style>