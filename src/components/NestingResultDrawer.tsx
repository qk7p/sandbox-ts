import { useState } from "react";
import { Button } from "./Button";
import "../style/NestingPage/nestingResultDrawer.css";
import { Drawer } from "../service/Drawer/Drawer";

export interface INestingResultDrawerProps {
  isExpand: boolean;
}

export function NestingResultDrawer(props: INestingResultDrawerProps) {
  const { isExpand } = props;
  const [isShow, setIsShow] = useState(isExpand);
  const [buttonStyle, setButtonStyle] = useState("primaryButton");
  const [buttonText, setButtonText] = useState("Показать раскладку");

  const drawer = new Drawer();
  const MaterialWrapper = drawer.MaterialWrapper;
  const NestingWrapper = drawer.NestingWrapper;
  const MainNest = drawer.MainNestWrapper;
  const SubNest = drawer.SubNestWrapper;

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
       <MaterialWrapper>
       <NestingWrapper>
         <MainNest></MainNest>
         <SubNest></SubNest>
       </NestingWrapper>
     </MaterialWrapper>
      )}
    </>
  );
}
