<template>
  <div class="home">
    <div class="search-book">
      <div class="dropdown" :class="{ active: state.activeDropdown }" v-if="state.books.length">
        <div class="header">
          <span>Livro: {{ state.book.book.name }}</span>
          <v-icon scale="2" :name="state.activeDropdown ? 'oi-chevron-up' : 'oi-chevron-down'"
            @click="state.activeDropdown = !state.activeDropdown"> </v-icon>
        </div>
        <div class="options">
          <button v-for="bok in state.books" :value="bok.abbrev.pt" @click="getBook(bok.abbrev.pt)">{{ bok.name
          }}</button>
        </div>
      </div>
    </div>
    <div v-if="state.book" class="bible">
      <h2>
        {{ state.book.book.name }}
      </h2>
      <p v-for="verse in state.book.verses">
        <b>{{ verse.number }}</b> {{ verse.text }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import bible from '../services/bible'

interface IBook {
  abbrev: { [k: string]: string };
  author: string;
  chapters: number;
  group: string;
  name: string;
  testament: string;
}


const state = reactive({
  activeDropdown: true,
  book: null as any,
  books: [] as IBook[],
})

onMounted(async () => {
  state.books = await bible.getBooks();
  state.book = await bible.getChapter('gn');
});

async function getBook(book: string) {
  state.book = await bible.getChapter(book);
}
</script>

<style lang="sass">
.dropdown
  .header
    display: flex
    justify-content: space-between
    span
      font-size: 1.5rem
    
  .options
    height: 0
    overflow: auto
    display: flex
    flex-direction: column
    align-items: flex-start
    button
      padding: 6px 10px
      border: none
      transition: all .3s
      text-align: left
      width: 100%
      &:hover
        background-color: rgba(255,255,255,.4)

  &.active .options
    height: 150px

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

</style>