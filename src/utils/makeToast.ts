import { ToastItem, ToastType } from "../data/ToastItem";
import { addToast } from "../features/toastList/toastListSlice";
import { store } from "../store/store";
import { getId } from "./getId";

export function makeToast(message: string, toastType: ToastType) {
  const newToast = new ToastItem(getId(), message, toastType);
  store.dispatch(addToast(JSON.stringify(newToast)));
}
