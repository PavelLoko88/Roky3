'use client'

import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit'
import searchSlice from './utils/searchRedux/searchSlice'

const rootReducer = combineReducers({
        search: searchSlice,

})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({
    //     thunk: {
    //       extraArgument:{ serviceApi },
    //     }
     
    //   }),
  }
)
   
}