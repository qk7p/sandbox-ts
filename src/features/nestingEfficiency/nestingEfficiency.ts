import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface NestingEfficiencyState {
  nestingEfficiency: number;
}

const initialState: NestingEfficiencyState = {
  nestingEfficiency: 0,
};

export const nestingEfficiencySlice = createSlice({
  name: "nestingEfficiency",
  initialState,
  reducers: {
    changeNestingEfficiency: (state, action: PayloadAction<number>) => {
      state.nestingEfficiency = action.payload;
    },
  },
});

export const { changeNestingEfficiency } = nestingEfficiencySlice.actions;

export const selectNesintEfficency = (state: RootState) =>
  state.nestingEfficiency.nestingEfficiency;

export default nestingEfficiencySlice.reducer;
