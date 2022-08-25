import { Quad } from "./Quad";

export class Detail extends Quad {
  marginA: number;
  marginB: number;
  constructor(
    _width: number,
    _height: number,
    _marginWidth: number,
    _marginHeight: number
  ) {
    super(_width, _height);
    this.marginA = _marginWidth;
    this.marginB = _marginHeight;
  }

  public getCleanWidth(): number {
    return this.getWidth() + this.marginA * 2;
  }

  public getCleanHeight(): number {
    return this.getHeight() + this.marginB * 2;
  }

  public getDetailAreaWithMargins(): number {
    return this.getCleanWidth() * this.getCleanHeight();
  }
}
