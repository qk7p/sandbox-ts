import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToastItem } from "../../data/ToastItem";
import { RootState } from "../../store/store";

interface ToastListState {
  toastList: ToastItem[];
}

const initialState: ToastListState = {
  toastList: [],
};

export const toastListSlice = createSlice({
  name: "toastList",
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<ToastItem>) => {
      state.toastList.push(action.payload);
    },
    removeToast: (state, action: PayloadAction<number>) => {
      const index = state.toastList.findIndex((e) => e.id === action.payload);
      state.toastList.splice(index, 1);
    },
  },
});

export const { addToast, removeToast } = toastListSlice.actions;

export const selectToastList = (state: RootState) => state.toastList.toastList;

export default toastListSlice.reducer;
