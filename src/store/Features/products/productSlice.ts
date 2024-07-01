'use client'
import { ProductsType } from '@/types/types';
import {  createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';

const  initialState:ProductsType[] = []
const productstsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      addProducts: {
        reducer: (state, action: PayloadAction<ProductsType[]>) => {
           state.splice(0,state.length,...action.payload);

        },
        prepare: (data:ProductsType[]) => ({
          payload: data as ProductsType[],
        }),
      },
    },
  })
  
  export const { addProducts } = productstsSlice.actions;

  export default  productstsSlice.reducer
  
 
  
  