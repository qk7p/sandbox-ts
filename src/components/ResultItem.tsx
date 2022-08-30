import { ToastType } from "../data/ToastItem";
import "../style/NestingPage/ResultItem.css";
import { makeToast } from "../utils/makeToast";

export interface IResultItemProps {
  name: string;
  value: number;
  valueType: string;
}

export function ResultItem(props: IResultItemProps) {
  const { name, value, valueType } = props;

  async function clickToClipboard() {
    await navigator.clipboard.writeText(value.toString());
    makeToast("Скопировано в буфер обмена", ToastType.Info)
  }


  return (
    <div className="ResultItem">
      <p>
        {name}:{" "}
        <span className="quantity" onClick={clickToClipboard}>
          {value}
        </span>{" "}
        {valueType}
      </p>
    </div>
  );
}
