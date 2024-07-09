import { ProductsType } from '@/types/types';
import {  createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';

const  initialState:ProductsType[] = []
const productsOrderSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProductsOrder: {
        reducer: (state, action: PayloadAction<ProductsType[]>) => {
           state.splice(0,state.length,...action.payload);

        },
        prepare: (data:ProductsType[]) => ({
          payload: data as ProductsType[],
        }),
      },
    },
  })
  
  export const { addProductsOrder } = productsOrderSlice.actions;

  export default  productsOrderSlice.reducer
  
 
  
  