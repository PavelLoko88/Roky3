'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: "news",
    sort: "",
    items: 20,
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
       addSearch: (state, action)=>{
        state.search = action.payload
       },
       addSort: (state, action)=>{
        state.sort = action.payload
       },
       addItems: (state, action)=>{
        state.items = action.payload
       }

  },
})

export const { addSearch, addSort, addItems} = searchSlice.actions

export default  searchSlice.reducer
