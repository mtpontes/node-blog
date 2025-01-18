class User {
  constructor(name, email, password, role) {
    this.name = this.assertAttribute(name, 'name');
    this.email = this.assertAttribute(email, 'email');
    this.password = this.assertAttribute(password, 'password');
    this.role = this.assertAttribute(role, 'role');
  }

  updateName(name) {
    const isValid = this.assertAttribute(name, 'name').trim() !== '';
    if (!isValid) throw new Error('Name cannot be empty');

    this.name = name;
  }

  assertAttribute(value, attributeName) {
    if (!value) throw new Error(`${attributeName} não pode ser nulo`);
    return value;
  }

  toLiteral() {
    return Object.assign({}, this);
  }

  static fromLiteral(data) {
    return Object.assign(new User(null, null, null, null), data);
  }
}

module.exports = User;