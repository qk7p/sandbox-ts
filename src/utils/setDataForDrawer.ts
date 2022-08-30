import {
  changeMainQuantityByHeight,
  changeMainQuantityByWidth,
} from "../features/nestingEfficiency/nestingDetails";
import { FlatNester } from "../service/Nester/FlatNester";
import { store } from "../store/store";

export function setDataForDrawer(flatNester: FlatNester) {
  const mainQuantityByWidth = flatNester.mainQuantityByWidth;
  const mainQuantityByHeight = flatNester.mainQuantityByHeight;

  store.dispatch(changeMainQuantityByWidth(mainQuantityByWidth));
  store.dispatch(changeMainQuantityByHeight(mainQuantityByHeight));
}
