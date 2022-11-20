import { ProductRepository } from '../domain/ProductRepository'
import Product from '../domain/Product'

export default class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = []

  async get(id: string): Promise<Product | undefined> {
    return Promise.resolve(this.products.find((product) => product.id === id))
  }

  async insert(product: Product): Promise<void> {
    this.products.push(product)
    Promise.resolve()
  }

  async getAll(): Promise<Product[]> {
    return Promise.resolve(this.products)
  }
}
