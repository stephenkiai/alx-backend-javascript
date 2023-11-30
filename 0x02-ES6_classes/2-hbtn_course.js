export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse.validateString(name, 'Name');
    this._length = HolbertonCourse.validateNumber(length, 'Length');
    this._students = HolbertonCourse.validateArray(students, 'Students');
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = HolbertonCourse.validateString(value, 'Name');
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = HolbertonCourse.validateNumber(value, 'Length');
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = HolbertonCourse.validateArray(value, 'Students');
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
