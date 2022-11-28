<script setup lang="ts">
import { reactive } from "vue";
import { useBibleStore } from "@/stores/bible";

const state = reactive({
  activeDropdown: false,
});

const bibleStore = useBibleStore();

async function getVerse(book: string, chapter: number) {
  await bibleStore.getVerses(book, chapter);
}
</script>

<template>
  <div class="bible-info">
    <div
      v-if="bibleStore.books.length"
      class="dropdown"
      :class="{ active: state.activeDropdown }"
    >
      <div class="header">
        <h3>Livro: {{ bibleStore.verses?.book.name }}</h3>
        <v-icon
          scale="1.5"
          :name="state.activeDropdown ? 'oi-chevron-up' : 'oi-chevron-down'"
          class="cursor-pointer"
          @click="state.activeDropdown = !state.activeDropdown"
        />
      </div>
      <div class="options">
        <button
          v-for="book in bibleStore.books"
          :key="book.abbrev.pt"
          :value="book.abbrev.pt"
          @click="bibleStore.getVerses(book.abbrev.pt)"
        >
          {{ book.name }}
        </button>
      </div>
    </div>
    <div v-if="bibleStore.verses" class="chapter-select">
      <h3>Capítulo: {{ bibleStore.verses.chapter.number }}</h3>
      <div>
        <v-icon
          v-if="bibleStore.verses.chapter.number !== 1"
          scale="1.5"
          name="oi-chevron-left"
          class="cursor-pointer"
          @click="
            getVerse(
              bibleStore.verses.book.abbrev.pt,
              bibleStore.verses.chapter.number - 1
            )
          "
        />
        <v-icon
          v-if="!bibleStore.isLastChapter"
          scale="1.5"
          name="oi-chevron-right"
          class="cursor-pointer"
          @click="
            getVerse(
              bibleStore.verses.book.abbrev.pt,
              bibleStore.verses.chapter.number + 1
            )
          "
        />
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.bible-info h3
  font-size: 1.25rem

.dropdown
  .header
    display: flex
    justify-content: space-between

  .options
    height: 0
    overflow: auto
    display: flex
    flex-direction: column
    align-items: flex-start
    transition: .2s
    button
      padding: 6px 10px
      border: none
      transition: all .3s
      text-align: left
      width: 100%
      &:hover
        background-color: rgba(255,255,255,.08)

  &.active .options
    height: 150px
.chapter-select
  display: flex
  justify-content: space-between
  align-items: center
</style>
