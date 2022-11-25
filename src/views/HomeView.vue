<template>
  <div class="home">
    <select v-if="books.length" v-model="selectedBook" @change="getBook()">
      <option v-for="bok in books" :value="bok.abbrev.pt">{{ bok.name }}</option>
    </select>
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

let books = ref<IBook[]>([])
let selectedBook = ref<string>('');
const state = reactive({
  book: null as any,
})

onMounted(async () => {
  books.value = await bible.getBooks();
});

async function getBook() {
  state.book = await bible.getChapter(selectedBook.value);
}
</script>

<style lang="sass">
select
  color: black
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