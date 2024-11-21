class User {
  constructor(name, email, password, role) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  updateName(name) {
    if (!name) throw new Error('Name não pode ser nulo');
    if (!(typeof name == 'string')) throw new Error('Name deve ser uma String');
    if (name.trim() === '') throw new Error('Name deve ser uma string válida');
    this.name = name;
  }

  toLiteral() {
    return Object.assign({}, this);
  }

  static fromLiteral(data) {
    return Object.assign(new User(null, null, null, null), data);
  }
  // static fromLiteral(data) {
  //   const user = new User(
  //     data.name,
  //     data.email,
  //     data.password,
  //     data.role || null
  //   );
  //   user.id = data.id || null;
  //   user.createdAt = data.createdAt || null;
  //   user.modifiedAt = data.modifiedAt || null;
  //   user.comments = data.comments || null;
  //   user.publication = data.publications || null;
  //   user.replies = data.replies || null;
  //   return user;
  // }
}

module.exports = User;