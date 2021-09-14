import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Masterpiece {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  image: string

  @Column()
  name: string

  @Column()
  author: string

  @Column()
  creationYear: string

  @Column()
  price: string | null

  @Column()
  discountedPrice: string | null

  @Column()
  isSold: boolean
}
