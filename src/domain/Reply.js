class Reply {
  constructor(text, userId, commentId) {
    this.id = null;
    this.text = text;
    this.edited = false;
    this.userId = userId;
    this.commentId = commentId;
  }

  updateText(text) {
    this.text = text;
    this.edited = true;
  }

  toLiteral() {
    return Object.assign({}, this);
  }

  static fromLiteral(data) {
    return Object.assign(new Reply(null, null, null), data);
  }
}

module.exports = Reply;