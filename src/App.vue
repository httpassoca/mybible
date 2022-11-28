<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { useBibleStore } from "@/stores/bible";
import BibleInfo from "./components/BibleInfo.vue";

const bibleStore = useBibleStore();

onMounted(async () => {
  await bibleStore.getBooks();
  await bibleStore.getVerses("gn");
});
</script>

<template>
  <main class="container flex justify-center gap-4 mx-auto mt-6">
    <BibleInfo />
    <RouterView />
    <div class="flex gap-2">
      <v-icon scale="2" name="co-menu"> </v-icon>
      <v-icon scale="2" name="fa-user-circle"> </v-icon>
    </div>
  </main>
</template>
