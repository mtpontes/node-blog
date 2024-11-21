class Comment {
  constructor(text, userId, publicationId) {
    this.id = null;
    this.text = text;
    this.edited = false;
    this.userId = userId;
    this.publicationId = publicationId;
  }

  updateText(text) {
    this.text = text;
    this.edited = true;
  }

  toLiteral() {
    return Object.assign({}, this);
  }

  static fromLiteral(data) {
    return Object.assign(new Comment(null, null, null), data);
  }
}

module.exports = Comment;