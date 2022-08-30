import { BodyTitle } from "../components/BodyTitle";
import "../style/MailHelperPage/mailHelperPage.css";
import { mailTextArray } from "../data/mailTextArray";
import { MailItem } from "../components/MailItem";

export interface IMailHelperProps {}

export function MailHelper(props: IMailHelperProps) {
  return (
    <div className="mailPageContainer">
      <BodyTitle
        pageTitle="Хелпер"
        pageDescription="Хелпер - помогает составлять письма подрядчикам."
      />
      <div className="mailBodyContainer">
        {mailTextArray.map((item) => (
          <MailItem text={item} />
        ))}
      </div>
    </div>
  );
}
