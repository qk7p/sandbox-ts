import * as React from "react";
import {
  changeDetailHeight,
  changeDetailWidth,
  changeMarginHeight,
  changeMarginWidth,
} from "../features/detail/detailSlice";
import { useAppDispatch } from "../hooks/hooks";
import { InputParams } from "./InputParams";
import "../style/NestingPage/InputCard.css";
import { CardHeader } from "./CardHeader";

export function InputDetailCard() {
  const dispatch = useAppDispatch();

  const detailWidthHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    dispatch(changeDetailWidth(Number(event.target.value)));
  };
  const detailHeightHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    dispatch(changeDetailHeight(Number(event.target.value)));
  };
  const MarginWidthHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    dispatch(changeMarginWidth(Number(event.target.value)));
  };
  const MarginHeightHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    dispatch(changeMarginHeight(Number(event.target.value)));
  };

  return (
    <div className="inputCard">
      <CardHeader header="Параметры детали:" />
      <div className="outerBox">
        <div className="leftInnerBox">
          <InputParams
            placeholder="ширина детали:"
            changeHandler={detailWidthHandler}
          />
          <InputParams
            placeholder="высота детали:"
            changeHandler={detailHeightHandler}
          />
        </div>
        <div className="rightInnerBox">
          <InputParams
            placeholder="вылет по ширине:"
            changeHandler={MarginWidthHandler}
          />
          <InputParams
            placeholder="вылет по высоте:"
            changeHandler={MarginHeightHandler}
          />
        </div>
      </div>
    </div>
  );
}
