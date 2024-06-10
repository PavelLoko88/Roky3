'use client'
import { sortDate } from '@/app/ApiFake/newApiFake';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: "news",
    sort: "sort by relevance",
    items: 6,
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
       addSearch: (state, action)=>{
        state.search = action.payload;
       }, 
       addItems: (state, action)=>{
        
        state.items = action.payload
        sortDate(state.sort, state.items);
       },
       addSort: (state, action)=>{
        state.sort = action.payload
        sortDate(state.sort, state.items);
       },
      

  },
})

export const { addSearch, addSort, addItems} = searchSlice.actions

export default  searchSlice.reducer
