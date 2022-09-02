import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

export interface NestingDetailsState {
  nestingEfficiency: number;
  mainQuantityByWidth: number;
  mainQuantityByHeight: number;
  subQuantityByWidth: number;
  subQuantityByHeight: number;
  mainMaterialWidth: number;
  mainMaterialHeight: number;
  subMaterialWidth: number;
  subMaterialHeight: number;
  nestedBy: string;
}

const initialState: NestingDetailsState = {
  nestingEfficiency: 0,
  mainQuantityByWidth: 0,
  mainQuantityByHeight: 0,
  subQuantityByWidth: 0,
  subQuantityByHeight: 0,
  mainMaterialWidth: 0,
  mainMaterialHeight: 0,
  subMaterialWidth: 0,
  subMaterialHeight: 0,
  nestedBy: "",
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
    changeSubQuantityByWidth: (state, action: PayloadAction<number>) => {
      state.subQuantityByWidth = action.payload;
    },
    changeSubQuantityByHeight: (state, action: PayloadAction<number>) => {
      state.subQuantityByHeight = action.payload;
    },
    changeMainMaterialWidth: (state, action: PayloadAction<number>) => {
      state.mainMaterialWidth = action.payload;
    },
    changeMainMaterialHeight: (state, action: PayloadAction<number>) => {
      state.mainMaterialHeight = action.payload;
    },
    changeSubMaterialWidth: (state, action: PayloadAction<number>) => {
      state.subMaterialWidth = action.payload;
    },
    changeSubMaterialHeight: (state, action: PayloadAction<number>) => {
      state.subMaterialHeight = action.payload;
    },
    changeNestedBy: (state, action: PayloadAction<string>) => {
      state.nestedBy = action.payload;
    },
  },
});

export const {
  changeNestingEfficiency,
  changeMainQuantityByWidth,
  changeMainQuantityByHeight,
  changeSubQuantityByWidth,
  changeSubQuantityByHeight,
  changeMainMaterialWidth,
  changeMainMaterialHeight,
  changeSubMaterialWidth,
  changeSubMaterialHeight,
  changeNestedBy,
} = nestingDetailsSlice.actions;

export const selectNesintEfficency = (state: RootState) =>
  state.nestingDetails.nestingEfficiency;
export const selectMainQuantityByWidth = (state: RootState) =>
  state.nestingDetails.mainQuantityByWidth;
export const selectMainQuantityByHeight = (state: RootState) =>
  state.nestingDetails.mainQuantityByHeight;
export const selectSubQuantityByWidth = (state: RootState) =>
  state.nestingDetails.subQuantityByWidth;
export const selectSubQuantityByHeight = (state: RootState) =>
  state.nestingDetails.subQuantityByHeight;
export const selectMainMaterialWidth = (state: RootState) =>
  state.nestingDetails.mainMaterialWidth;
export const selectMainMaterialHeight = (state: RootState) =>
  state.nestingDetails.mainMaterialHeight;
export const selectSubMaterialWidth = (state: RootState) =>
  state.nestingDetails.subMaterialWidth;
export const selectSubMaterialHeight = (state: RootState) =>
  state.nestingDetails.subMaterialHeight;
export const selectNestedBy = (state: RootState) =>
  state.nestingDetails.nestedBy;

export default nestingDetailsSlice.reducer;
