import styled, { StyledComponent } from "styled-components";
import { DetailState } from "../../features/detail/detailSlice";
import { flatMaterialState } from "../../features/flatMaterial/flatMaterialSlice";
import { NestingDetailsState } from "../../features/nestingDetails/nestingDetails";
import { store } from "../../store/store";

export class NewDrawer {
  _nestedBy: string;
  _nestingDetails: NestingDetailsState;
  _flatMaterial: flatMaterialState;
  _detail: DetailState;
  _cleanMaterialWidth: number;
  _cleanMaterialHeight: number;

  constructor() {
    this._nestingDetails = store.getState().nestingDetails;
    this._flatMaterial = store.getState().flatMaterial;
    this._detail = store.getState().detail;
    this._cleanMaterialWidth =
      this._flatMaterial.width - this._flatMaterial.paddingWidth;
    this._cleanMaterialHeight =
      this._flatMaterial.height - this._flatMaterial.paddingHeight;
    this._nestedBy = this._nestingDetails.nestedBy;
  }

  initMainContainer(): StyledComponent<"div", any, {}, never> {
    const ratio = this._flatMaterial.width / this._flatMaterial.height;
    if (this._nestedBy === "byWidth") {
    } else {
    }
    return styled.div`
      box-sizing: border-box;
      background-color: #5e5e5e;
      border-radius: 5px;
      overflow: visible;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      aspect-ratio: ${ratio};
    `;
  }

  initNestingContainer(): StyledComponent<"div", any, {}, never> {
    const width = (this._cleanMaterialWidth * 100) / this._flatMaterial.width;
    const height =
      (this._cleanMaterialHeight * 100) / this._flatMaterial.height;
    let flexDirection = "";
    if (this._nestedBy === "byWidth") {
      flexDirection = "row";
    } else {
      flexDirection = "column";
    }

    return styled.div`
      box-sizing: border-box;
      background-color: white;
      overflow: hidden;
      display: flex;
      flex-direction: ${flexDirection};
      width: ${width}%;
      height: ${height}%;
    `;
  }

  initMainNestContainer(): StyledComponent<"div", any, {}, never> {
    let width = 0;
    let height = 0;
    let flexDirection = "";

    if (this._nestedBy === "byWidth") {
      flexDirection = "column";
      width =
        (this._nestingDetails.mainMaterialWidth * 100) /
        this._cleanMaterialWidth;
      height = 100;
    } else {
      height =
        (this._nestingDetails.mainMaterialHeight * 100) /
        this._cleanMaterialHeight;
      width = 100;
      flexDirection = "column";
    }

    return styled.div`
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: ${flexDirection};
      width: ${width}%;
      height: ${height}%;
    `;
  }

  initSubNestContainer(): StyledComponent<"div", any, {}, never> {
    let width = 0;
    let height = 0;
    let flexDirection = "";
    let align = "";

    if (this._nestedBy === "byWidth") {
      height = 100;
      width =
        (this._nestingDetails.subMaterialWidth * 100) /
        this._cleanMaterialWidth;
      flexDirection = "row";
      align = "normal";
    } else {
      width = 100;
      height =
        (this._nestingDetails.subMaterialHeight * 100) /
        this._cleanMaterialHeight;
      flexDirection = "column";
      align = "center";
    }

    return styled.div`
      box-sizing: border-box;
      display: flex;
      align-items: ${align};
      justify-content: flex-start;
      flex-direction: ${flexDirection};
      width: ${width}%;
      height: ${height}%;
    `;
  }

  initMainDetailContainer(): StyledComponent<"div", any, {}, never> {
    let width = 0;
    let height = 0;

    if (this._nestedBy === "byHeight") {
      const heightSum = this._detail.width + this._detail.marginWidth * 2;
      const widthSum =
        (this._detail.height + this._detail.marginHeight * 2) *
        this._nestingDetails.mainQuantityByWidth;
      width =
        ((this._detail.height + this._detail.marginHeight * 2) * 100) /
        widthSum;
      height =
        ((this._detail.width + this._detail.marginWidth * 2) * 100) / heightSum;
    } else {
      const heightSum = this._detail.height + this._detail.marginHeight * 2;
      width =
        ((this._detail.height + this._detail.marginHeight * 2) * 100) /
        heightSum;
      height = 100;
    }
    return styled.div`
      display: flex;
      align-items: center;
      justify-content: space-around;
      overflow: hidden;
      box-sizing: border-box;
      background-color: #e5e7e7;
      width: ${width}%;
      height: ${height}%;
    `;
  }

  initSubDetailContainer(): StyledComponent<"div", any, {}, never> {
    let width = 0;
    let height = 0;

    if (this._nestedBy === "byHeight") {
      const heightSum = this._detail.width + this._detail.marginWidth * 2;
      height = 100;
      width =
        ((this._detail.width + this._detail.marginWidth * 2) * 100) / heightSum;
    } else {
      const heightSum = this._detail.height + this._detail.marginHeight * 2;
      height =
        ((this._detail.height + this._detail.marginHeight * 2) * 100) /
        heightSum;
      width = 100;
    }

    return styled.div`
      display: flex;
      align-items: center;
      justify-content: space-around;
      overflow: hidden;
      box-sizing: border-box;
      background-color: #e5e7e7;
      width: ${width}%;
      height: ${height}%;
    `;
  }
  initMainRow(): StyledComponent<"div", any, {}, never> {
    let height = 0;
    let width = 0;
    if (this._nestedBy === "byWidth") {
      const heightSum = this._detail.height + this._detail.marginHeight * 2;
      const widthSum =
        (this._detail.width + this._detail.marginWidth * 2) *
        this._nestingDetails.mainQuantityByWidth;
      height = (heightSum * 100) / this._nestingDetails.mainMaterialHeight;
      width = (widthSum * 100) / this._nestingDetails.mainMaterialWidth;
    } else {
      const heightSum = this._detail.width + this._detail.marginWidth * 2;
      const widthSum =
        (this._detail.height + this._detail.marginHeight * 2) *
        this._nestingDetails.mainQuantityByWidth;
      height = (heightSum * 100) / this._nestingDetails.mainMaterialHeight;
      width = (widthSum * 100) / this._nestingDetails.mainMaterialWidth;
    }

    return styled.div`
      display: flex;
      flex-direction: row;
      width: ${width}%;
      height: ${height}%;
    `;
  }

  initSubRow(): StyledComponent<"div", any, {}, never> {
    let height = 0;
    let width = 0;
    if (this._nestedBy === "byWidth") {
      const heightSum = this._detail.width + this._detail.marginWidth * 2;
      const widthSum =
        (this._detail.height + this._detail.marginHeight * 2) *
        this._nestingDetails.subQuantityByHeight;
      height = (heightSum * 100) / this._nestingDetails.subMaterialHeight;
      width = (widthSum * 100) / this._nestingDetails.subMaterialWidth;
    } else {
      const heightSum = this._detail.height + this._detail.marginHeight * 2;
      const widthSum =
        (this._detail.width + this._detail.marginWidth * 2) *
        this._nestingDetails.subQuantityByWidth;
      height = (heightSum * 100) / this._nestingDetails.subMaterialHeight;
      width = (widthSum * 100) / this._nestingDetails.subMaterialWidth;
    }

    return styled.div`
      display: flex;
      flex-direction: row;
      width: ${width}%;
      height: ${height}%;
    `;
  }

  initMainDetail(): StyledComponent<"div", any, {}, never> {
    let width = 0;
    let height = 0;

    if (this._nestedBy === "byHeight") {
      const heightSum = this._detail.width + this._detail.marginWidth * 2;
      const widthSum = this._detail.height + this._detail.marginHeight * 2;

      width = (this._detail.height * 100) / widthSum;
      height = (this._detail.width * 100) / heightSum;
    } else {
      const heightSum = this._detail.height + this._detail.marginHeight * 2;
      const widthSum = this._detail.width + this._detail.marginWidth * 2;
      width = (this._detail.height * 100) / heightSum;
      height = (this._detail.width * 100) / widthSum;
    }
    return styled.div`
      box-sizing: border-box;
      background-color: white;
      border: 0.1px solid black;
      width: ${width}%;
      height: ${height}%;
    `;
  }

  initSubDetail(): StyledComponent<"div", any, {}, never> {
    let width = 0;
    let height = 0;

    if (this._nestedBy === "byHeight") {
      const heightSum = this._detail.height + this._detail.marginHeight * 2;
      const widthSum = this._detail.width + this._detail.marginWidth * 2;
      height = (this._detail.height * 100) / heightSum;
      width = (this._detail.width * 100) / widthSum;
    } else {
      const heightSum = this._detail.height + this._detail.marginHeight * 2;
      const widthSum = this._detail.width + this._detail.marginWidth * 2;
      height = (this._detail.height * 100) / heightSum;
      width = (this._detail.width * 100) / widthSum;
    }

    return styled.div`
      box-sizing: border-box;
      background-color: white;
      border: 0.1px solid black;
      width: ${width}%;
      height: ${height}%;
    `;
  }
}
