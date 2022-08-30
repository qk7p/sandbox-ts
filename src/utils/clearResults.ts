import { changeCurrentNestingResult } from "../features/currentNestingResult/currentNestingResultSlice";
import {
  changeDetailArea,
  changeDetailPerimeter,
} from "../features/detailCalc/detailCalcSlice";
import { changeMaterialArea } from "../features/materialCalc/materialCalcSlice";
import { changeNestingEfficiency } from "../features/nestingEfficiency/nestingDetails";
import { store } from "../store/store";

export function clearResults() {
  store.dispatch(changeCurrentNestingResult(0));
  store.dispatch(changeDetailArea(0));
  store.dispatch(changeDetailPerimeter(0));
  store.dispatch(changeMaterialArea(0));
  store.dispatch(changeNestingEfficiency(0));
}
