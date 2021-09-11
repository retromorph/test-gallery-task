export default class Masterpiece {
    private readonly _id: number
    private readonly _image: string
    private readonly _name: string
    private readonly _author: string
    private readonly _creationYear: string
    private readonly _price: string | null
    private readonly _discountedPrice: string | null
    private _isSold: boolean

    // fabric method to create Masterpiece from data
    static fromData(data: any): Masterpiece {
        return new Masterpiece(data["id"], `@/assets/images/image-${data["id"]}.webp`, data["name"], data["author"], data["creationYear"], data["price"], data["discountedPrice"], data["isSold"])
    }

    constructor(id: number, image: string, name: string, author: string, creationYear: string, price: string | null, discountedPrice: string | null, isSold: boolean) {
        this._id = id
        this._image = image
        this._name = name
        this._author = author
        this._creationYear = creationYear
        this._price = price
        this._discountedPrice = discountedPrice
        this._isSold = isSold
    }

    get id(): number {
        return this._id
    }

    get image(): string {
        return this._image
    }

    get name(): string {
        return this._name
    }

    get author(): string {
        return this._author
    }

    get creationYear(): string {
        return this._creationYear
    }

    get price(): string | null {
        return this._price
    }

    get discountedPrice(): string | null {
        return this._discountedPrice;
    }

    get isSold(): boolean {
        return this._isSold
    }

    set isSold(value: boolean) {
        this._isSold = value
    }
}