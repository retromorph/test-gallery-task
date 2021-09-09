export default class Cart {
    private readonly _productIds: Set<number> = new Set()

    addProduct(productId: number): void {
        this._productIds.add(productId)
    }

    removeProduct(productId: number): void {
        this._productIds.delete(productId)
    }

    productsAmount(): number {
        return this._productIds.size
    }
}