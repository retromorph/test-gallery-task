import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Cart } from "../../cart/entities/cart.entity"

// in fact it's anonymous user
@Entity()
export class Customer {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @OneToOne(() => Cart)
  @JoinColumn()
  cart: Cart
}