import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface TypingTestState {
  _id: string
  challenge: string
  timer: number
  text: string
  prompt: string
  maxpoints: number
  NextDialogRefID: string
}

const initialState: TypingTestState = {
  _id: '',
  challenge: '',
  timer: 10,
  text: '',
  prompt: '',
  maxpoints: 0,
  NextDialogRefID: '',
}

export const TypingTestSlice = createSlice({
  name: 'TypingTest Object',
  initialState,
  reducers: {
    setTypingTestObject: (state, action: PayloadAction<TypingTestState>) => {
      state._id = action.payload._id
      state.challenge = action.payload.challenge
      state.timer = action.payload.timer
      state.text = action.payload.text
      state.prompt = action.payload.prompt
      state.maxpoints = action.payload.maxpoints
      state.NextDialogRefID = action.payload.NextDialogRefID
    },
  },
})

export const { setTypingTestObject } = TypingTestSlice.actions

export default TypingTestSlice.reducer
