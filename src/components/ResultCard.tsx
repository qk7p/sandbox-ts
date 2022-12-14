import * as React from "react";
import { useAppSelector } from "../hooks/hooks";
import { ResultItem } from "./ResultItem";
import "../style/NestingPage/ResultCard.css";
import { CardHeader } from "./CardHeader";

export function ResultCard() {
  const quantity = useAppSelector((state) => state.currentNestingResult.result);
  const detailArea = Number(
    useAppSelector((state) => state.detailCalc.detailArea).toFixed(3)
  );
  const detailPerimeter = useAppSelector(
    (state) => state.detailCalc.detailPerimeter
  );
  const materialArea = useAppSelector(
    (state) => state.materialCalc.materialArea
  );
  const nestingEfficiency = useAppSelector(
    (state) => state.nestingDetails.nestingEfficiency
  );

  return (
    <div className="ResultCard">
      <CardHeader header="Результаты раскладки:" />
      <div className="innerBox">
        <ResultItem
          name="Количество на заготовке"
          value={quantity}
          valueType=" шт."
        />
        <ResultItem
          name="Площадь детали с вылетами"
          value={detailArea}
          valueType=" м2"
        />
        <ResultItem
          name="Периметр детали"
          value={detailPerimeter}
          valueType=" м.п."
        />
        <ResultItem
          name="Площадь заготовки с отступами"
          value={materialArea}
          valueType=" м2"
        />
        <ResultItem
          name="Эффективность раскладки:"
          value={nestingEfficiency}
          valueType="%"
        />
      </div>
    </div>
  );
}
