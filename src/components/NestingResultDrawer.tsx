import { useState } from "react";
import { Button } from "./Button";
import "../style/NestingPage/nestingResultDrawer.css";
import { useAppSelector } from "../hooks/hooks";

export interface INestingResultDrawerProps {
  isExpand: boolean;
}

export function NestingResultDrawer(props: INestingResultDrawerProps) {
  const { isExpand } = props;
  const [isShow, setIsShow] = useState(isExpand);
  const [buttonStyle, setButtonStyle] = useState("primaryButton");
  const [buttonText, setButtonText] = useState("Показать раскладку");
  const quantityByWidth = useAppSelector(
    (state) => state.nestingDetails.mainQuantityByWidth
  );
  const quantityByHeight = useAppSelector(
    (state) => state.nestingDetails.mainQuantityByHeight
  );


  function toggleShow() {
    if (!isShow) {
      setButtonStyle("secondaryButton");
      setButtonText("Скрыть раскладку");
    } else {
      setButtonStyle("primaryButton");
      setButtonText("Показать раскладку");
    }
    setIsShow(!isShow);
  }

  return (
    <>
      <Button
        onClick={toggleShow}
        buttonText={buttonText}
        className={buttonStyle}
      />
      {isShow && (
        <div className="collapsibleContent">
          <div className="nestingResultDrawer">
            {Array(quantityByHeight).fill(0).map((item) => (
              <div key={item} className="divRow">
                {Array(quantityByWidth).fill(0).map((i) => (
                  <div key={i} className="divCol"></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
