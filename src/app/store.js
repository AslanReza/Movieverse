import { configureStore } from "@reduxjs/toolkit";
import { movieverseSlice } from "./movieverseSlice";
export const store = configureStore({
  reducer: {
    movieverseData: movieverseSlice.reducer,
  },
});
