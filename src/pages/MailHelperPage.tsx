import { BodyTitle } from "../components/BodyTitle";
import "../style/MailHelperPage/MailHelperPage.css";

export interface IMailHelperProps {}

export function MailHelper(props: IMailHelperProps) {
  return (
    <div className="mailPageContainer">
      <BodyTitle
        pageTitle="Хелпер"
        pageDescription="Хелпер - помогает составлять письма подрядчикам."
      />
    </div>
  );
}
