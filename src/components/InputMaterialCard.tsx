import * as React from "react";
import {
  changeMaterialWidth,
  changeMaterialHeight,
  changePaddingWidth,
  changePaddingHeight,
} from "../features/flatMaterial/flatMaterialSlice";
import { useAppDispatch } from "../hooks/hooks";
import { InputParams } from "./InputParams";
import "../style/NestingPage/InputCard.css";
import { CardHeader } from "./CardHeader";

export function InputMaterialCard() {
  const dispatch = useAppDispatch();

  const materialWidthHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(changeMaterialWidth(Number(event.target.value)));
  };
  const materialHeightHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(changeMaterialHeight(Number(event.target.value)));
  };
  const paddingWidthHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(changePaddingWidth(Number(event.target.value)));
  };
  const paddingHeightHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(changePaddingHeight(Number(event.target.value)));
  };

  return (
    <div className="inputCard">
      <CardHeader header="Параметры заготовки:" />
      <div className="outerBox">
        <div className="leftInnerBox">
          <InputParams
            placeholder="ширина заготовки:"
            changeHandler={materialWidthHandler}
          />
          <InputParams
            placeholder="высота заготовки:"
            changeHandler={materialHeightHandler}
          />
        </div>
        <div className="rightInnerBox">
          <InputParams
            placeholder="отступ по ширине:"
            changeHandler={paddingWidthHandler}
          />
          <InputParams
            placeholder="отступ по высоте:"
            changeHandler={paddingHeightHandler}
          />
        </div>
      </div>
    </div>
  );
}
