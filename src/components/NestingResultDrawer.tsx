import { useState } from "react";
import { Button } from "./Button";
import { NestResult } from "./NestResult";
export interface INestingResultDrawerProps {
  isExpand: boolean;
}

export function NestingResultDrawer(props: INestingResultDrawerProps) {
  const { isExpand } = props;
  const [isShow, setIsShow] = useState(isExpand);
  const [buttonStyle, setButtonStyle] = useState("primaryButton");
  const [buttonText, setButtonText] = useState("Показать раскладку");

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

      {isShow && <NestResult />}
    </>
  );
}
