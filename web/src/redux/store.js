import { configureStore } from "@reduxjs/toolkit";

import { beerListReducer } from './beer/beerListSlice'
import {filtersReducer} from './beer/filtersSlice'

export const store = configureStore({
  reducer: {
    beerList: beerListReducer,
    filters: filtersReducer,
  },
});