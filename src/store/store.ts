import { configureStore } from "@reduxjs/toolkit";
import { currentNestingResultSlice } from "../features/nestingDetails/currentNestingResultSlice";
import { detailSlice } from "../features/detail/detailSlice";
import { detailCalcSlice } from "../features/detail/detailCalcSlice";
import { flatMaterialSlice } from "../features/flatMaterial/flatMaterialSlice";
import { materialCalcSlice } from "../features/flatMaterial/flatMaterialCalcSlice";
import { nestingDetailsSlice } from "../features/nestingDetails/nestingDetails";
import { toastListSlice } from "../features/toastList/toastListSlice";

export const store = configureStore({
  reducer: {
    detail: detailSlice.reducer,
    detailCalc: detailCalcSlice.reducer,
    flatMaterial: flatMaterialSlice.reducer,
    materialCalc: materialCalcSlice.reducer,
    currentNestingResult: currentNestingResultSlice.reducer,
    toastList: toastListSlice.reducer,
    nestingDetails: nestingDetailsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
