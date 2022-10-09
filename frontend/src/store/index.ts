import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import saveCar from "./Car/Save";
import searchCar from "./Car/Serach";

const reducer = combineReducers({
  saveCar,
  searchCar
  
});
const store = configureStore({
  reducer,
});
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
