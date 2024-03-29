import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface RefIDState {
  value: string
}

const initialState: RefIDState = {
  value: '000000000000000000000012',
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
