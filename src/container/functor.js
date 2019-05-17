class Functor {
  constructor(value) {
    this._value = value;
  }

  static of(value) {
    return new Functor(value);
  }

  map(fn) {
    return Functor.of(
      typeof fn === 'function'
        ? fn(this._value)
        : this._value
    );
  }

  value() {
    return this._value;
  }
}

export default Functor;