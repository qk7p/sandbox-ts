import { Quad } from "./Quad";

export class FlatMaterial extends Quad {
  private paddingWidth: number;
  private paddingHeight: number;
  constructor(
    _width: number,
    _height: number,
    _paddingWidth: number,
    _paddingHeight: number
  ) {
    super(_width, _height);
    this.paddingWidth = _paddingWidth;
    this.paddingHeight = _paddingHeight;
  }

  public getCleanWidth(): number {
    return this.getWidth() - this.paddingWidth * 2;
  }

  public getCleanHeight(): number {
    return this.getHeight() - this.paddingHeight * 2;
  }
}
