import "../style/NestingPage/NestingPage.css";
import { InputBox } from "../components/InputBox";
import { nestCurrentDetail } from "../utils/nestCurrentDetail";
import { ResultCard } from "../components/ResultCard";
import { calcDetailParams } from "../utils/calcDetailParams";
import { calcMaterialParams } from "../utils/calcMaterialParams";
import { BodyTitle } from "../components/BodyTitle";
import { PrimaryButton } from "../components/PrimaryButton";
import { Toast } from "../components/Toast";


export function NestingPage() {
  function calcAllParams() {
    nestCurrentDetail();
    calcDetailParams();
    calcMaterialParams();
  }

  return (
    <div className="mainContainer">
      <BodyTitle
        pageTitle="Нестер 2D"
        pageDescription="Нестер - средство для раскладки деталей на заготовку."
      />
      <div className="bodyContainer">
        <div className="cardContainer">
          <InputBox />
        </div>
        <div className="buttonContainer">
          <PrimaryButton onClick={calcAllParams} buttonText="разложить" />
        </div>
        <ResultCard />
      </div>
      <Toast />
    </div>
  );
}
