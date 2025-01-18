const { IllegalAttributeError } = require('../infra/error/errors');

class Reply {
  constructor(text, userId, commentId) {
    this.id = null;
    this.text = this.assertAttribute(text, 'text');
    this.edited = false;
    this.userId = this.assertAttribute(userId, 'userId');
    this.commentId = this.assertAttribute(commentId, 'commentId');
  }

  updateText(text) {
    const isBlank = this.assertAttribute(text, 'text') === '';
    if (isBlank) throw new IllegalAttributeError(`Text cannot be empty`);

    this.text = text;
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
    return Object.assign(new Reply(null, null, null), data);
  }
}

module.exports = Reply;