import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface CurrentNestingResultState {
  result: number;
}

const initialState: CurrentNestingResultState = {
  result: 0,
};

export const currentNestingResultSlice = createSlice({
  name: "currentNestingResult",
  initialState,
  reducers: {
    changeCurrentNestingResult: (state, action: PayloadAction<number>) => {
      state.result = action.payload;
    },
  },
});

export const { changeCurrentNestingResult } = currentNestingResultSlice.actions;

export const selectDetailWidth = (state: RootState) =>
  state.currentNestingResult.result;

export default currentNestingResultSlice.reducer;
