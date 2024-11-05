import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  bannerData: [],
  imageUrl: "",
};
export const movieverseSlice = createSlice({
  name: "movieverse",
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
  },
});
export const { setBannerData , setImageUrl} = movieverseSlice.actions;
export default movieverseSlice.reducer;
