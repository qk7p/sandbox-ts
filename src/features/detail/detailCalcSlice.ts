import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface DetailCalcState {
  detailArea: number;
  detailPerimeter: number;
}

const initialState: DetailCalcState = {
  detailArea: 0,
  detailPerimeter: 0,
};

export const detailCalcSlice = createSlice({
  name: "detailCalc",
  initialState,
  reducers: {
    changeDetailArea: (state, action: PayloadAction<number>) => {
      state.detailArea = action.payload;
    },
    changeDetailPerimeter: (state, action: PayloadAction<number>) => {
      state.detailPerimeter = action.payload;
    },
  },
});

export const { changeDetailArea, changeDetailPerimeter } =
  detailCalcSlice.actions;

export const selectDetailArea = (state: RootState) =>
  state.detailCalc.detailArea;
export const selectDetailPerimeter = (state: RootState) =>
  state.detailCalc.detailPerimeter;

export default detailCalcSlice.reducer;
