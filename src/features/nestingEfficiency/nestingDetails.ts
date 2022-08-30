import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface NestingDetailsState {
  nestingEfficiency: number;
  mainQuantityByWidth: number;
  mainQuantityByHeight: number;
}

const initialState: NestingDetailsState = {
  nestingEfficiency: 0,
  mainQuantityByWidth: 0,
  mainQuantityByHeight: 0,
};

export const nestingDetailsSlice = createSlice({
  name: "nestingDetails",
  initialState,
  reducers: {
    changeNestingEfficiency: (state, action: PayloadAction<number>) => {
      state.nestingEfficiency = action.payload;
    },
    changeMainQuantityByWidth: (state, action: PayloadAction<number>) => {
      state.mainQuantityByWidth = action.payload;
    },
    changeMainQuantityByHeight: (state, action: PayloadAction<number>) => {
      state.mainQuantityByHeight = action.payload;
    },
  },
});

export const {
  changeNestingEfficiency,
  changeMainQuantityByWidth,
  changeMainQuantityByHeight,
} = nestingDetailsSlice.actions;

export const selectNesintEfficency = (state: RootState) =>
  state.nestingDetails.nestingEfficiency;
export const selectMainQuantityByWidth = (state: RootState) =>
  state.nestingDetails.mainQuantityByWidth;
export const selectMainQuantityByHeight = (state: RootState) =>
  state.nestingDetails.mainQuantityByHeight;

export default nestingDetailsSlice.reducer;
