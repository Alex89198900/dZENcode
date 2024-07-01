'use client';
import { configureStore,applyMiddleware } from '@reduxjs/toolkit';
import  ordersSlice from './Features/orders/orderSlice';
import  productstsSlice from './Features/products/productSlice';

export const store = configureStore({
    reducer: {
        orders: ordersSlice,
        products: productstsSlice
    },
    
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


;