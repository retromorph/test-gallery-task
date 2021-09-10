export default class Company {
    private readonly _companyPhone: string
    private readonly _companyAddress: string
    private readonly _companyName: string

    constructor(companyPhone: string, companyAddress: string, companyName: string) {
        this._companyPhone = companyPhone;
        this._companyAddress = companyAddress;
        this._companyName = companyName;
    }

    get companyPhone(): string {
        return this._companyPhone;
    }

    get companyAddress(): string {
        return this._companyAddress;
    }

    get companyName(): string {
        return this._companyName;
    }
}