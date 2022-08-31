import { useState } from "react";
import { Button } from "./Button";
import "../style/NestingPage/nestingResultDrawer.css";
import { useAppSelector } from "../hooks/hooks";
import { getId } from "../utils/getId";
import { Drawer } from "../service/Drawer/Drawer";

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

  const subQuantityByWidth = useAppSelector(
    (state) => state.nestingDetails.subQuantityByWidth
  );
  const subQuantityByHeight = useAppSelector(
    (state) => state.nestingDetails.subQuantityByHeight
  );

  const nestedBy = useAppSelector((state) => state.nestingDetails.nestedBy);

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
