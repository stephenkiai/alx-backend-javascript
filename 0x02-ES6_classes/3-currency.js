export default class Currency {
  constructor(code, name) {
    this._code = this.constructor.validateString(code, 'Code');
    this._name = this.constructor.validateString(name, 'Name');
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = this.constructor.validateString(value, 'Code');
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this.constructor.validateString(value, 'Name');
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  static validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  static validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  static validateArray(value, attributeName) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${attributeName} must be an array`);
    }
    return value;
  }
}
