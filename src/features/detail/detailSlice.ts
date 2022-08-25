import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface DetailState {
  width: number;
  height: number;
  marginWidth: number;
  marginHeight: number;
}

const initialState: DetailState = {
  width: 0,
  height: 0,
  marginWidth: 0,
  marginHeight: 0,
};

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    changeDetailWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
    changeDetailHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
    changeMarginWidth: (state, action: PayloadAction<number>) => {
      state.marginWidth = action.payload;
    },
    changeMarginHeight: (state, action: PayloadAction<number>) => {
      state.marginHeight = action.payload;
    },
  },
});

export const {
  changeDetailWidth,
  changeDetailHeight,
  changeMarginWidth,
  changeMarginHeight,
} = detailSlice.actions;

export const selectDetailWidth = (state: RootState) => state.detail.width;
export const selectDetailHeight = (state: RootState) => state.detail.height;
export const selectMarginWidth = (state: RootState) => state.detail.marginWidth;
export const selectMarginHeight = (state: RootState) =>
  state.detail.marginHeight;

export default detailSlice.reducer;
