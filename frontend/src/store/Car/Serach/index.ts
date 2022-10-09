import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../..";
import { Car as CarInterface } from "../../../Interface/Car";

export interface state {
  response?: CarInterface[];
  loading: Boolean;
  error?: any;
}

export const initialState: state = {
  loading: false,
};
// Slice
const slice = createSlice({
  name: "searchCars",
  initialState,
  reducers: {
    searchCarSuccess: (state, action) => {
      state.response = action.payload.result;
      state.loading = false;
    },
    searchCarFailed: (state, action) => {
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
const { searchCarSuccess, searchCarFailed, startLoading } = slice.actions;

export const searchCar =
  (car: CarInterface) => async (dispatch: AppDispatch) => {
    try {
      dispatch(startLoading());
      let url = "http://localhost:8080/car/filter";
      let isFirst = true;
      if (car.name) {
        url += isFirst ? "?" : "&";
        url += "name=" + car.name;
        isFirst = false;
      }
      if (car.manafactureName) {
        url += isFirst ? "?" : "&";
        url += "manafactureName=" + car.manafactureName;
        isFirst = false;
      }
      if (car.modelYear) {
        url += isFirst ? "?" : "&";
        url += "modelYear=" + car.modelYear;
        isFirst = false;
      }
      if (car.bodyType) {
        url += isFirst ? "?" : "&";
        url += "bodyType=" + car.bodyType;
        isFirst = false;
      }
      if (car.transmission) {
        url += isFirst ? "?" : "&";
        url += "transmission=" + car.transmission;
        isFirst = false;
      }
      if (car.color) {
        url += isFirst ? "?" : "&";
        url += "color=" + car.color;
        isFirst = false;
      }
      if (car.engineCapacity && car.engineCapacity !== -9999) {
        url += isFirst ? "?" : "&";
        url += "engineCapacity=" + car.engineCapacity;
        isFirst = false;
      }
      const res = await axios.get(url);
      dispatch(searchCarSuccess(res.data));
    } catch (e: any) {
      console.error(e.message);
      dispatch(searchCarFailed(e));
    }
  };
