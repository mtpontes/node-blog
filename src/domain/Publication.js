const { IllegalAttributeError } = require('../infra/error/errors');

class Publication {
  constructor(id = null, description, imageLink = null, userId, edited = false) {
    this.id = id;
    this.description = this.assertAttribute(description, 'description');
    this.imageLink = this.assertAttribute(imageLink, 'imageLink');
    this.edited = edited;
    this.userId = this.assertAttribute(userId, 'userId');
  }

  updateDescription(newDescription) {
    const isValid = this.assertAttribute(newDescription).trim() !== '';
    const isPossivelReceberInvalido = this.imageLink ? true : false;
    if (!isValid && !isPossivelReceberInvalido)
      throw new IllegalAttributeError('Description and imageLink cannot be empty simultaneously');

    this.description = newDescription;
    this.edited = true;
  }

  assertAttribute(value, attributeName) {
    if (!value) throw new IllegalAttributeError(`${attributeName}: cannot be null`);
    return value;
  }

  toLiteral() {
    return Object.assign({}, this);
  }

  static fromLiteral(data) {
    return Object.assign(new Publication(null, null, null), data);
  }
}

module.exports = Publication;