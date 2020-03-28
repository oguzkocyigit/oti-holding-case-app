import qs from 'qs'
import { BOOKS } from '../utils/request'

const datableTypes = ['post', 'put']

const ApiMap = new Map()
ApiMap.set('book', BOOKS)

export class BaseProxy {
  constructor ({ api = 'book', endpoint, parameters = { headers: {} } }) {
    this.$http = ApiMap.get(api) || BOOKS
    this.endpoint = endpoint
    this.parameters = parameters
    this.config = {}
  }

  submit (requestType, url, data = null) {
    return new Promise((resolve, reject) => {
      const args = [url + this.getParameterString(), this.config]
      if (datableTypes.includes(requestType)) {
        args.splice(1, 0, data)
      }
      this.$http[requestType](...args)
        .then((response) => {
          resolve(response.data)
        })
        .catch(({ response }) => {
          if (response) {
            reject(response.data)
          } else {
            reject(response)
          }
        })
    })
  }

  all () {
    return this.submit('get', `/${this.endpoint}`)
  }

  find ({ id }) {
    return this.submit('get', `/${this.endpoint}/${id}`)
  }

  create ({ item }) {
    return this.submit('post', `/${this.endpoint}`, item)
  }

  update ({ id, item }) {
    if (id) {
      return this.submit('put', `/${this.endpoint}/${id}`, item)
    }
    return this.submit('put', `/${this.endpoint}`, item)
  }

  delete ({ id }) {
    return this.submit('delete', `/${this.endpoint}/${id}`)
  }

  getParameterString () {
    const parameterStrings = qs.stringify(this.parameters, { encodeValuesOnly: true })

    return parameterStrings.length === 0 ? '' : `?${parameterStrings}`
  }
}