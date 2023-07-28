import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

const filtersInitialState = {
  status: statusFilters.all,
};

const favoriteSlice = createSlice({
  name: 'filtersFavorite',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
