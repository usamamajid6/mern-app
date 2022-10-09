import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../..";
import { Car as CarInterface } from "../../../Interface/Car";
// Slice
const slice = createSlice({
  name: "saveCar",
  initialState: {
    response: null,
    loading: false,
    error: null,
  },
  reducers: {
    saveCarSuccess: (state, action) => {
      state.response = action.payload;
      state.loading = false;
    },
    saveCarFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    startLoading: (state) => {
      state.loading = true;
    },
  },
});
export default slice.reducer;

// Actions
const { saveCarSuccess, saveCarFailed, startLoading } = slice.actions;

export const saveCar = (car: CarInterface) => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading());
    const res = await axios.post("http://localhost:8080/car", car);
    dispatch(saveCarSuccess(res.data));
  } catch (e: any) {
    console.error(e.message);
    dispatch(saveCarFailed(e));
  }
};
