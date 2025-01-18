class IllegalAttributeError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }

  toString() {
    return `${this.name}: ${this.message}`;
  }
}

module.exports = { IllegalAttributeError };