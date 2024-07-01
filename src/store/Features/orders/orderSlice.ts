'use client'
import { OrdersType } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';



const  initialState:OrdersType[] = []


const ordersSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      addOrders: {
        reducer: (state, action: PayloadAction<OrdersType[]>) => {
           state.splice(0,state.length,...action.payload);

        },
        prepare: (data: OrdersType[]) => ({
          payload: data as OrdersType[],
        }),
      },
    },
  })
  
  export const { addOrders } = ordersSlice.actions;

  export default  ordersSlice.reducer
  
 
  
  