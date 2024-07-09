'use client'

import {  createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';

interface triggerProductState {
    value: boolean;
  }
  
  const initialState: triggerProductState = {
    value: false,
  };
  
  export const triggerProductSlice = createSlice({
    name: 'trigger',
    initialState,
    reducers: {
      triggerProduct: (state: { value: boolean }, action: PayloadAction<boolean>) => {
        state.value = action.payload;
      },
    },
  });
  
  export const { triggerProduct } = triggerProductSlice.actions;
  

  
  export default triggerProductSlice.reducer;
 
  
  