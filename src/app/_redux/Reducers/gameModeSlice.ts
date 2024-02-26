import { createSlice } from '@reduxjs/toolkit'

export interface CurrentModeState {
  value: string
}

const initialState: CurrentModeState = {
  value: '',
}

export const CurrentModeSlice = createSlice({
  name: 'Current Mode',
  initialState,
  reducers: {
    nextMode: (state) => {
      state.value = state.value === 'Dialog' ? 'Decision' : state.value === 'Decision' ? 'TypingTest' : 'Dialog'
    },
  },
})

export const { nextMode } = CurrentModeSlice.actions

export default CurrentModeSlice.reducer
