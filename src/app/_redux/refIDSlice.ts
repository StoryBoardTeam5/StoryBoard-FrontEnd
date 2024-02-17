import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface RefIDState {
  value: string
}

const initialState: RefIDState = {
  value: '65b756abf47ca82d44ed9eba',
}

export const refIDSlice = createSlice({
  name: 'referenceID',
  initialState,
  reducers: {
    setRefID: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setRefID } = refIDSlice.actions

export default refIDSlice.reducer
