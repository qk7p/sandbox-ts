import {
  changeMainMaterialHeight,
  changeMainMaterialWidth,
  changeMainQuantityByHeight,
  changeMainQuantityByWidth,
  changeNestedBy,
  changeSubMaterialHeight,
  changeSubMaterialWidth,
  changeSubQuantityByHeight,
  changeSubQuantityByWidth,
} from "../features/nestingDetails/nestingDetails";
import { FlatNester } from "../service/Nester/FlatNester";
import { store } from "../store/store";

export function setDataForDrawer(flatNester: FlatNester) {
  const mainQuantityByWidth = flatNester.mainQuantityByWidth;
  const mainQuantityByHeight = flatNester.mainQuantityByHeight;
  const subQuantityByWidth = flatNester.subQuantityByWidth;
  const subQuantityByHeight = flatNester.subQuantityByHeight;
  const mainMaterialWidth = flatNester.mainMaterialWidth;
  const mainMaterialHeight = flatNester.mainMaterialHeight;
  const subMaterialWidth = flatNester.subMaterialWidth;
  const subMaterialHeight = flatNester.subMaterialHeight;
  const nestedBy = flatNester.nestedBy;

  store.dispatch(changeMainQuantityByWidth(mainQuantityByWidth));
  store.dispatch(changeMainQuantityByHeight(mainQuantityByHeight));
  store.dispatch(changeSubQuantityByWidth(subQuantityByWidth));
  store.dispatch(changeSubQuantityByHeight(subQuantityByHeight));
  store.dispatch(changeMainMaterialWidth(mainMaterialWidth));
  store.dispatch(changeMainMaterialHeight(mainMaterialHeight));
  store.dispatch(changeSubMaterialWidth(subMaterialWidth));
  store.dispatch(changeSubMaterialHeight(subMaterialHeight));
  store.dispatch(changeNestedBy(nestedBy));
}
