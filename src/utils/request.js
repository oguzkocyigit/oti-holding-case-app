import Axios from 'axios'

const BOOKS = Axios.create({
  baseURL: 'https://5e7b5e3e0e0463001633320f.mockapi.io/api/',
  headers: {},
})

Axios.defaults.params = {}

export {
  BOOKS,
}