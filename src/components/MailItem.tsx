import { ToastType } from "../data/ToastItem";
import "../style/MailHelperPage/mailItem.css";
import { makeToast } from "../utils/makeToast";

export interface IMailItemProps {
  text: string;
}

export function MailItem(props: IMailItemProps) {
  const { text } = props;

  async function clickToClipboard() {
    await navigator.clipboard.writeText(text.toString());
    makeToast("Скопировано в буфер обмена", ToastType.Info);
  }

  return (
    <div className="mailItem">
      <span className="mailText" onClick={clickToClipboard}>
        {text}
      </span>
    </div>
  );
}
