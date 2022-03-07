import { createSlice } from '@reduxjs/toolkit'

export const selectionsSlice = createSlice({
  name: 'reducerInteligov',
  initialState: {
    csvFile: null
  },
  reducers: {
    csvFile: (state, action) => {
      state.csvFile = action.payload
    }
  }
})

export const { csvFile } = selectionsSlice.actions;

export default selectionsSlice.reducer;