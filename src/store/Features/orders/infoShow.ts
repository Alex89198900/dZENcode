'use client'

import {  createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';

interface infoShowState {
    value: boolean;
  }
  
  const initialState: infoShowState = {
    value: false,
  };
  
  export const infoShowSlice = createSlice({
    name: 'infoShow',
    initialState,
    reducers: {
        infoShowAdd: (state: { value: boolean }, action: PayloadAction<boolean>) => {
        state.value = action.payload;
      },
    },
  });
  
  export const { infoShowAdd } = infoShowSlice.actions;
  

  
  export default infoShowSlice.reducer;
 
  
  