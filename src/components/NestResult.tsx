import { useAppSelector } from "../hooks/hooks";
import { NewDrawer } from "../service/Drawer/NewDrawer";
import { getId } from "../utils/getId";
import "../style/NestingPage/nestingResultDrawer.css";

export interface INestResultProps {}

export function NestResult(props: INestResultProps) {
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
  const MainDetailContainer = drawer.initMainDetailContainer();
  const SubDetailContainer = drawer.initSubDetailContainer();
  const MainDetail = drawer.initMainDetail();
  const SubDetail = drawer.initSubDetail();
  const MainRow = drawer.initMainRow();
  const SubRow = drawer.initSubRow();

  return (
    <div className="nestResultContainer">
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
                      <MainDetailContainer key={getId()}>
                        <MainDetail />
                      </MainDetailContainer>
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
                      <SubDetailContainer key={getId()}>
                        <SubDetail />
                      </SubDetailContainer>
                    ))}
                </SubRow>
              ))}
          </SubNestContainer>
        </NestingContainer>
      </MaterialContainer>
    </div>
  );
}
