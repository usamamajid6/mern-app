import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "..";

// Slice
const slice = createSlice({
  name: "fetchPosts",
  initialState: {
    posts: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchSuccess: (state, action) => {
      state.posts = action.payload;
    },
  },
});
export default slice.reducer;

// Actions
const { fetchSuccess } = slice.actions;

export const fetchPosts = () => async (dispatch: AppDispatch) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch(fetchSuccess(res.data));
  } catch (e: any) {
    return console.error(e.message);
  }
};
