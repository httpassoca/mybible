import { ref } from "vue";
import { defineStore } from "pinia";
import type { TBook, TVerses } from "./types";
import bible from "@/services/bible";

export const useBibleStore = defineStore("bible", () => {
  const books = ref<TBook[]>([]);
  const verses = ref<TVerses>();
  const isLoading = ref(true);
  // const doubleCount = computed(() => count.value * 2);

  async function getBooks() {
    isLoading.value = true;
    books.value = await bible.getBooks();
    isLoading.value = false;
  }

  async function getVerses(book: string, chapter = 1) {
    isLoading.value = true;
    verses.value = await bible.getVerses(book, chapter);
    isLoading.value = false;
  }

  return { books, getBooks, getVerses, isLoading, verses };
});
