import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface BackgroundImageState {
  value: string
}

const initialState: BackgroundImageState = {
  value: 'cafe',
}

export const BackgroundImageSlice = createSlice({
  name: 'Background Image',
  initialState,
  reducers: {
    setBackgroundImage: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setBackgroundImage } = BackgroundImageSlice.actions

export default BackgroundImageSlice.reducer
