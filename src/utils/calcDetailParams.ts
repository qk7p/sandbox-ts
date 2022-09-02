import { Detail } from "../data/Detail";
import {
  changeDetailArea,
  changeDetailPerimeter,
} from "../features/detail/detailCalcSlice";
import { store } from "../store/store";

export function calcDetailParams() {
  const detailWidth = store.getState().detail.width;
  const detailHeight = store.getState().detail.height;
  const marginWidth = store.getState().detail.marginWidth;
  const marginHeight = store.getState().detail.marginHeight;

  const detail = new Detail(
    detailWidth,
    detailHeight,
    marginWidth,
    marginHeight
  );

  const cleanWidth = detail.getCleanWidth();
  const cleanHeight = detail.getCleanHeight();

  const area = Number(((cleanWidth / 1000) * (cleanHeight / 1000)).toFixed(3));
  const perimeter = Number(
    ((detailWidth / 1000 + detailHeight / 1000) * 2).toFixed(2)
  );

  store.dispatch(changeDetailArea(area));
  store.dispatch(changeDetailPerimeter(perimeter));
}
