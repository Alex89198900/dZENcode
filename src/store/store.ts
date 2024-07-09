'use client';
import { configureStore} from '@reduxjs/toolkit';
import  ordersSlice from './Features/orders/orderSlice';
import  productstsSlice from './Features/products/productSlice';
import triggerOrderSlice from './Features/trigger/orderTrigger';
import triggerProductSlice from './Features/trigger/productTrigger';
import productsOrderSlice from './Features/products/productsOrder'
import infoShowSlice from './Features/orders/infoShow'

export const store = configureStore({
    reducer: {
        orders: ordersSlice,
        products: productstsSlice,
        orderTrigger:triggerOrderSlice,
        productTrigger:triggerProductSlice,
        productsOrder:productsOrderSlice,
        infoShow:infoShowSlice
    },
    
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


;