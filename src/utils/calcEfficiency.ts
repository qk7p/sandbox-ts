import { changeNestingEfficiency } from "../features/nestingEfficiency/nestingEfficiency";
import { store } from "../store/store";

export function calcEfficiency() {
  const detailArea = store.getState().detailCalc.detailArea;
  const materialArea = store.getState().materialCalc.materialArea;
  const detailQuantity = store.getState().currentNestingResult.result;
  const nestingArea = detailArea * detailQuantity;
  const result = Number(((nestingArea * 100) / materialArea).toFixed(2));
  store.dispatch(changeNestingEfficiency(result));
}
