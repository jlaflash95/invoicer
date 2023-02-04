import {create} from 'zustand'
import {persist} from 'zustand/middleware'


export const useList = create((set) => ({
        clients: [],
        selectedClientId: null,
        selectedClient: {},
        selectedClientInvoices: [],
        selectedInvoice: null,
    }))


export const useInvoiceCreation = create((set) => ({
    selectedClient: {},
    items: [],
    // hours: "",
    // rate: "",
    // tax: "",
    // total: "",
}))
