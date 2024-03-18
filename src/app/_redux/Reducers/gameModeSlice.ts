import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface CurrentModeState {
  value: string
}

const initialState: CurrentModeState = {
  value: 'Dialog',
}

export const CurrentModeSlice = createSlice({
  name: 'Current Mode',
  initialState,
  reducers: {
    setCurrentMode: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setCurrentMode } = CurrentModeSlice.actions

export default CurrentModeSlice.reducer
