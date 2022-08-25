import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { currentNestingResultSlice } from "../features/currentNestingResult/currentNestingResultSlice";
import { detailSlice } from "../features/detail/detailSlice";
import { detailCalcSlice } from "../features/detailCalc/detailCalcSlice";
import { flatMaterialSlice } from "../features/flatMaterial/flatMaterialSlice";
import { materialCalcSlice } from "../features/materialCalc/materialCalcSlice";
import { toastListSlice } from "../features/toastList/toastListSlice";




export const store = configureStore({
  reducer: {
    detail: detailSlice.reducer,
    detailCalc: detailCalcSlice.reducer,
    flatMaterial: flatMaterialSlice.reducer,
    materialCalc: materialCalcSlice.reducer,
    currentNestingResult: currentNestingResultSlice.reducer,
    toastList: toastListSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
