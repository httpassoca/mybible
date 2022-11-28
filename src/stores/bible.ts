import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { TBook, TVerses } from "./types";
import bible from "@/services/bible";

export const useBibleStore = defineStore("bible", () => {
  const books = ref<TBook[]>([]);
  const book = ref<TBook>();
  const verses = ref<TVerses>();
  const isLoading = ref(true);
  const isLastChapter = computed(() => {
    return verses.value?.chapter.number === book.value?.chapters;
  });

  async function getBooks() {
    isLoading.value = true;
    books.value = await bible.getBooks();
    isLoading.value = false;
  }

  async function getVerses(pBook: string, chapter = 1) {
    isLoading.value = true;
    verses.value = await bible.getVerses(pBook, chapter);
    book.value = await bible.getBook(pBook);
    isLoading.value = false;
  }

  return { books, getBooks, getVerses, isLoading, verses, isLastChapter, book };
});
