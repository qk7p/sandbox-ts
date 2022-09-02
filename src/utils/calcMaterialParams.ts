import { FlatMaterial } from "../data/FlatMaterial";
import { changeMaterialArea } from "../features/flatMaterial/flatMaterialCalcSlice";
import { store } from "../store/store";

export function calcMaterialParams() {
  const materialWidth = store.getState().flatMaterial.height;
  const materialHeight = store.getState().flatMaterial.width;
  const paddingWidth = store.getState().flatMaterial.paddingWidth;
  const paddingHeight = store.getState().flatMaterial.paddingHeight;

  const material = new FlatMaterial(
    materialWidth,
    materialHeight,
    paddingWidth,
    paddingHeight
  );

  const cleanWidth = material.getCleanWidth();
  const cleanHeight = material.getCleanHeight();

  const area = Number(((cleanWidth / 1000) * (cleanHeight / 1000)).toFixed(3));

  store.dispatch(changeMaterialArea(area));
}
