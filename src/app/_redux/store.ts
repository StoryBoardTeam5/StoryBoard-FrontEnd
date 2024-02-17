import { configureStore } from '@reduxjs/toolkit'

import refIDReducer from './refIDSlice'

export const store = configureStore({
  reducer: {
    refID: refIDReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
