export interface ReturnEntry {
    returnId: number
    timestamp: number
    address: Address
    saleSource: string
    attachedDocuments: AttachedDocument[]
    returnReason: {
        group: string
        name: string
        desc: string
    }
    pickupOrderId: number
    pickupOrderTimestamp: number
    productEntryList: ProductEntry[]
    movedTo: string
    resolved: boolean
    notepad: string
    changeHistory: string[]
}

export interface Address {
    name: string
    street: string
    postCode: string
    city: string
}

export interface ProductEntry {
    quantity: number
    productState: string
    uuid: string
    product: Product
}

export interface Product {
    symbol: string
    name: string
    price: number
    category: string
}

export interface AttachedDocument {
    type: string
    value: string
}