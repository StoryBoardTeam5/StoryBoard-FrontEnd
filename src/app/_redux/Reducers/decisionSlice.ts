import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface DecisionState {
  _id: string
  ChoiceOne: {
    option: string
    TestRefID: string
  }
  ChoiceTwo: {
    option: string
    TestRefID: string
  }
  Question: string
}

const initialState: DecisionState = {
  _id: '65b756abf47ca82d44ed9eba',
  ChoiceOne: {
    option: 'Loading...',
    TestRefID: '',
  },
  ChoiceTwo: {
    option: 'Loading...',
    TestRefID: '',
  },
  Question: 'Loading...',
}

export const DecisionSlice = createSlice({
  name: 'Decision Object',
  initialState,
  reducers: {
    setDecisionObject: (state, action: PayloadAction<DecisionState>) => {
      state._id = action.payload._id
      state.ChoiceOne = action.payload.ChoiceOne
      state.ChoiceTwo = action.payload.ChoiceTwo
      state.Question = action.payload.Question
    },
  },
})

export const { setDecisionObject } = DecisionSlice.actions

export default DecisionSlice.reducer
