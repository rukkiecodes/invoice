import { configureStore } from '@reduxjs/toolkit'
import useFormSlice from './features/useFormSlice'

export const store = configureStore({
    reducer: {
        form: useFormSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})