import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  needsAsyncLoader: false,
};

const { reducer } = createSlice({
  name: 'global',
  initialState,
  reducers: {},
});

export default reducer;
