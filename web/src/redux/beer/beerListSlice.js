import { createSlice } from "@reduxjs/toolkit";
// Імпортуємо операцію
import { fetchBeerList, toggleFavorite } from "./operations";

const beerListSlice = createSlice({
  // Ім'я слайсу
  name: "beerList",
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  // Додаємо обробку зовнішніх екшенів
  extraReducers: {
    [fetchBeerList.pending](state) {
      state.isLoading = true;
    },
    [fetchBeerList.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchBeerList.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [toggleFavorite.pending](state) {
      state.isLoading = true;
    },
    [toggleFavorite.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        (beerItem) => beerItem.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [toggleFavorite.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const beerListReducer = beerListSlice.reducer;
