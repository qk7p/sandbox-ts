import { FlatMaterial } from "../../data/FlatMaterial";
import { Detail } from "../../data/Detail";
import { setDataForDrawer } from "../../utils/setDataForDrawer";

export class FlatNester {
  detail: Detail;
  flatMaterial: FlatMaterial;
  mainQuantityByWidth: number;
  mainQuantityByHeight: number;
  subQuantityByWidth: number;
  subQuantityByHeight: number;
  mainMaterialWidth: number;
  mainMaterialHeight: number;
  subMaterialWidth: number;
  subMaterialHeight: number;
  nestedBy: string;

  constructor(_detail: Detail, _flatmaterial: FlatMaterial) {
    this.detail = _detail;
    this.flatMaterial = _flatmaterial;
    this.mainQuantityByWidth = 0;
    this.mainQuantityByHeight = 0;
    this.subQuantityByWidth = 0;
    this.subQuantityByHeight = 0;
    this.mainMaterialWidth = 0;
    this.mainMaterialHeight = 0;
    this.subMaterialWidth = 0;
    this.subMaterialHeight = 0;
    this.nestedBy = "";
  }

  nest() {
    if (this.nestByWidth() >= this.nestByHeight()) {
      this.mainQuantityByWidth = Math.floor(
        this.flatMaterial.getCleanWidth() / this.detail.getCleanWidth()
      );
      this.mainQuantityByHeight = Math.floor(
        this.flatMaterial.getCleanHeight() / this.detail.getCleanHeight()
      );
      this.mainMaterialWidth =
        this.mainQuantityByWidth * this.detail.getCleanWidth();
      this.mainMaterialHeight = this.flatMaterial.getCleanHeight();
      this.subMaterialWidth =
        this.flatMaterial.getCleanWidth() - this.mainMaterialWidth;
      this.subMaterialHeight = this.mainMaterialHeight;
      if (
        this.detail.getCleanHeight() <= this.subMaterialWidth &&
        this.detail.getCleanWidth() <= this.mainMaterialHeight
      ) {
        this.subQuantityByWidth = Math.floor(
          this.subMaterialWidth / this.detail.getCleanHeight()
        );
        this.subQuantityByHeight = Math.floor(
          this.subMaterialHeight / this.detail.getCleanWidth()
        );
      }
      this.nestedBy = "byWidth";
      setDataForDrawer(this);
      return this.nestByWidth();
    } else {
      this.mainQuantityByWidth = Math.floor(
        this.flatMaterial.getCleanWidth() / this.detail.getCleanHeight()
      );
      this.mainQuantityByHeight = Math.floor(
        this.flatMaterial.getCleanHeight() / this.detail.getCleanWidth()
      );
      this.mainMaterialWidth = this.flatMaterial.getCleanWidth();
      this.mainMaterialHeight =
        this.mainQuantityByHeight * this.detail.getCleanWidth();
      this.subMaterialWidth = this.mainMaterialWidth;
      this.subMaterialHeight =
        this.flatMaterial.getCleanHeight() - this.mainMaterialHeight;
      if (
        this.detail.getCleanHeight() <= this.subMaterialHeight &&
        this.detail.getCleanWidth() <= this.subMaterialWidth
      ) {
        
        this.subQuantityByWidth = Math.floor(
          this.subMaterialWidth / this.detail.getCleanWidth()
        );
        this.subQuantityByHeight = Math.floor(
          this.subMaterialHeight / this.detail.getCleanHeight()
        );
      }
      this.nestedBy = "byHeight";
      setDataForDrawer(this);
      return this.nestByHeight();
    }
  }

  nestByWidth(): number {
    const firstResult =
      Math.floor(
        this.flatMaterial.getCleanWidth() / this.detail.getCleanWidth()
      ) *
      Math.floor(
        this.flatMaterial.getCleanHeight() / this.detail.getCleanHeight()
      );
    const usedSideA =
      this.detail.getCleanWidth() *
      Math.floor(
        this.flatMaterial.getCleanWidth() / this.detail.getCleanWidth()
      );
    const freeSideA = this.flatMaterial.getCleanWidth() - usedSideA;
    if (freeSideA >= this.detail.getCleanHeight()) {
      const secondResult = this.simpleNest(
        freeSideA,
        this.flatMaterial.getCleanHeight()
      );
      return firstResult + secondResult;
    } else {
      return firstResult;
    }
  }

  nestByHeight(): number {
    const firstResult =
      Math.floor(
        this.flatMaterial.getCleanWidth() / this.detail.getCleanHeight()
      ) *
      Math.floor(
        this.flatMaterial.getCleanHeight() / this.detail.getCleanWidth()
      );
    const usedSideB =
      this.detail.getCleanWidth() *
      Math.floor(
        this.flatMaterial.getCleanHeight() / this.detail.getCleanWidth()
      );
    const freeSideB = this.flatMaterial.getCleanHeight() - usedSideB;
    if (freeSideB >= this.detail.getCleanHeight()) {
      const secondResult = this.simpleNest(
        this.flatMaterial.getCleanWidth(),
        freeSideB
      );
      return firstResult + secondResult;
    } else {
      return firstResult;
    }
  }

  simpleNest(
    newCleanMaterialSideA: number,
    newCleanMaterialSideB: number
  ): number {
    return Math.max(
      Math.floor(newCleanMaterialSideA / this.detail.getCleanHeight()) *
        Math.floor(newCleanMaterialSideB / this.detail.getCleanWidth()),
      Math.floor(newCleanMaterialSideB / this.detail.getCleanHeight()) *
        Math.floor(newCleanMaterialSideA / this.detail.getCleanWidth())
    );
  }
}
