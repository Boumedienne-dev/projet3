const AbstractManager = require("./AbstractManager");

class userControllers extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (last_name, first_name, mail, hashedPassword, picture) values (?,?,?,?,?)`,
      [
        user.last_name,
        user.first_name,
        user.mail,
        user.hashedPassword,
        user.picture,
      ]
    );
  }

  updateWithoutPassword(user) {
    return this.connection.query(
      `update ${this.table} set last_name = ?, first_name = ?, mail = ?, hashedPassword = ?, picture = ? where id = ?`,
      [
        user.last_name,
        user.first_name,
        user.mail,
        user.hashedPassword,
        user.picture,
        user.id,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set last_name = ?, first_name = ?, mail = ?, hashedPassword = ?, picture = ? where id = ?`,
      [
        user.last_name,
        user.first_name,
        user.mail,
        user.hashedPassword,
        user.picture,
      ]
    );
  }

  findUserByEmail(email) {
    return this.connection.query(
      `select * from  ${this.table} where mail = ?`,
      [email]
    );
  }
}

module.exports = userControllers;
