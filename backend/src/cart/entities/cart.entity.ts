import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number

  @Column("int", { array: true })
  readonly productIds: Set<number> = new Set()

  addProduct(productId: number): void {
    this.productIds.add(productId)
  }

  removeProduct(productId: number): void {
    this.productIds.delete(productId)
  }

  isProductInCart(productId: number): boolean {
    return this.productIds.has(productId)
  }
}