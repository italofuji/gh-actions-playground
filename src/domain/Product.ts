import { randomUUID } from 'crypto'

export default class Product {
  id: string
  name: string
  category: string
  price: number

  constructor(name: string, category: string, price: number) {
    this.id = randomUUID()
    this.name = name
    this.category = category
    this.price = price
  }
}
