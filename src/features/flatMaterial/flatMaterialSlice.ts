import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface flatMaterialState {
  width: number;
  height: number;
  paddingWidth: number;
  paddingHeight: number;
}

const initialState: flatMaterialState = {
  width: 0,
  height: 0,
  paddingWidth: 0,
  paddingHeight: 0,
};

export const flatMaterialSlice = createSlice({
  name: "flatMaterial",
  initialState,
  reducers: {
    changeMaterialWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
    changeMaterialHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
    changePaddingWidth: (state, action: PayloadAction<number>) => {
      state.paddingWidth = action.payload;
    },
    changePaddingHeight: (state, action: PayloadAction<number>) => {
      state.paddingHeight = action.payload;
    },
  },
});

export const {
  changeMaterialWidth,
  changeMaterialHeight,
  changePaddingWidth,
  changePaddingHeight,
} = flatMaterialSlice.actions;

export const selectMaterialWidth = (state: RootState) =>
  state.flatMaterial.width;
export const selectMaterialHeight = (state: RootState) =>
  state.flatMaterial.height;
export const selectPaddingWidth = (state: RootState) =>
  state.flatMaterial.paddingWidth;
export const selectPaddingHeight = (state: RootState) =>
  state.flatMaterial.paddingHeight;

export default flatMaterialSlice.reducer;
