import styled, { StyledComponent } from "styled-components";
import { store } from "../../store/store";

export class Drawer {
  ratio: number;
  flexDirection: string;
  nestWidth: number;
  nestHeight: number;
  mainNestWidth: number;
  mainNestHeight: number;
  subNestWidth: number;
  subNestHeight: number;
  MaterialWrapper: StyledComponent<"div", any, {}, never>;
  MainNestWrapper: StyledComponent<"div", any, {}, never>;
  SubNestWrapper: StyledComponent<"div", any, {}, never>;
  NestingWrapper: StyledComponent<"div", any, {}, never>;

  constructor() {
    const state = store.getState();
    if (state.nestingDetails.nestedBy === "byWidth") {
      this.flexDirection = "row";
    } else {
      this.flexDirection = "column";
    }
    const materialWidth = state.flatMaterial.width;
    const materialHeight = state.flatMaterial.height;
    this.ratio = materialWidth / materialHeight;

    const cleanMaterialWidth = materialWidth - state.flatMaterial.paddingWidth;
    const cleanMaterialHeight =
      materialHeight - state.flatMaterial.paddingHeight;
    if (this.flexDirection === "row") {
      this.nestWidth = (cleanMaterialWidth * 100) / materialWidth;
      this.nestHeight = 100;
      this.mainNestWidth =
        (state.nestingDetails.mainMaterialWidth * 100) / cleanMaterialWidth;
      this.mainNestHeight = 100;
      this.subNestWidth =
        (state.nestingDetails.subMaterialWidth * 100) / cleanMaterialWidth;
      this.subNestHeight = 100;
    } else {
      this.nestWidth = 100;
      this.nestHeight = (cleanMaterialHeight * 100) / materialHeight;
      this.mainNestWidth = 100;
      this.mainNestHeight =
        (state.nestingDetails.mainMaterialHeight * 100) / cleanMaterialHeight;
      this.subNestWidth = 100;
      this.subNestHeight =
        (state.nestingDetails.subMaterialHeight * 100) / cleanMaterialHeight;
    }

    
    this.MaterialWrapper = styled.div`
      display: flex;
      width: 80%;
      border: 1px solid green;
      aspect-ratio: ${this.ratio};
      align-items: center;
      justify-content: space-around;
    `;
    this.NestingWrapper = styled.div`
      display: flex;
      flex-direction: ${this.flexDirection};
      border: 1px solid red;
      width: ${this.nestWidth}%;
      height: ${this.nestHeight}%;
    `;

    this.MainNestWrapper = styled.div`
      display: flex;
      flex-wrap: wrap;
      border: 1px solid blue;
      width: ${this.mainNestWidth}%;
      height: ${this.mainNestHeight}%;
    `;

    this.SubNestWrapper = styled.div`
      display: flex;
      flex-wrap: wrap;
      border: 1px solid yellow;
      width: ${this.subNestWidth}%;
      height: ${this.subNestHeight}%;
    `;
  }
}
