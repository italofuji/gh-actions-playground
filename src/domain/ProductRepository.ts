import Product from "./Product";

export interface ProductRepository {
  insert(product: Product): Promise<void>
  get(id: string): Promise<Product | undefined>
  getAll(): Promise<Product[]>
}
