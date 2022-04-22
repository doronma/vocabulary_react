import { configureStore } from '@reduxjs/toolkit';
import wordsReducer from './model/words/wordsSlice';


export const store = configureStore({
  reducer: {words: wordsReducer},
});