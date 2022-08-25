export class Quad {
  private sideA: number;
  private sideB: number;
  constructor(_sideA: number, _sideB: number) {
    this.sideA = _sideA;
    this.sideB = _sideB;
  }

  public getWidth(): number {
    return this.sideA;
  }

  public getHeight(): number {
    return this.sideB;
  }
}
