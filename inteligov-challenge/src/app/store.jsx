import { configureStore } from '@reduxjs/toolkit';
import selectionReducer from './slices/selections';

export default configureStore({
  reducer: { reducerInteligov: selectionReducer }
});