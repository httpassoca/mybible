import axios from '../http-common';

export default {
  async getBook(book: string) {
    return axios.get(`/books/${book}`).then(res => res.data)
  },
  async getBooks() {
    return axios.get('/books').then(res => res.data)
  },
  async getChapter(book: string, chapter: number = 1) {
    return axios.get(`/verses/nvi/${book}/${chapter}`).then(res => res.data)
  },
}