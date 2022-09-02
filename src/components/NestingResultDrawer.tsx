import { useState } from "react";
import { Button } from "./Button";
import "../style/NestingPage/nestingResultDrawer.css";
import { useAppSelector } from "../hooks/hooks";
import { NewDrawer } from "../service/Drawer/NewDrawer";
import { getId } from "../utils/getId";
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

  let drawer = new NewDrawer();
  const MaterialContainer = drawer.initMainContainer();
  const NestingContainer = drawer.initNestingContainer();
  const MainNestContainer = drawer.initMainNestContainer();
  const SubNestContainer = drawer.initSubNestContainer();
  const MainDetail = drawer.initMainDetail();
  const SubDetail = drawer.initSubDetail();
  const MainRow = drawer.initMainRow();
  const SubRow = drawer.initSubRow();

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
        <MaterialContainer>
          <NestingContainer>
            <MainNestContainer>
              {Array(quantityByHeight)
                .fill(0)
                .map(() => (
                  <MainRow key={getId()}>
                    {Array(quantityByWidth)
                      .fill(0)
                      .map(() => (
                        <MainDetail key={getId()}></MainDetail>
                      ))}
                  </MainRow>
                ))}
            </MainNestContainer>
            <SubNestContainer>
              {Array(subQuantityByHeight)
                .fill(0)
                .map(() => (
                  <SubRow key={getId()}>
                    {Array(subQuantityByWidth)
                      .fill(0)
                      .map(() => (
                        <SubDetail key={getId()}></SubDetail>
                      ))}
                  </SubRow>
                ))}
            </SubNestContainer>
          </NestingContainer>
        </MaterialContainer>
      )}
    </>
  );
}
