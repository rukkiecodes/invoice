import { createSlice } from '@reduxjs/toolkit'

export const useFormSlice = createSlice({
    name: 'form',
    initialState: {
        order: '',
        date: '',
        billingAddress: '',
        shippingAddress: '',
        contact: '',
        salesRep: '',
        paymentTerms: '',
        items: [],
    },
    reducers: {
        setOrder: (state, action) => {
            state.order = action.payload
        },
        setDate: (state, action) => {
            state.date = action.payload
        },
        setBillingAddress: (state, action) => {
            state.billingAddress = action.payload
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
            state.paymentTerms = action.payload
        },
        setItems: (state, action) => {
            state.items = [...state.items, action.payload]
        },
    }
})

// Action creators are generated for each case reducer function
export const {
    setOrder,
    setDate,
    setBillingAddress,
    setShippingAddress,
    setContact,
    setSalesRep,
    setPaymentTerms,
    setItems
} = useFormSlice.actions

export default useFormSlice.reducer