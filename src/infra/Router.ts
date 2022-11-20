import Product from '../domain/Product'
import { ApiServer } from './ApiServer'
import InMemoryProductRepository from './InMemoryProductRepository'

const repository = new InMemoryProductRepository()

export default class Router {

  constructor(readonly server: ApiServer) { }

  async init() {
    this.server.on('post', '/product', async (_params, body) => {
      const newProduct = new Product(body.name, body.category, body.price)
      await repository.insert(newProduct)
    })

    this.server.on('get', '/product/:id', async (params, _body) => {
      const product = await repository.get(params.id)
      return product
    })

    this.server.on('get', '/products', async (_params, _body) => {
      const products = await repository.getAll()
      return products
    })
  }
}


