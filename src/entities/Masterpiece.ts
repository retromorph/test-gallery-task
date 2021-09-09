export default class Masterpiece {
    private readonly _id: number
    private readonly _name: string
    private readonly _author: string
    private readonly _creationYear: string
    private readonly _price: string | null
    private _isSold: boolean

    // fabric method to create Masterpiece from data
    static fromData(data: JSON) {

    }

    constructor(id: number, name: string, author: string, creationYear: string, price: string | null, isSold: boolean) {
        this._id = id
        this._name = name
        this._author = author
        this._creationYear = creationYear
        this._price = price
        this._isSold = isSold
    }

    get id(): number {
        return this._id
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

    get isSold(): boolean {
        return this._isSold
    }

    set isSold(value: boolean) {
        this._isSold = value
    }
}