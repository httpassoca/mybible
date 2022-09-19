import axios from '../http-common';

export default {
  getBooks() {
    return axios.get('/books').then(res => res.data)
  },
}