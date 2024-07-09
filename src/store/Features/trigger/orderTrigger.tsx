'use client'

import {  createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';

interface triggerState {
    value: boolean;
  }
  
  const initialState: triggerState = {
    value: false,
  };
  
  export const triggerOrderSlice = createSlice({
    name: 'trigger',
    initialState,
    reducers: {
      triggerOrder: (state: { value: boolean }, action: PayloadAction<boolean>) => {
        state.value = action.payload;
      },
    },
  });
  
  export const { triggerOrder } = triggerOrderSlice.actions;
  

  
  export default triggerOrderSlice.reducer;
 
  
  