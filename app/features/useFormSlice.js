import { createSlice } from '@reduxjs/toolkit'

export const useFormSlice = createSlice({
    name: 'form',
    initialState: {
        order: `SO-${(Math.floor(Math.random() * 900000) + 100000)}`,
        date: '',
        billingAddressTitle: '',
        billingAddress: '',
        shippingAddressTitle: '',
        shippingAddress: '',
        contact: '',
        salesRep: '',
        paymentTerms: [],
        items: [],
        subTotal: 0,
        vat: 0,
        total: 0,
        useVAT: true
    },
    reducers: {
        setOrder: (state, action) => {
            state.order = action.payload
        },
        setDate: (state, action) => {
            state.date = action.payload
        },
        setBillingAddressTitle: (state, action) => {
            state.billingAddressTitle = action.payload
        },
        setBillingAddress: (state, action) => {
            state.billingAddress = action.payload
        },
        setShippingAddressTitle: (state, action) => {
            state.shippingAddressTitle = action.payload
        },
        setShippingAddress: (state, action) => {
            state.shippingAddress = action.payload
        },
        setContact: (state, action) => {
            state.contact = action.payload
        },
        setSalesRep: (state, action) => {
            state.salesRep = action.payload
        },
        setPaymentTerms: (state, action) => {
            state.paymentTerms = [...state.paymentTerms, action.payload]
        },
        setItems: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        setSubTotal: (state, action) => {
            state.subTotal = action.payload
        },
        setVat: (state, action) => {
            state.vat = action.payload
        },
        setTotal: (state, action) => {
            state.total = action.payload
        },
        setUseVAT: (state, action) => {
            state.useVAT = action.payload
        },
        deleteTerm: (state, action) => {
            state.paymentTerms.splice(action.payload, 1)
        },
        deleteItem: (state, action) => {
            state.items.splice(action.payload, 1)
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    setOrder,
    setDate,
    setBillingAddress,
    setBillingAddressTitle,
    setShippingAddressTitle,
    setShippingAddress,
    setContact,
    setSalesRep,
    setPaymentTerms,
    setItems,
    setSubTotal,
    setVat,
    setTotal,
    setUseVAT,
    deleteTerm,
    deleteItem
} = useFormSlice.actions

export default useFormSlice.reducer