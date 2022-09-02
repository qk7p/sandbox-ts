import { changeCurrentNestingResult } from "../features/nestingDetails/currentNestingResultSlice";
import {
  changeDetailArea,
  changeDetailPerimeter,
} from "../features/detail/detailCalcSlice";
import { changeMaterialArea } from "../features/flatMaterial/flatMaterialCalcSlice";
import { changeNestingEfficiency } from "../features/nestingDetails/nestingDetails";
import { store } from "../store/store";

export function clearResults() {
  store.dispatch(changeCurrentNestingResult(0));
  store.dispatch(changeDetailArea(0));
  store.dispatch(changeDetailPerimeter(0));
  store.dispatch(changeMaterialArea(0));
  store.dispatch(changeNestingEfficiency(0));
}
