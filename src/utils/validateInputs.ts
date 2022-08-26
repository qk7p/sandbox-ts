import { ToastType } from "../data/ToastItem";
import { store } from "../store/store";
import { clearResults } from "./clearResults";
import { makeToast } from "./makeToast";

export function validateInputs(): boolean {
  const detailWidth = store.getState().detail.width;
  const detailHeight = store.getState().detail.height;
  const marginWidth = store.getState().detail.marginWidth;
  const marginHeight = store.getState().detail.marginHeight;

  const materialWidth = store.getState().flatMaterial.height;
  const materialHeight = store.getState().flatMaterial.width;
  const paddingWidth = store.getState().flatMaterial.paddingWidth;
  const paddingHeight = store.getState().flatMaterial.paddingHeight;

  const detailMarginWidthCheck = detailWidth > marginWidth;
  const detailMarginHeightCheck = detailHeight > marginHeight;
  const materialPaddingWidthCheck = materialWidth > paddingWidth;
  const materialPaddingHeightCheck = materialHeight > paddingHeight;

  function validateNegativeParams() {
    if (
      detailWidth < 0 ||
      detailHeight < 0 ||
      materialWidth < 0 ||
      materialHeight < 0
    ) {
      makeToast("Нельзя вводить отрицательные значения", ToastType.Danger);
      return false;
    } else return true;
  }

  function validateEmptyParams() {
    if (
      detailWidth === 0 ||
      detailHeight === 0 ||
      materialWidth === 0 ||
      materialHeight === 0
    ) {
      makeToast("Введите значение", ToastType.Danger);
      return false;
    } else return true;
  }

  if (validateEmptyParams() && validateNegativeParams()) {
    if (!detailMarginWidthCheck) {
      makeToast(
        "Ширина детали не может быть меньше или равна вылету!",
        ToastType.Danger
      );
    }

    if (!detailMarginHeightCheck) {
      makeToast(
        "Высота детали не можеть быть меньше или равна вылету!",
        ToastType.Danger
      );
    }

    if (!materialPaddingWidthCheck) {
      makeToast(
        "Оступ по ширине не может быть больше или равен ширине заготовки!",
        ToastType.Danger
      );
    }

    if (!materialPaddingHeightCheck) {
      makeToast(
        "Оступ по ширине не может быть больше или равен ширине детали!",
        ToastType.Danger
      );
    }
  }

  if (
    detailMarginWidthCheck &&
    detailMarginHeightCheck &&
    materialPaddingWidthCheck &&
    materialPaddingHeightCheck
  ) {
    return true;
  } else {
    clearResults();
    return false;
  }
}
