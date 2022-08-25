import { Detail } from "../data/Detail";
import { FlatMaterial } from "../data/FlatMaterial";
import { changeCurrentNestingResult } from "../features/currentNestingResult/currentNestingResultSlice";
import { FlatNester } from "../service/Nester/FlatNester";
import { store } from "../store/store";

export function nestCurrentDetail() {
  const detailWidth = store.getState().detail.width;
  const detailHeight = store.getState().detail.height;
  const marginWidth = store.getState().detail.marginWidth;
  const marginHeight = store.getState().detail.marginHeight;

  const materialWidth = store.getState().flatMaterial.height;
  const materialHeight = store.getState().flatMaterial.width;
  const paddingWidth = store.getState().flatMaterial.paddingWidth;
  const paddingHeight = store.getState().flatMaterial.paddingHeight;

  const currentDetail = new Detail(
    detailWidth,
    detailHeight,
    marginWidth,
    marginHeight
  );

  const currentMaterial = new FlatMaterial(
    materialWidth,
    materialHeight,
    paddingWidth,
    paddingHeight
  );

  const flatNester = new FlatNester(currentDetail, currentMaterial);

  const result = flatNester.nest();

  store.dispatch(changeCurrentNestingResult(result));
}
