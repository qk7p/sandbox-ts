import {
  changeDetailHeight,
  changeDetailWidth,
  changeMarginHeight,
  changeMarginWidth,
} from "../features/detail/detailSlice";
import {
  changeMaterialHeight,
  changeMaterialWidth,
  changePaddingHeight,
  changePaddingWidth,
} from "../features/flatMaterial/flatMaterialSlice";
import { store } from "../store/store";

export function clearInputParams() {
  store.dispatch(changeDetailWidth(0));
  store.dispatch(changeDetailHeight(0));
  store.dispatch(changeMarginWidth(0));
  store.dispatch(changeMarginHeight(0));
  store.dispatch(changeMaterialWidth(0));
  store.dispatch(changeMaterialHeight(0));
  store.dispatch(changePaddingWidth(0));
  store.dispatch(changePaddingHeight(0));
}
