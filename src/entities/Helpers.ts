export default class Helpers {
    private static _instance: Helpers | null = null

    public static getInstance(): Helpers {
        if (!this._instance) {
            this._instance = new Helpers()
        }
        return this._instance
    }

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
            return v.toString(16)
        })
    }
}