<template>
  <div class="home flex flex-col">
    <header class="flex gap-2">
      <form action="get">
        <input type="text" placeholder="Pesquisar na Bíblia" />
      </form>
    </header>
    <div class="mt-12">
      <div v-if="!bibleStore.isLoading" class="bible">
        <div v-if="bibleStore.verses">
          <h1>
            {{ bibleStore.verses.book.name }}
          </h1>
          <p v-for="verse in bibleStore.verses.verses" :key="verse.number">
            <b class="chapter-number">
              {{ bibleStore.verses.chapter.number }}.
            </b>
            <b>{{ verse.number }}</b> {{ verse.text }}
          </p>
        </div>
      </div>
      <div v-else class="loading">
        <v-icon name="fa-bible" scale="2" animation="spin" speed="slow">
        </v-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBibleStore } from "@/stores/bible";

const bibleStore = useBibleStore();
</script>

<style lang="sass">
.bible
  display: flex
  flex-direction: column
  h1
    font-size: 2rem
    text-align: center
.home
  width: 630px

.loading
  height: 400px
  display: flex
  justify-content: center
  align-items: center
  color: #9f9f9f33

form
  width: 100%
  input
    width: 100%
    border-radius: 14px
    padding: 8px 18px

.bible
  @apply mt-4
  > h2
    text-align: center
    font-size: 2rem
  p
    margin-top: 1rem
    font-size: 1.25rem
    font-style: italic
    b
      margin-right: 1rem
      &.chapter-number
        position: absolute
        left: -25px
        opacity: .5
</style>
