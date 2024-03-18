import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface DialogState {
  _id: string
  Characters: {
    Position1: string
    Position2: string
    Position3: string
    Position4: string
  }
  Text: string
  Speaker: string
  BackgroundImage: string
  NextDialogRefID: string
  NextDecisionRefID: string
  Mode: string
}

const initialState: DialogState = {
  _id: '65b756abf47ca82d44ed9eba',
  Characters: {
    Position1: '',
    Position2: '',
    Position3: '',
    Position4: '',
  },
  Text: 'Loading...',
  Speaker: 'Loading...',
  BackgroundImage: '',
  NextDialogRefID: '',
  NextDecisionRefID: '',
}

export const DialogSlice = createSlice({
  name: 'Dialog Object',
  initialState,
  reducers: {
    setDialogObject: (state, action: PayloadAction<DialogState>) => {
      state._id = action.payload._id
      state.Characters = action.payload.Characters
      state.Text = action.payload.Text
      state.Speaker = action.payload.Speaker
      state.BackgroundImage = action.payload.BackgroundImage
      state.NextDialogRefID = action.payload.NextDialogRefID
      state.NextDecisionRefID = action.payload.NextDecisionRefID
    },
  },
})

export const { setDialogObject } = DialogSlice.actions

export default DialogSlice.reducer
