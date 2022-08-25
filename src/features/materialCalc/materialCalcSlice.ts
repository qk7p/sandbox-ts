import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface MaterialCalcState {
  materialArea: number;
}

const initialState: MaterialCalcState = {
  materialArea: 0,
};

export const materialCalcSlice = createSlice({
  name: "materialCalc",
  initialState,
  reducers: {
    changeMaterialArea: (state, action: PayloadAction<number>) => {
      state.materialArea = action.payload;
    },
  },
});

export const { changeMaterialArea } = materialCalcSlice.actions;

export const selectMaterialArea = (state: RootState) =>
  state.materialCalc.materialArea;

export default materialCalcSlice.reducer;
