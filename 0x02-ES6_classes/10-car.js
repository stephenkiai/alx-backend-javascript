const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneSymbol]() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  cloneCar() {
    const clonedCar = this[cloneSymbol]();
    Object.setPrototypeOf(clonedCar, Object.getPrototypeOf(this));
    return clonedCar;
  }
}
