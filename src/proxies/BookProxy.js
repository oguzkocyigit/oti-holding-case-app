import { BaseProxy } from '@/proxies/BaseProxy'

export class BookProxy extends BaseProxy {
  constructor ({ parameters = {} } = {}) {
    super({
      endpoint: 'book',
      parameters,
    })
  }
}
