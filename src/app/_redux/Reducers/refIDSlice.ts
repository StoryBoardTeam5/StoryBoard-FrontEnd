import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface RefIDState {
  value: string
}

const initialState: RefIDState = {
  value: '65d17e012e042de20128c4d4',
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
