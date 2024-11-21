class Publication {
  constructor(id = null, description, imageLink = null, userId, edited = false) {
    this.id = id;
    this.description = description;
    this.imageLink = imageLink;
    this.edited = true;
    this.userId = userId;
  }

  updateDescription(newDescription) {
    if (!newDescription) throw new Error('Description não pode ser nulo');
    if ((typeof newDescription !== 'string')) throw new Error('Description deve ser uma String');
    this.description = newDescription;
    this.edited = true;
  }

  toLiteral() {
    return Object.assign({}, this);
  }

  static fromLiteral(data) {
    return Object.assign(new Publication(null, null, null), data);
  }
}

module.exports = Publication;