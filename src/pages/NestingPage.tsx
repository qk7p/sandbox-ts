import "../style/NestingPage/NestingPage.css";
import { InputBox } from "../components/InputBox";
import { nestCurrentDetail } from "../utils/nestCurrentDetail";
import { ResultCard } from "../components/ResultCard";
import { calcDetailParams } from "../utils/calcDetailParams";
import { calcMaterialParams } from "../utils/calcMaterialParams";
import { BodyTitle } from "../components/BodyTitle";
import { Button } from "../components/Button";
import { calcEfficiency } from "../utils/calcEfficiency";
import { validateInputs } from "../utils/validateInputs";
import { NestingResultDrawer } from "../components/NestingResultDrawer";

export function NestingPage() {
  function calcAllParams() {
    if (validateInputs()) {
      nestCurrentDetail();
      calcDetailParams();
      calcMaterialParams();
      calcEfficiency();
    }
  }

  return (
    <div className="nestingPageContainer">
      <BodyTitle
        pageTitle="Нестер 2D"
        pageDescription="Нестер - средство для раскладки деталей на заготовку."
      />
      <div className="bodyContainer">
        <div className="cardContainer">
          <InputBox />
        </div>
        <div className="buttonContainer">
          <Button
            onClick={calcAllParams}
            buttonText="разложить"
            className="primaryButton"
          />
        </div>
        <ResultCard />
        <div className="nestingResultContainer">
          <NestingResultDrawer isExpand={false} />
        </div>
      </div>
    </div>
  );
}
