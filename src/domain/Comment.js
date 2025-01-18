const { IllegalAttributeError } = require('../infra/error/errors');

class Comment {
  constructor(text, userId, publicationId) {
    this.id = null;
    this.text = this.assertAttribute(text, 'text');
    this.edited = false;
    this.userId = this.assertAttribute(userId, 'userId');
    this.publicationId = this.assertAttribute(publicationId, 'publicationId');;
  }

  updateText(text) {
    const isBlank = this.assertAttribute(text, 'text').trim() === '';
    if (isBlank) throw new IllegalAttributeError('Text cannot be empty');

    this.text = text;
    this.edited = true;
  }

  assertAttribute(value, attributeName) {
    if (!value) throw new IllegalAttributeError(`${attributeName}: Must be valid value`);
    return value;
  }

  toLiteral() {
    return Object.assign({}, this);
  }

  static fromLiteral(data) {
    return Object.assign(new Comment(null, null, null), data);
  }
}

module.exports = Comment;