import Car from './10-car';

const cloneSymbol = Symbol('clone');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  [cloneSymbol]() {
    return new Car(this._brand, this._motor, this._color);
  }

  cloneCar() {
    const clonedCar = this[cloneSymbol]();
    Object.setPrototypeOf(clonedCar, Object.getPrototypeOf(this));
    return clonedCar;
  }
}
