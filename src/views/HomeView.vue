<template>
  <div class="flex justify-center">
    <select v-if="books.length">
      <option v-for="book in books">{{book?.name}}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref} from 'vue'
  import bible from '../services/bible'
  
  interface IBook {
    abbrev: {[k: string]: string};
    author: string;
    chapters: number;
    group: string;
    name: string;
    testament: string;
  }

  let books = ref<IBook[]>([])
  
  onMounted(async () => {
    books.value = await bible.getBooks();
  });
</script>
<style lang="sass">

</style>