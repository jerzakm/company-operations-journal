import {Document, Schema}  from 'mongoose'

export interface Address {
    name: string
    street: string
    postCode: string
    city: string
}

const addressSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        postCode: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    })

export interface Product {
    symbol: string
    name: string
    price: number
    category: string
}

const productSchema = new Schema({
    symbol:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
})

export interface ProductEntry {
    quantity: number
    productState: string
    uuid: string
    product: Product
}

const productEntrySchema = new Schema(
    {
        quantity: {
            type: Number,
            required: true
        },
        productState: {
            type: String,
            required: true
        },
        uuid: {
            type: String,
            required: true
        },
        product: {
            type: productSchema,
            required: true
        }
    }
)

export interface AttachedDocument {
    type: string
    value: string
}

const attachedDocumentSchema = new Schema({
    type:{
        type: String,
        required: true
    },
    value:{
        type: String,
        required: true
    }
})

export interface ReturnReason {
  group: string
  name: string
  desc: string
}

const returnReasonSchema = new Schema({
  group:{
      type: String,
      required: true
  },
  name:{
      type: String,
      required: true
  },
  desc:{
      type: String,
      required: true
  },
})

export interface ReturnEntry extends Document {
    returnId: number
    timestamp: number
    address: Address
    saleSource: string
    attachedDocuments: AttachedDocument[]
    returnReason: ReturnReason
    pickupOrderId: number
    pickupOrderTimestamp: number
    productEntryList: ProductEntry[]
    movedTo: string
    resolved: boolean
    notepad: string
    changeHistory: string[]
}

const returnEntrySchema = new Schema({
  returnId: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Number,
    required: true
  },
  address: {
    type: addressSchema,
    required: true
  },
  saleSource: {
    type: String,
    required: true
  },
  attachedDocuments: {
    type: [attachedDocumentSchema],
    required: true
  },
  returnReason: {
    type: returnReasonSchema,
    required: true
  },
  pickupOrderId: {
    type: Number,
    required: false
  },
  pickupOrderTimestamp: {
    type: Number,
    required: false
  },
  productEntryList: {
    type: [productEntrySchema],
    required: true
  },
  movedTo: {
    type: String,
    required: false
  },
  resolved: {
    type: Boolean,
    required: true
  },
  notepad: { //TODO better notepad handling?
    type: String,
    required: true
  },
  changeHistory: { // TODO better
    type: [String],
    required: true
  }
})