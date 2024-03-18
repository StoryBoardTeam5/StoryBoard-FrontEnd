import { configureStore } from '@reduxjs/toolkit'

import refIDReducer from './Reducers/refIDSlice'
import DialogReducer from './Reducers/dialogSlice'
import DecisionReducer from './Reducers/decisionSlice'
import TypingTestReducer from './Reducers/typingTestSlice'
import CurrentModeReducer from './Reducers/gameModeSlice'
import BackgroundImageReducer from './Reducers/BackgroundImageSlice'

export const store = configureStore({
  reducer: {
    refID: refIDReducer,
    dialog: DialogReducer,
    decision: DecisionReducer,
    typingTest: TypingTestReducer,
    currentMode: CurrentModeReducer,
    backgroundImage: BackgroundImageReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
