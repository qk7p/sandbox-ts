export enum ToastType {
  Success = "success",
  Danger = "danger",
  Info = "info",
}

export class ToastItem {
  id: number;
  message: string;
  toastType: ToastType;

  constructor(
    _id: number,
    _message: string,
    _toastType: ToastType
  ) {
    this.id = _id;
    this.message = _message;
    this.toastType = _toastType;
  }
}
