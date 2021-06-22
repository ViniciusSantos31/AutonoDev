import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q='
})

export default axiosConfig;